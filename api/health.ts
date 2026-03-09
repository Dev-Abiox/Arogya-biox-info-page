import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_request: VercelRequest, response: VercelResponse) {
  return response.status(200).json({
    ok: true,
    hasResendKey: !!process.env.RESEND_API_KEY,
    nodeVersion: process.version,
    timestamp: new Date().toISOString(),
  });
}
