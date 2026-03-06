import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkRateLimit } from './_rate-limit';
import { escapeHtml, validateEmail, validateFieldLengths } from './_validate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
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

  const { fullName, email, labName, address, city, contact, selectedSlot } = request.body;

  if (!fullName || !email || !labName || !address || !city || !contact || !selectedSlot) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  const lengthError = validateFieldLengths(request.body, [
    { field: 'fullName', maxLength: 200 },
    { field: 'email', maxLength: 254 },
    { field: 'labName', maxLength: 300 },
    { field: 'address', maxLength: 500 },
    { field: 'city', maxLength: 100 },
    { field: 'contact', maxLength: 15 },
    { field: 'selectedSlot', maxLength: 50 },
  ]);
  if (lengthError) {
    return response.status(400).json({ error: lengthError });
  }

  if (!validateEmail(email)) {
    return response.status(400).json({ error: 'Invalid email format' });
  }

  const EMAIL_TO = process.env.EMAIL_TO || 'contact@arogyabiox.com';
  const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';

  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Demo Request from ${escapeHtml(fullName)}`,
      html: `
        <div>
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>HOSPITAL/Laboratory Name:</strong> ${escapeHtml(labName)}</p>
          <p><strong>Address:</strong> ${escapeHtml(address)}</p>
          <p><strong>City:</strong> ${escapeHtml(city)}</p>
          <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
          <p><strong>Requested Time Slot:</strong> ${escapeHtml(selectedSlot)}</p>
        </div>
      `,
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
}
