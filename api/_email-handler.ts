import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkRateLimit } from './_rate-limit';
import { escapeHtml, validateEmail, validateFieldLengths } from './_validate';

interface FieldLengthRule {
  field: string;
  maxLength: number;
}

interface EmailHandlerOptions {
  requiredFields: string[];
  fieldLengthRules: FieldLengthRule[];
  buildSubject: (body: Record<string, string>) => string;
  buildHtml: (body: Record<string, string>) => string;
}

export function createEmailHandler(options: EmailHandlerOptions) {
  return async function handler(request: VercelRequest, response: VercelResponse) {
    try {
      if (!process.env.RESEND_API_KEY) {
        console.error('Missing RESEND_API_KEY');
        return response.status(500).json({ error: 'Server configuration error' });
      }

      if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
      }

      const { allowed, retryAfterMs } = checkRateLimit(request);
      if (!allowed) {
        response.setHeader('Retry-After', String(Math.ceil(retryAfterMs / 1000)));
        return response.status(429).json({ error: 'Too many requests. Please try again later.' });
      }

      const body = request.body;

      if (!body || typeof body !== 'object') {
        return response.status(400).json({ error: 'Invalid request body' });
      }

      for (const field of options.requiredFields) {
        if (!body[field]) {
          return response.status(400).json({ error: 'Missing required fields' });
        }
      }

      const lengthError = validateFieldLengths(body, options.fieldLengthRules);
      if (lengthError) {
        return response.status(400).json({ error: lengthError });
      }

      if (!validateEmail(body.email)) {
        return response.status(400).json({ error: 'Invalid email format' });
      }

      const EMAIL_TO = process.env.EMAIL_TO || 'contact@arogyabiox.com';
      const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';

      const resend = new Resend(process.env.RESEND_API_KEY);

      const escaped: Record<string, string> = {};
      for (const key of Object.keys(body)) {
        escaped[key] = typeof body[key] === 'string' ? escapeHtml(body[key]) : String(body[key]);
      }

      const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: body.email,
        subject: options.buildSubject(escaped),
        html: options.buildHtml(escaped),
      });

      if (error) {
        console.error('Resend error:', error);
        return response.status(500).json({ error: 'Failed to send email. Please try again.' });
      }

      return response.status(200).json({ success: true });
    } catch (error) {
      console.error('Server error:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
