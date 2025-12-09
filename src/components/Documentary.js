import { motion } from 'framer-motion';
import { FaPlay, FaFilm, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Documentary.css';

const Documentary = () => {
  return (
    <section id="documentary" className="documentary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">THE DOCUMENTARY</h2>
          <p className="section-subtitle">
            Experience the untold story of India's greatest desert scout
          </p>
        </motion.div>

        <div className="documentary-content">
          <motion.div 
            className="video-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="video-placeholder">
              <div className="film-strip top"></div>
              <div className="play-button">
                <FaPlay />
              </div>
              <div className="video-overlay">
                <h3>Watch the Trailer</h3>
                <p>Coming Soon to Theaters Nationwide</p>
              </div>
              <div className="film-strip bottom"></div>
            </div>
          </motion.div>

          <motion.div 
            className="documentary-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-card">
              <FaFilm className="info-icon" />
              <h3>Feature Documentary</h3>
              <p>A cinematic journey through the life of Ranchordas Pagi, featuring rare archival footage, interviews with army veterans, and dramatic recreations of his heroic missions.</p>
            </div>

            <div className="info-card">
              <FaCalendar className="info-icon" />
              <h3>Release Date</h3>
              <p>Coming in 2026 — Republic Day Special Release</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Screening Requests</h3>
              <p>Schools, colleges, and institutions can request special screenings for educational purposes.</p>
            </div>

            <div className="cta-buttons">
              <button className="btn-primary">
                <FaPlay /> Watch Trailer
              </button>
              <button className="btn-secondary">
                Request Screening
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Documentary;
