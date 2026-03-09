import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const steps: string[] = [];

  try {
    steps.push('1. Handler started');

    if (request.method !== 'POST') {
      return response.status(200).json({ steps, note: 'Send a POST request to test' });
    }

    steps.push('2. Checking env vars');
    const hasKey = !!process.env.RESEND_API_KEY;
    const keyPrefix = process.env.RESEND_API_KEY?.substring(0, 6) || 'MISSING';
    steps.push(`3. RESEND_API_KEY present: ${hasKey}, prefix: ${keyPrefix}`);

    steps.push('4. Parsing body');
    const body = request.body;
    steps.push(`5. Body type: ${typeof body}, keys: ${body ? Object.keys(body).join(', ') : 'null'}`);

    steps.push('6. Importing resend...');
    const { Resend } = await import('resend');
    steps.push('7. Resend imported successfully');

    steps.push('8. Creating Resend client...');
    const resend = new Resend(process.env.RESEND_API_KEY);
    steps.push('9. Resend client created');

    // Don't actually send - just confirm everything works up to this point
    return response.status(200).json({ success: true, steps });
  } catch (error) {
    steps.push(`ERROR: ${error instanceof Error ? error.message : String(error)}`);
    return response.status(500).json({
      success: false,
      steps,
      error: error instanceof Error ? { message: error.message, stack: error.stack } : String(error),
    });
  }
}
