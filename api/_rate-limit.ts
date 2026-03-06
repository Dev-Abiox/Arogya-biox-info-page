import type { VercelRequest } from '@vercel/node';

// In-memory rate limiter for Vercel serverless functions.
// Uses a global Map that persists within a single function instance's lifecycle.
// For production at scale, replace with Upstash Redis or Vercel KV.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000; // 1 minute

export function checkRateLimit(request: VercelRequest): { allowed: boolean; retryAfterMs: number } {
  const ip =
    (Array.isArray(request.headers['x-forwarded-for'])
      ? request.headers['x-forwarded-for'][0]
      : request.headers['x-forwarded-for']?.split(',')[0]?.trim()) ||
    request.socket?.remoteAddress ||
    'unknown';

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap) {
      if (val.resetAt < now) rateLimitMap.delete(key);
    }
  }

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterMs: 0 };
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS) {
    return { allowed: false, retryAfterMs: entry.resetAt - now };
  }

  return { allowed: true, retryAfterMs: 0 };
}
