import { createEmailHandler } from './_email-handler';

export default createEmailHandler({
  requiredFields: ['name', 'email', 'phone', 'message'],
  fieldLengthRules: [
    { field: 'name', maxLength: 200 },
    { field: 'email', maxLength: 254 },
    { field: 'phone', maxLength: 15 },
    { field: 'message', maxLength: 5000 },
  ],
  buildSubject: (body) => `New Inquiry from ${body.name}`,
  buildHtml: (body) => `
    <div>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
    </div>
  `,
});
