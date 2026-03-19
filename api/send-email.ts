import { createEmailHandler } from './_email-handler';

export default createEmailHandler({
  requiredFields: ['name', 'email', 'phone', 'message'],
  fieldLengthRules: [
    { field: 'name', maxLength: 200 },
    { field: 'phone', maxLength: 15 },
    { field: 'message', maxLength: 5000 },
  ],
  buildSubject: (escaped) => `New Inquiry from ${escaped.name}`,
  buildHtml: (escaped) => `
    <div>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escaped.name}</p>
      <p><strong>Email:</strong> ${escaped.email}</p>
      <p><strong>Phone:</strong> ${escaped.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${escaped.message}</p>
    </div>
  `,
});
