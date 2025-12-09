import { motion } from 'framer-motion';
import { GiMilitaryFort, GiDesert } from 'react-icons/gi';
import { FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './LegacyPage.css';

const LegacyPage = () => {
  return (
    <div className="legacy-page">
      <section className="page-hero legacy-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">ETERNAL LEGACY</h1>
            <p className="page-subtitle">
              His story continues to inspire generations of Indians
            </p>
          </motion.div>
        </div>
      </section>

      <section className="legacy-content">
        <div className="container">
          {/* BSF Post Section */}
          <motion.div 
            className="bsf-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bsf-header">
              <GiMilitaryFort className="bsf-icon-large" />
              <h2>Ranchordas Pagi BSF Post</h2>
              <p className="bsf-subtitle">A Permanent Reminder of Courage and Service</p>
            </div>

            <div className="bsf-content-grid">
              <div className="bsf-info">
                <p className="bsf-description">
                  In recognition of his invaluable service to the nation, the Border Security Force named 
                  a strategic post in Jaisalmer after Ranchordas Pagi. The "Ranchordas Pagi Post" stands 
                  as a permanent reminder of his courage, dedication, and the crucial role he played in 
                  India's defense.
                </p>

                <div className="bsf-details-grid">
                  <div className="detail-card">
                    <FaMapMarkerAlt className="detail-icon" />
                    <h4>Location</h4>
                    <p>Jaisalmer District, Rajasthan<br />Near India-Pakistan Border</p>
                  </div>
                  <div className="detail-card">
                    <FaUsers className="detail-icon" />
                    <h4>Established</h4>
                    <p>1971<br />Post-Bangladesh Liberation War</p>
                  </div>
                  <div className="detail-card">
                    <GiDesert className="detail-icon" />
                    <h4>Significance</h4>
                    <p>Guards India's Western Border<br />Strategic Desert Outpost</p>
                  </div>
                  <div className="detail-card">
                    <GiMilitaryFort className="detail-icon" />
                    <h4>Current Status</h4>
                    <p>Active BSF Post<br />Operational 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bsf-image">
                <div className="bsf-placeholder">
                  <span>BSF Post Image</span>
                </div>
                <p className="image-caption">
                  The Ranchordas Pagi BSF Post continues to guard India's borders, 
                  serving as a living tribute to his legacy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Outreach Programs */}
          <motion.div 
            className="outreach-programs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Get Involved</h2>
            <p className="outreach-intro">
              Help us spread the story of this national hero and inspire future generations
            </p>

            <div className="programs-grid">
              <div className="program-card">
                <FaGraduationCap className="program-icon" />
                <h3>Educational Outreach</h3>
                <p>
                  Request a speaker or documentary screening for your school, college, or educational institution. 
                  We offer free educational programs to help students learn about Ranchordas Pagi's contributions.
                </p>
                <ul>
                  <li>Guest lectures by historians</li>
                  <li>Documentary screenings</li>
                  <li>Interactive workshops</li>
                  <li>Study materials and resources</li>
                </ul>
                <button className="btn-primary">Request Program</button>
              </div>

              <div className="program-card">
                <FaEnvelope className="program-icon" />
                <h3>Press & Media</h3>
                <p>
                  For interviews, press kits, high-resolution images, and media inquiries about 
                  Ranchordas Pagi's story and legacy.
                </p>
                <ul>
                  <li>Press releases and media kits</li>
                  <li>Interview arrangements</li>
                  <li>High-resolution photographs</li>
                  <li>Expert commentary</li>
                </ul>
                <button className="btn-primary">Contact Press</button>
              </div>

              <div className="program-card">
                <FaPhone className="program-icon" />
                <h3>Documentary Screenings</h3>
                <p>
                  Organize a screening of the Ranchordas Pagi documentary in your city, community center, 
                  or organization. We provide support for community screenings.
                </p>
                <ul>
                  <li>Community screenings</li>
                  <li>Corporate events</li>
                  <li>Military gatherings</li>
                  <li>Cultural festivals</li>
                </ul>
                <button className="btn-primary">Book Screening</button>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="testimonials-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Voices of Inspiration</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <blockquote>
                  "Without Ranchordas Pagi's guidance, our victory in the desert would have been impossible. 
                  He was not just a guide, but a true soldier of India."
                </blockquote>
                <cite>— Indian Army Veteran, 1971 War</cite>
              </div>

              <div className="testimonial-card">
                <blockquote>
                  "Learning about Ranchordas Pagi taught me that heroes come from all walks of life. 
                  His story inspires me to serve my country in whatever way I can."
                </blockquote>
                <cite>— Priya Sharma, Student, Delhi</cite>
              </div>

              <div className="testimonial-card">
                <blockquote>
                  "As a teacher, I use Ranchordas Pagi's story to show students the value of local knowledge 
                  and the importance of every citizen in nation-building."
                </blockquote>
                <cite>— Rajesh Kumar, History Teacher, Jaipur</cite>
              </div>
            </div>
          </motion.div>

          {/* Visit Section */}
          <motion.div 
            className="visit-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Visit the Memorial Sites</h2>
            <div className="visit-grid">
              <div className="visit-card">
                <h3>Ranchordas Pagi BSF Post</h3>
                <p><strong>Location:</strong> Jaisalmer, Rajasthan</p>
                <p><strong>Access:</strong> Restricted (Military Area)</p>
                <p><strong>Note:</strong> Special permissions required for visits</p>
              </div>

              <div className="visit-card">
                <h3>Memorial Museum</h3>
                <p><strong>Location:</strong> Jaisalmer City Center</p>
                <p><strong>Timings:</strong> 9:00 AM - 6:00 PM (All days)</p>
                <p><strong>Entry:</strong> Free for students, ₹50 for adults</p>
              </div>

              <div className="visit-card">
                <h3>Memorial Statue</h3>
                <p><strong>Location:</strong> Gandhi Chowk, Jaisalmer</p>
                <p><strong>Access:</strong> Open to public 24/7</p>
                <p><strong>Note:</strong> Popular spot for photography</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;
