import { motion } from 'framer-motion';
import { FaPlay, FaCalendar } from 'react-icons/fa';
import './DocumentaryPage.css';

const DocumentaryPage = () => {
  return (
    <div className="documentary-page">
      <section className="page-hero documentary-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">THE DOCUMENTARY</h1>
            <p className="page-subtitle">
              Experience the untold story of India's greatest desert scout
            </p>
          </motion.div>
        </div>
      </section>

      <section className="documentary-content">
        <div className="container">
          {/* Main Video Section */}
          <motion.div 
            className="video-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="video-container-large">
              <div className="film-strip top"></div>
              <div className="video-placeholder-large">
                <div className="play-button-large">
                  <FaPlay />
                </div>
                <div className="video-info">
                  <h2>Watch the Official Trailer</h2>
                  <p>Coming Soon to Theaters Nationwide</p>
                </div>
              </div>
              <div className="film-strip bottom"></div>
            </div>
          </motion.div>

          {/* Release Information */}
          <motion.div 
            className="release-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaCalendar className="release-icon" />
            <h2>Interview Project</h2>
            <p className="release-date">Ongoing — Preserving His Legacy</p>
            <p className="release-details">
              We are currently conducting interviews with family members, veterans, and those who knew 
              Ranchordas Pagi personally. These valuable testimonies will help preserve his legacy and 
              share his inspiring story with future generations across India.
            </p>
          </motion.div>

          {/* Behind the Scenes */}
          <motion.div 
            className="behind-scenes"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Behind the Scenes</h2>
            <div className="bts-grid">
              <div className="bts-item">
                <div className="bts-placeholder" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/ranchordas/desert.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <span style={{ background: 'rgba(0,0,0,0.6)', padding: '0.5rem 1rem', borderRadius: '5px' }}>Desert Image</span>
                </div>
                <p>Capturing the essence of the Thar Desert</p>
              </div>
              <div className="bts-item">
                <div className="bts-placeholder">Family Interview</div>
                <p>First-hand accounts from those who served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DocumentaryPage;
