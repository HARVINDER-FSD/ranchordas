import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

const galleryImages = [
  { id: 1, title: 'Ranchordas Pagi Portrait', category: 'hero', description: 'The legendary desert scout in his traditional attire' },
  { id: 2, title: '1965 War Mission', category: 'war', description: 'Guiding troops through the Thar Desert' },
  { id: 3, title: 'Desert Landscape', category: 'desert', description: 'The vast Thar Desert he knew by heart' },
  { id: 4, title: 'Army Recognition', category: 'honor', description: 'Receiving honors from military officials' },
  { id: 5, title: '1971 Victory', category: 'war', description: 'Celebrating India\'s decisive victory' },
  { id: 6, title: 'BSF Post', category: 'legacy', description: 'The BSF post named after him' },
  { id: 7, title: 'Padma Shri Ceremony', category: 'honor', description: 'Receiving India\'s prestigious civilian award' },
  { id: 8, title: 'Desert Routes Map', category: 'desert', description: 'Strategic paths through the desert' }
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">GALLERY</h2>
          <p className="section-subtitle">
            A visual journey through history
          </p>
        </motion.div>

        <div className="gallery-filters">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'hero' ? 'active' : ''}
            onClick={() => setFilter('hero')}
          >
            Hero
          </button>
          <button 
            className={filter === 'war' ? 'active' : ''}
            onClick={() => setFilter('war')}
          >
            War Missions
          </button>
          <button 
            className={filter === 'desert' ? 'active' : ''}
            onClick={() => setFilter('desert')}
          >
            Desert
          </button>
          <button 
            className={filter === 'honor' ? 'active' : ''}
            onClick={() => setFilter('honor')}
          >
            Honors
          </button>
          <button 
            className={filter === 'legacy' ? 'active' : ''}
            onClick={() => setFilter('legacy')}
          >
            Legacy
          </button>
        </div>

        <motion.div 
          className="gallery-grid"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="gallery-placeholder">
                  <div className="placeholder-content">
                    <h4>{image.title}</h4>
                    <p>{image.category}</p>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <p>{image.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                <FaTimes />
              </button>
              <div className="lightbox-image">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
