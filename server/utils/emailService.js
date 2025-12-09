const nodemailer = require('nodemailer');

// Create email transporter
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Send order confirmation email
const sendOrderConfirmation = async (email, order) => {
  try {
    const mailOptions = {
      from: `"Ranchordas Pagi Foundation" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Order Confirmation - ${order.orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #3E4E39; color: #DB9E36; padding: 20px; text-align: center;">
            <h1>🇮🇳 Order Confirmed!</h1>
          </div>
          
          <div style="padding: 20px; background: #F5E6D3;">
            <h2>Thank you for your order!</h2>
            <p>Dear ${order.customerInfo.name},</p>
            <p>Your order has been confirmed. Here are the details:</p>
            
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3>Order Details</h3>
              <p><strong>Order ID:</strong> ${order.orderId}</p>
              <p><strong>Book:</strong> ${order.bookDetails.title}</p>
              <p><strong>Format:</strong> ${order.bookDetails.format}</p>
              <p><strong>Quantity:</strong> ${order.bookDetails.quantity}</p>
              <p><strong>Total Amount:</strong> ₹${order.payment.amount}</p>
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3>Delivery Address</h3>
              <p>${order.customerInfo.address.street}</p>
              <p>${order.customerInfo.address.city}, ${order.customerInfo.address.state}</p>
              <p>${order.customerInfo.address.pincode}</p>
            </div>
            
            <p>Your order will be shipped within 2-3 business days. You will receive a tracking number once shipped.</p>
            
            <p style="margin-top: 30px;">
              <strong>Jai Hind | Jai Bharat 🇮🇳</strong><br>
              Ranchordas Pagi Memorial Foundation
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Order confirmation email sent to:', email);
  } catch (error) {
    console.error('❌ Email sending error:', error);
  }
};

// Send contact form email
const sendContactEmail = async (contactData) => {
  try {
    const mailOptions = {
      from: `"Ranchordas Pagi Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: contactData.email,
      subject: `Contact Form: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Category:</strong> ${contactData.category}</p>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p>${contactData.message}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Contact form email sent');
  } catch (error) {
    console.error('❌ Email sending error:', error);
  }
};

module.exports = {
  sendOrderConfirmation,
  sendContactEmail
};
