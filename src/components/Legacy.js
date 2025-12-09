import { motion } from 'framer-motion';
import { GiMilitaryFort, GiIndianPalace, GiBookCover } from 'react-icons/gi';
import { FaGraduationCap, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Legacy.css';

const Legacy = () => {
  return (
    <section id="legacy" className="legacy">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ETERNAL LEGACY</h2>
          <p className="section-subtitle">
            His story continues to inspire generations of Indians
          </p>
        </motion.div>

        <div className="legacy-content">
          <motion.div 
            className="legacy-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bsf-post">
              <GiMilitaryFort className="legacy-icon-large" />
              <h3>Ranchordas Pagi BSF Post</h3>
              <p>
                In recognition of his invaluable service, the Border Security Force named a strategic post in Jaisalmer after him. The "Ranchordas Pagi Post" stands as a permanent reminder of his courage and dedication to the nation.
              </p>
              <div className="post-details">
                <div className="detail">
                  <strong>Location:</strong> Jaisalmer, Rajasthan
                </div>
                <div className="detail">
                  <strong>Established:</strong> 1971
                </div>
                <div className="detail">
                  <strong>Significance:</strong> Guards India's western border
                </div>
              </div>
            </div>
          </motion.div>

          <div className="legacy-grid">
            <motion.div 
              className="legacy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GiIndianPalace className="card-icon" />
              <h4>National Recognition</h4>
              <p>His story is now part of Indian history textbooks, teaching future generations about unsung heroes.</p>
            </motion.div>

            <motion.div 
              className="legacy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GiBookCover className="card-icon" />
              <h4>Cultural Impact</h4>
              <p>Multiple books, documentaries, and films have been inspired by his extraordinary life.</p>
            </motion.div>

            <motion.div 
              className="legacy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FaGraduationCap className="card-icon" />
              <h4>Educational Programs</h4>
              <p>Schools across India organize special sessions about his contributions to the nation.</p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="outreach-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Get Involved</h3>
          <p>Help us spread the story of this national hero</p>
          
          <div className="outreach-cards">
            <div className="outreach-card">
              <FaGraduationCap className="outreach-icon" />
              <h4>Educational Outreach</h4>
              <p>Request a speaker or documentary screening for your school or institution</p>
              <button className="btn-secondary">Request Program</button>
            </div>

            <div className="outreach-card">
              <FaEnvelope className="outreach-icon" />
              <h4>Press & Media</h4>
              <p>For interviews, press kits, and media inquiries</p>
              <button className="btn-secondary">Contact Press</button>
            </div>

            <div className="outreach-card">
              <FaPhone className="outreach-icon" />
              <h4>Documentary Screenings</h4>
              <p>Organize a screening in your city or community</p>
              <button className="btn-secondary">Book Screening</button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="tribute-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote>
            "Without Ranchordas Pagi's guidance, our victory in the desert would have been impossible. He was not just a guide, but a true soldier of India."
          </blockquote>
          <cite>— Indian Army Veteran, 1971 War</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;
