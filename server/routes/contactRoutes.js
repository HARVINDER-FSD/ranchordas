const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../utils/emailService');

// Handle contact form submission
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, subject, category, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Send email notification
    await sendContactEmail({
      name,
      email,
      phone,
      subject,
      category,
      message
    });

    res.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error.message
    });
  }
});

module.exports = router;
