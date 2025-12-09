import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={`${process.env.PUBLIC_URL}/assets/logo.jpg`} alt="Ranchordas Pagi" className="logo-image" />
          <span> Veer Ranchhod Pagi</span>
        </Link>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/achievements" className={isActive('/achievements') ? 'active' : ''} onClick={closeMenu}>Achievements</Link>
          <Link to="/story" className={isActive('/story') ? 'active' : ''} onClick={closeMenu}>Story</Link>
          <Link to="/documentary" className={isActive('/documentary') ? 'active' : ''} onClick={closeMenu}>Documentary</Link>
          <Link to="/book" className={isActive('/book') ? 'active' : ''} onClick={closeMenu}>Book</Link>
          <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''} onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>Contact</Link>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
