import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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

  const { name, email, phone, message } = request.body;

  if (!name || !email || !phone || !message) {
    return response.status(400).json({ error: 'Missing required fields' });
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
      subject: `New Inquiry from ${escapeHtml(name)}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message)}</p>
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
