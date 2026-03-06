export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email) && email.length <= 254;
}

export function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface FieldLengthRule {
  field: string;
  maxLength: number;
}

export function validateFieldLengths(
  body: Record<string, unknown>,
  rules: FieldLengthRule[]
): string | null {
  for (const rule of rules) {
    const value = body[rule.field];
    if (typeof value === 'string' && value.length > rule.maxLength) {
      return `${rule.field} exceeds maximum length of ${rule.maxLength} characters`;
    }
  }
  return null;
}
