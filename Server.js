
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email provider (e.g., Gmail, Outlook, etc.)
  auth: {
    user: '', // Your email address
    pass: 'your-email-password', // Your email password (consider using app-specific passwords)
  },
});

// Pre-Order Endpoint
app.post('/api/preorder', async (req, res) => {
  const { name, email, message } = req.body;

  // Email Content
  const mailOptions = {
    from: 'your-email@gmail.com', // Your email address
    to: 'your-email@gmail.com', // Send the email to yourself
    subject: 'Ny Förbeställning - Bluffspelet',
    text: `Ny förbeställning:\n\nNamn: ${name}\nE-post: ${email}\nMeddelande: ${message || 'Inga kommentarer'}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Kunde inte skicka e-post.' });
  }
});

// Start the Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
