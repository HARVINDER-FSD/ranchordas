import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'general',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">GET IN TOUCH</h1>
            <p className="page-subtitle">
              We'd love to hear from you — reach out for any inquiries
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="scroll-container">
          {/* Left Scroll - Contact Form */}
          <motion.div 
            className="scroll-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="scroll-rod top-rod"></div>
            <div className="scroll-paper">
              <div className="scroll-header">
                <div className="decorative-border"></div>
                <h2 className="scroll-title">Send Us a Message</h2>
                <p className="scroll-subtitle">Fill out the form below</p>
                <div className="decorative-border"></div>
              </div>

              <div className="scroll-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Category *</label>
                    <select 
                      name="category" 
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="education">Educational Outreach</option>
                      <option value="press">Press & Media</option>
                      <option value="screening">Documentary Screening</option>
                      <option value="book">Book Order/Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Subject *</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <textarea 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary btn-large scroll-btn">
                    <FaEnvelope /> Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="scroll-rod bottom-rod"></div>
          </motion.div>

          {/* Right Scroll - Contact Information */}
          <motion.div 
            className="scroll-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="scroll-rod top-rod"></div>
            <div className="scroll-paper">
              <div className="scroll-header">
                <div className="decorative-border"></div>
                <h2 className="scroll-title">Contact Information</h2>
                <p className="scroll-subtitle">Reach us through</p>
                <div className="decorative-border"></div>
              </div>

              <div className="scroll-content">
                <div className="info-cards">
                  <div className="info-card">
                    <FaEnvelope className="info-icon" />
                    <h3>Email</h3>
                    <p>info@ranchordaspagi.in</p>
                    <p>press@ranchordaspagi.in</p>
                  </div>

                  <div className="info-card">
                    <FaPhone className="info-icon" />
                    <h3>Phone</h3>
                    <p>+91 XXXXX XXXXX</p>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>

                  <div className="info-card">
                    <FaMapMarkerAlt className="info-icon" />
                    <h3>Address</h3>
                    <p>Ranchordas Pagi Memorial Foundation</p>
                    <p>Jaisalmer, Rajasthan, India</p>
                  </div>
                </div>


              </div>
            </div>
            <div className="scroll-rod bottom-rod"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
