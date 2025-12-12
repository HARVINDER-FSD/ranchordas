import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSearch, FaFilter, FaExpand } from 'react-icons/fa';

import './Gallery.css';

// PhotoCard component that only renders for verified working images
const PhotoCard = ({ image, index, onImageClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log('✅ Loaded:', image.title);
  };

  return (
    <motion.div
      className="photo-card"
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => onImageClick(image)}
    >
      <div className="photo-container">
        <img 
          src={image.src} 
          alt={image.title}
          className="photo-image"
          loading="lazy"
          onLoad={handleImageLoad}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        {imageLoaded && (
          <div className="photo-overlay">
            <div className="overlay-content">
              <h3 className="photo-title">{image.title}</h3>
              <div className="photo-meta">
                <span className="photo-year">{image.year}</span>
                <span className="photo-category">{image.category}</span>
              </div>
              <button className="expand-btn">
                <FaExpand />
              </button>
            </div>
          </div>
        )}
        {!imageLoaded && (
          <div className="loading-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// All available images from the ranchordas folder - using exact filenames
const galleryImages = [
  // Main Images from root assets
  { id: 1, src: '/assets/ranchorpagi.png', title: 'Ranchordas Pagi Portrait', category: 'hero', year: '1960s' },
  { id: 2, src: '/assets/book.jpg', title: 'Biography Book', category: 'legacy', year: '2020s' },
  { id: 3, src: '/assets/logo.jpg', title: 'Memorial Logo', category: 'legacy', year: 'Modern' },
  
  // Desert & Monuments
  { id: 4, src: '/assets/ranchordas/desert.jpg', title: 'Thar Desert', category: 'desert', year: '1960s' },
  { id: 5, src: '/assets/ranchordas/stachyu.png', title: 'Memorial Statue', category: 'legacy', year: 'Modern' },
  { id: 6, src: '/assets/ranchordas/stachyu2.jpg', title: 'Statue Monument', category: 'legacy', year: 'Modern' },
  
  // Medals - using exact filenames with spaces
  { id: 7, src: '/assets/ranchordas/medal.png', title: 'Medal of Honor', category: 'honor', year: '1965' },
  { id: 8, src: '/assets/ranchordas/medal 1.png', title: 'Samar Seva Star', category: 'honor', year: '1965' },
  { id: 9, src: '/assets/ranchordas/medal 2.png', title: 'Sangram Medal', category: 'honor', year: '1971' },
  { id: 10, src: '/assets/ranchordas/medal 3.png', title: 'Police Medal', category: 'honor', year: '1970s' },
  
  // Certificates - using exact filenames with spaces (excluding certificate 1 as requested)
  { id: 11, src: '/assets/ranchordas/certificate.png', title: 'Main Certificate', category: 'honor', year: '1970s' },
  { id: 12, src: '/assets/ranchordas/certificate 2.png', title: 'Service Certificate 2', category: 'honor', year: '1970s' },
  { id: 13, src: '/assets/ranchordas/certificate 3.png', title: 'Achievement Certificate', category: 'honor', year: '1970s' },
  { id: 14, src: '/assets/ranchordas/certificate 4.png', title: 'Recognition Certificate', category: 'honor', year: '1970s' },
  { id: 15, src: '/assets/ranchordas/certificate 5.png', title: 'Merit Certificate', category: 'honor', year: '1970s' },
  { id: 16, src: '/assets/ranchordas/certificate 6.png', title: 'Excellence Certificate', category: 'honor', year: '1970s' },
  { id: 17, src: '/assets/ranchordas/certificate 7.jpg', title: 'Valor Certificate', category: 'honor', year: '1970s' },
  { id: 18, src: '/assets/ranchordas/certificate 8.jpg', title: 'Bravery Certificate', category: 'honor', year: '1970s' },
  
  // News Articles - using exact filenames with spaces
  { id: 19, src: '/assets/ranchordas/news artical.png', title: 'Hero of Desert', category: 'press', year: '1971' },
  { id: 20, src: '/assets/ranchordas/news artical 2.png', title: 'Desert Guide', category: 'press', year: '1971' },
  { id: 21, src: '/assets/ranchordas/news artical 3.png', title: 'Tracking Master', category: 'press', year: '1972' },
  { id: 22, src: '/assets/ranchordas/news artical 4.png', title: 'War Hero', category: 'press', year: '1972' },
  { id: 23, src: '/assets/ranchordas/news artical 5.png', title: 'Desert Warrior', category: 'press', year: '1972' },
  { id: 24, src: '/assets/ranchordas/news artical 6.png', title: 'Legendary Scout', category: 'press', year: '1973' },
  { id: 25, src: '/assets/ranchordas/news artical 7.png', title: 'Border Guardian', category: 'press', year: '1973' },
  { id: 26, src: '/assets/ranchordas/news artical 8.png', title: 'National Hero', category: 'press', year: '1974' },
  { id: 27, src: '/assets/ranchordas/news artical 9.png', title: 'Desert Legend', category: 'press', year: '1974' },
  { id: 28, src: '/assets/ranchordas/news artical 10.png', title: 'Brave Heart', category: 'press', year: '1975' },
  { id: 29, src: '/assets/ranchordas/news artical 11.png', title: 'Military Honor', category: 'press', year: '1975' },
  { id: 30, src: '/assets/ranchordas/news artical 12.png', title: 'Patriot Story', category: 'press', year: '1976' },
  { id: 31, src: '/assets/ranchordas/news artical 13.png', title: 'Desert Master', category: 'press', year: '1976' },
  { id: 32, src: '/assets/ranchordas/news artical 14.png', title: 'War Veteran', category: 'press', year: '1977' },
  { id: 33, src: '/assets/ranchordas/news artical 15.png', title: 'Hero Legacy', category: 'press', year: '1977' },
  { id: 34, src: '/assets/ranchordas/news artical 16.png', title: 'Courage Under Fire', category: 'press', year: '1978' },
  { id: 35, src: '/assets/ranchordas/news artical 17.png', title: 'Desert Navigator', category: 'press', year: '1978' },
  { id: 36, src: '/assets/ranchordas/news artical 18.png', title: 'Final Tribute', category: 'press', year: '1979' },
  
  // Personal Photos - using exact filenames with spaces
  { id: 37, src: '/assets/ranchordas/family photo.jpg', title: 'Family Portrait', category: 'hero', year: '1960s' },
  { id: 38, src: '/assets/ranchordas/charanphoto.jpg', title: 'Memorial Photo', category: 'hero', year: '1970s' },
  { id: 39, src: '/assets/ranchordas/invitation card.png', title: 'Invitation Card', category: 'legacy', year: '1970s' }
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('id'); // id, year, title
  const [validImages, setValidImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Pre-validate all images on component mount
  useEffect(() => {
    const validateImages = async () => {
      const validImagesList = [];
      
      for (const image of galleryImages) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              validImagesList.push(image);
              console.log('✅ Valid image:', image.title);
              resolve();
            };
            img.onerror = () => {
              console.error('❌ Invalid image:', image.src);
              reject();
            };
            img.src = image.src;
          });
        } catch (error) {
          // Image failed to load, skip it
        }
      }
      
      setValidImages(validImagesList);
      setImagesLoaded(true);
      console.log(`📊 Total valid images: ${validImagesList.length} out of ${galleryImages.length}`);
    };

    validateImages();
  }, []);

  const categories = [
    { key: 'all', label: 'All Photos', color: '#2196F3' },
    { key: 'hero', label: 'Hero', color: '#FF9800' },
    { key: 'desert', label: 'Desert', color: '#795548' },
    { key: 'honor', label: 'Honors', color: '#4CAF50' },
    { key: 'legacy', label: 'Legacy', color: '#9C27B0' },
    { key: 'press', label: 'Press', color: '#F44336' }
  ];

  const filteredImages = validImages
    .filter(img => filter === 'all' || img.category === filter)
    .filter(img => 
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.year.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'year') return a.year.localeCompare(b.year);
      return a.id - b.id;
    });

  return (
    <div className="modern-gallery" data-version="v2.0-fresh">
      {/* Header Section */}
      <div className="gallery-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="header-content"
          >
            <h1 className="gallery-title">
              <span className="title-main">Visual Legacy</span>
              <span className="title-sub">Ranchordas Pagi Photo Gallery</span>
            </h1>
            <p className="gallery-description">
              {imagesLoaded ? (
                <>
                  Explore {validImages.length} rare photographs, documents, and press coverage 
                  chronicling the life of India's greatest desert scout
                  {validImages.length < galleryImages.length && (
                    <span style={{display: 'block', fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem'}}>
                      ({galleryImages.length - validImages.length} images were invalid and excluded)
                    </span>
                  )}
                </>
              ) : (
                'Loading and validating images...'
              )}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="gallery-controls">
        <div className="container">
          <div className="controls-wrapper">
            {/* Search Bar */}
            <div className="search-section">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search photos, years, categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-tab ${filter === cat.key ? 'active' : ''}`}
                  onClick={() => setFilter(cat.key)}
                  style={{ '--tab-color': cat.color }}
                >
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count">
                    {cat.key === 'all' 
                      ? validImages.length
                      : validImages.filter(img => img.category === cat.key).length
                    }
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="sort-section">
              <FaFilter className="sort-icon" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="id">Default Order</option>
                <option value="title">Sort by Title</option>
                <option value="year">Sort by Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <div className="container">
          <p className="results-text">
            Showing <strong>{filteredImages.length}</strong> of <strong>{validImages.length}</strong> photos
            {searchTerm && <span> matching "<em>{searchTerm}</em>"</span>}
            {filter !== 'all' && <span> in <em>{categories.find(c => c.key === filter)?.label}</em></span>}
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-content">
        <div className="container">
          <motion.div 
            className="photo-grid"
            layout
          >
            {!imagesLoaded ? (
              <div className="loading-gallery">
                <div className="loading-spinner"></div>
                <p>Validating images...</p>
              </div>
            ) : (
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <PhotoCard 
                    key={image.id}
                    image={image}
                    index={index}
                    onImageClick={setSelectedImage}
                  />
                ))}
              </AnimatePresence>
            )}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="no-results">
              <div className="no-results-content">
                <h3>No photos found</h3>
                <p>Try adjusting your search terms or filters</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilter('all');
                  }}
                  className="reset-btn"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-container"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              
              <div className="lightbox-content">
                <div className="lightbox-image-container">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.title}
                    className="lightbox-image"
                  />
                </div>
                
                <div className="lightbox-info">
                  <div className="lightbox-header">
                    <h2 className="lightbox-title">{selectedImage.title}</h2>
                    <div className="lightbox-meta">
                      <span className="meta-item">
                        <strong>Year:</strong> {selectedImage.year}
                      </span>
                      <span className="meta-item">
                        <strong>Category:</strong> {selectedImage.category}
                      </span>
                      <span className="meta-item">
                        <strong>ID:</strong> #{selectedImage.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;