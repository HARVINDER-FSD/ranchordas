import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/assets/logo.jpg" alt="Ranchordas Pagi" className="logo-image" />
            <h3>Veer Ranchhod Pagi</h3>
          </div>
          <p className="footer-tagline">
            Honoring the legacy of India's greatest desert scout
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/documentary">Documentary</Link></li>
            <li><Link to="/book">Book</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/book">Buy Book</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><FaEnvelope /> info@ranchordaspagi.in</li>
            <li>Educational Outreach</li>
            <li>Media Inquiries</li>
            <li>Documentary Screenings</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ranchordas Pagi Memorial Foundation. All rights reserved.</p>
        <p className="tribute">🇮🇳 Jai Hind | Jai Bharat 🇮🇳</p>
      </div>
    </footer>
  );
};

export default Footer;
