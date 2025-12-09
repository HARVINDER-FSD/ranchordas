import { motion } from 'framer-motion';
import { FaBook, FaShoppingCart, FaAmazon } from 'react-icons/fa';
import './Book.css';

const Book = () => {
  return (
    <section id="book" className="book paper-texture">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">THE BIOGRAPHY</h2>
          <p className="section-subtitle">
            The complete story of India's desert hero — now in print
          </p>
        </motion.div>

        <div className="book-content">
          <motion.div 
            className="book-cover"
            initial={{ opacity: 0, rotateY: -30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="book-3d">
              <div className="book-front">
                <div className="book-title">
                  <h3>RANCHHOD PAGI</h3>
                  <p>The Desert Scout Who Helped India Win</p>
                  <div className="book-badge">NATIONAL BESTSELLER</div>
                </div>
              </div>
              <div className="book-spine"></div>
            </div>
          </motion.div>

          <motion.div 
            className="book-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>A Story That Must Be Told</h3>
            <p className="book-description">
              This meticulously researched biography brings to life the extraordinary journey of RANCHHOD PAGI — from a humble desert dweller to a national hero whose courage and knowledge helped India secure victory in two major wars.
            </p>

            <div className="book-features">
              <div className="feature">
                <FaBook className="feature-icon" />
                <div>
                  <h4>400+ Pages</h4>
                  <p>Comprehensive biography with rare photographs</p>
                </div>
              </div>
              <div className="feature">
                <FaBook className="feature-icon" />
                <div>
                  <h4>Historical Accuracy</h4>
                  <p>Based on army records and veteran interviews</p>
                </div>
              </div>
              <div className="feature">
                <FaBook className="feature-icon" />
                <div>
                  <h4>Maps & Illustrations</h4>
                  <p>Detailed desert routes and war strategies</p>
                </div>
              </div>
            </div>

            <div className="book-pricing">
              <div className="price">
                <span className="original">₹999</span>
                <span className="discounted">₹699</span>
                <span className="save">Save 30%</span>
              </div>
            </div>

            <div className="book-buttons">
              <button className="btn-primary">
                <FaShoppingCart /> Pre-Order Now
              </button>
              <button className="btn-secondary">
                <FaAmazon /> Buy on Amazon
              </button>
            </div>

            <p className="release-note">
              📚 Releasing January 26, 2026 — Republic Day Special Edition
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Book;
