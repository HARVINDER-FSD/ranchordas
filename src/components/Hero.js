import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero sand-texture">
      <div className="hero-overlay"></div>
      
      {/* Animated footprints */}
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
          Ranchhod Pagi — The legendary guide who led the Indian Army through<br />
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
  );
};

export default Hero;
