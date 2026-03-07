import { createEmailHandler } from './_email-handler';

export default createEmailHandler({
  requiredFields: ['fullName', 'email', 'labName', 'address', 'city', 'contact', 'selectedSlot'],
  fieldLengthRules: [
    { field: 'fullName', maxLength: 200 },
    { field: 'email', maxLength: 254 },
    { field: 'labName', maxLength: 300 },
    { field: 'address', maxLength: 500 },
    { field: 'city', maxLength: 100 },
    { field: 'contact', maxLength: 15 },
    { field: 'selectedSlot', maxLength: 50 },
  ],
  buildSubject: (body) => `New Demo Request from ${body.fullName}`,
  buildHtml: (body) => `
    <div>
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${body.fullName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>HOSPITAL/Laboratory Name:</strong> ${body.labName}</p>
      <p><strong>Address:</strong> ${body.address}</p>
      <p><strong>City:</strong> ${body.city}</p>
      <p><strong>Contact:</strong> ${body.contact}</p>
      <p><strong>Requested Time Slot:</strong> ${body.selectedSlot}</p>
    </div>
  `,
});
