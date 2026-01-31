
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'contact@arogyabiox.com',
            reply_to: email,
            subject: `New Inquiry from ${name}`,
            html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ error });
        }

        console.log('Email sent successfully:', data);
        return res.json({ data });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/request-demo', async (req, res) => {
    const { fullName, email, labName, address, city, contact, selectedSlot } = req.body;

    if (!fullName || !email || !labName || !address || !city || !contact || !selectedSlot) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'contact@arogyabiox.com',
            reply_to: email,
            subject: `New Demo Request from ${fullName}`,
            html: `
        <div>
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>HOSPITAL/Laboratory Name:</strong> ${labName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Requested Time Slot:</strong> ${selectedSlot}</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ error });
        }

        console.log('Demo request email sent successfully:', data);
        return res.json({ data });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Local API server running at http://localhost:${port}`);
});
