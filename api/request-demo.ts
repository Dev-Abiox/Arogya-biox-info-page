import { createEmailHandler } from './_email-handler';

export default createEmailHandler({
  requiredFields: ['fullName', 'email', 'labName', 'address', 'city', 'contact', 'selectedSlot'],
  fieldLengthRules: [
    { field: 'fullName', maxLength: 200 },
    { field: 'labName', maxLength: 300 },
    { field: 'address', maxLength: 500 },
    { field: 'city', maxLength: 100 },
    { field: 'contact', maxLength: 15 },
    { field: 'selectedSlot', maxLength: 50 },
  ],
  buildSubject: (escaped) => `New Demo Request from ${escaped.fullName}`,
  buildHtml: (escaped) => `
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
