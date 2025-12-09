import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { GiMedal, GiDesert, GiMilitaryFort } from 'react-icons/gi';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-home sand-texture" style={{ backgroundImage: `linear-gradient(135deg, rgba(139, 90, 43, 0.85) 0%, rgba(62, 78, 57, 0.85) 100%), url(${process.env.PUBLIC_URL}/assets/book.jpg)` }}>
        <div className="hero-overlay"></div>
        
        <div className="footprint" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        <div className="footprint" style={{ left: '15%', top: '40%', animationDelay: '1s' }}></div>
        <div className="footprint" style={{ right: '20%', top: '30%', animationDelay: '2s' }}></div>
        <div className="footprint" style={{ right: '10%', top: '60%', animationDelay: '3s' }}></div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <span>🇮🇳 NATIONAL HERO</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            THE DESERT SCOUT<br />
            <span className="highlight">WHO HELPED INDIA WIN</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Ranchordas Pagi — The legendary guide who led the Indian Army through<br />
            the treacherous Thar Desert to victory in 1965 & 1971 Indo-Pak Wars
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="stat">
              <h3>2</h3>
              <p>Wars Won</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>KM Guided</p>
            </div>
            <div className="stat">
              <h3>∞</h3>
              <p>Legacy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links paper-texture">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            EXPLORE HIS LEGACY
          </motion.h2>

          <div className="links-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/achievements" className="link-card">
                <GiMedal className="link-icon" />
                <h3>Achievements</h3>
                <p>Discover the honors and recognition he received for his service</p>
                <span className="link-arrow"><FaArrowRight /></span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/book" className="link-card">
                <GiDesert className="link-icon" />
                <h3>The Book</h3>
                <p>Read the complete biography and untold stories</p>
                <span className="link-arrow"><FaArrowRight /></span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/story" className="link-card">
                <GiMilitaryFort className="link-icon" />
                <h3>His Story</h3>
                <p>Journey through the life of India's greatest desert scout</p>
                <span className="link-arrow"><FaArrowRight /></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="featured-quote">
        <div className="container">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            "Without Ranchordas Pagi's guidance, our victory in the desert would have been impossible. He was not just a guide, but a true soldier of India."
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            — Indian Army Veteran, 1971 War
          </motion.cite>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
