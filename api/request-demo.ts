import type { VercelRequest, VercelResponse } from '@vercel/node';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email) && email.length <= 254;
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(request: VercelRequest): boolean {
  const ip =
    (Array.isArray(request.headers['x-forwarded-for'])
      ? request.headers['x-forwarded-for'][0]
      : request.headers['x-forwarded-for']?.split(',')[0]?.trim()) ||
    request.socket?.remoteAddress ||
    'unknown';

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  entry.count++;
  return entry.count <= 5;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return response.status(500).json({ error: 'Server configuration error' });
    }

    if (request.method !== 'POST') {
      return response.status(405).json({ error: 'Method not allowed' });
    }

    if (!checkRateLimit(request)) {
      return response.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const body = request.body;

    if (!body || typeof body !== 'object') {
      return response.status(400).json({ error: 'Invalid request body' });
    }

    const { fullName, email, labName, address, city, contact, selectedSlot } = body;

    if (!fullName || !email || !labName || !address || !city || !contact || !selectedSlot) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    if (!validateEmail(email)) {
      return response.status(400).json({ error: 'Invalid email format' });
    }

    if (fullName.length > 200 || labName.length > 300 || address.length > 500 || city.length > 100 || contact.length > 15 || selectedSlot.length > 50) {
      return response.status(400).json({ error: 'Field length exceeds limit' });
    }

    const EMAIL_TO = process.env.EMAIL_TO || 'contact@arogyabiox.com';
    const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';

    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const escaped = {
      fullName: escapeHtml(fullName),
      email: escapeHtml(email),
      labName: escapeHtml(labName),
      address: escapeHtml(address),
      city: escapeHtml(city),
      contact: escapeHtml(contact),
      selectedSlot: escapeHtml(selectedSlot),
    };

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Demo Request from ${escaped.fullName}`,
      html: `
        <div>
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${escaped.fullName}</p>
          <p><strong>Email:</strong> ${escaped.email}</p>
          <p><strong>HOSPITAL/Laboratory Name:</strong> ${escaped.labName}</p>
          <p><strong>Address:</strong> ${escaped.address}</p>
          <p><strong>City:</strong> ${escaped.city}</p>
          <p><strong>Contact:</strong> ${escaped.contact}</p>
          <p><strong>Requested Time Slot:</strong> ${escaped.selectedSlot}</p>
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
