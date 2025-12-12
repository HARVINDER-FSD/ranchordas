import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSearch, FaDownload, FaShareAlt } from 'react-icons/fa';
import './GalleryPage.css';

const galleryImages = [
  // Medals & Awards (4 images)
  {
    id: 1,
    title: 'Medal of Honor',
    category: 'medals',
    year: '1965',
    description: 'Prestigious medal awarded for exceptional service during wartime operations.',
    imagePath: '/assets/ranchordas/medal.png'
  },
  {
    id: 2,
    title: 'Sangram Medal',
    category: 'medals',
    year: '1971',
    description: 'The Sangram Medal recognizing exceptional contribution during the 1971 Bangladesh Liberation War.',
    imagePath: '/assets/ranchordas/medal 1.png'
  },
  {
    id: 3,
    title: 'Police Medal',
    category: 'medals',
    year: 'Service',
    description: 'Police Medal for Meritorious Service honoring his footprint tracking expertise.',
    imagePath: '/assets/ranchordas/medal 2.png'
  },
  {
    id: 4,
    title: 'Service Medal',
    category: 'medals',
    year: 'Service',
    description: 'Additional service medal recognizing his dedication to border security.',
    imagePath: '/assets/ranchordas/medal 3.png'
  },

  // Certificates & Documents (7 images)
  {
    id: 5,
    title: 'Official Certificate',
    category: 'certificates',
    year: '1971',
    description: 'Official certificate documenting his service and contributions.',
    imagePath: '/assets/ranchordas/certificate.png'
  },
  {
    id: 7,
    title: 'Service Certificate 2',
    category: 'certificates',
    year: '1971',
    description: 'Certificate from 1971 war service period.',
    imagePath: '/assets/ranchordas/certificate 2.png'
  },
  {
    id: 8,
    title: 'Service Certificate 3',
    category: 'certificates',
    year: '1970s',
    description: 'Official service documentation.',
    imagePath: '/assets/ranchordas/certificate 3.png'
  },
  {
    id: 9,
    title: 'Service Certificate 4',
    category: 'certificates',
    year: '1970s',
    description: 'Recognition certificate for border security work.',
    imagePath: '/assets/ranchordas/certificate 4.png'
  },
  {
    id: 10,
    title: 'Service Certificate 5',
    category: 'certificates',
    year: '1970s',
    description: 'Official documentation of service record.',
    imagePath: '/assets/ranchordas/certificate 5.png'
  },
  {
    id: 11,
    title: 'Service Certificate 6',
    category: 'certificates',
    year: '1970s',
    description: 'Additional service certificate.',
    imagePath: '/assets/ranchordas/certificate 6.png'
  },
  {
    id: 14,
    title: 'Invitation Card',
    category: 'certificates',
    year: '1971',
    description: 'Official invitation card from award ceremony.',
    imagePath: '/assets/ranchordas/invitation card.png'
  },

  // Personal & Family Photos (3 images)
  {
    id: 17,
    title: 'Family Portrait',
    category: 'personal',
    year: '1960s',
    description: 'Rare family photograph of Ranchordas Pagi with his loved ones.',
    imagePath: '/assets/ranchordas/family photo.jpg'
  },
  {
    id: 18,
    title: 'Memorial Photo',
    category: 'personal',
    year: '1970s',
    description: 'Memorial photograph honoring his legacy.',
    imagePath: '/assets/ranchordas/charanphoto.jpg'
  },
  {
    id: 19,
    title: 'Thar Desert',
    category: 'personal',
    year: '1960s',
    description: 'The vast Thar Desert where Ranchordas Pagi served as a scout and guide.',
    imagePath: '/assets/ranchordas/desert.jpg'
  },

  // Memorial & Legacy (2 images)
  {
    id: 15,
    title: 'Memorial Statue',
    category: 'memorial',
    year: 'Modern',
    description: 'Statue erected in honor of Ranchordas Pagi.',
    imagePath: '/assets/ranchordas/stachyu.png'
  },
  {
    id: 16,
    title: 'Statue Monument 2',
    category: 'memorial',
    year: 'Modern',
    description: 'Second view of the memorial statue.',
    imagePath: '/assets/ranchordas/stachyu2.jpg'
  },

  // Press Coverage & News Articles (18 images)
  {
    id: 20,
    title: 'News Article - War Hero',
    category: 'press',
    year: '1971',
    description: 'Newspaper coverage of his war contributions.',
    imagePath: '/assets/ranchordas/news artical.png'
  },
  {
    id: 21,
    title: 'Press Coverage 2',
    category: 'press',
    year: '1971',
    description: 'Media coverage highlighting his achievements.',
    imagePath: '/assets/ranchordas/news artical 2.png'
  },
  {
    id: 22,
    title: 'Press Coverage 3',
    category: 'press',
    year: '1971',
    description: 'News article about his service.',
    imagePath: '/assets/ranchordas/news artical 3.png'
  },
  {
    id: 23,
    title: 'Press Coverage 4',
    category: 'press',
    year: '1972',
    description: 'Post-war recognition in media.',
    imagePath: '/assets/ranchordas/news artical 4.png'
  },
  {
    id: 24,
    title: 'Press Coverage 5',
    category: 'press',
    year: '1972',
    description: 'Newspaper feature story.',
    imagePath: '/assets/ranchordas/news artical 5.png'
  },
  {
    id: 25,
    title: 'Press Coverage 6',
    category: 'press',
    year: '1972',
    description: 'Media article about his legacy.',
    imagePath: '/assets/ranchordas/news artical 6.png'
  },
  {
    id: 26,
    title: 'Press Coverage 7',
    category: 'press',
    year: '1970s',
    description: 'Press coverage of his work.',
    imagePath: '/assets/ranchordas/news artical 7.png'
  },
  {
    id: 27,
    title: 'Press Coverage 8',
    category: 'press',
    year: '1970s',
    description: 'News article highlighting his expertise.',
    imagePath: '/assets/ranchordas/news artical 8.png'
  },
  {
    id: 28,
    title: 'Press Coverage 9',
    category: 'press',
    year: '1970s',
    description: 'Media recognition of his service.',
    imagePath: '/assets/ranchordas/news artical 9.png'
  },
  {
    id: 29,
    title: 'Press Coverage 10',
    category: 'press',
    year: '1970s',
    description: 'Newspaper article about his contributions.',
    imagePath: '/assets/ranchordas/news artical 10.png'
  },
  {
    id: 30,
    title: 'Press Coverage 11',
    category: 'press',
    year: '1970s',
    description: 'Press feature on his achievements.',
    imagePath: '/assets/ranchordas/news artical 11.png'
  },
  {
    id: 31,
    title: 'Press Coverage 12',
    category: 'press',
    year: '1970s',
    description: 'News coverage of his legacy.',
    imagePath: '/assets/ranchordas/news artical 12.png'
  },
  {
    id: 32,
    title: 'Press Coverage 13',
    category: 'press',
    year: '1980s',
    description: 'Later media coverage.',
    imagePath: '/assets/ranchordas/news artical 13.png'
  },
  {
    id: 33,
    title: 'Press Coverage 14',
    category: 'press',
    year: '1980s',
    description: 'Newspaper article about his impact.',
    imagePath: '/assets/ranchordas/news artical 14.png'
  },
  {
    id: 34,
    title: 'Press Coverage 15',
    category: 'press',
    year: '1980s',
    description: 'Press recognition of his service.',
    imagePath: '/assets/ranchordas/news artical 15.png'
  },
  {
    id: 35,
    title: 'Press Coverage 16',
    category: 'press',
    year: '1980s',
    description: 'Media coverage of his story.',
    imagePath: '/assets/ranchordas/news artical 16.png'
  },
  {
    id: 36,
    title: 'Press Coverage 17',
    category: 'press',
    year: '1980s',
    description: 'News article about his legacy.',
    imagePath: '/assets/ranchordas/news artical 17.png'
  },
  {
    id: 37,
    title: 'Press Coverage 18',
    category: 'press',
    year: '1980s',
    description: 'Final press coverage documentation.',
    imagePath: '/assets/ranchordas/news artical 18.png'
  }
];

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = galleryImages.filter(img => {
    const matchesFilter = filter === 'all' || img.category === filter;
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         img.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="gallery-page">
      <section className="page-hero gallery-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">PHOTO GALLERY</h1>
            <p className="page-subtitle">
              Visual evidence of a hero's journey — medals, certificates, personal photos, memorials & press coverage
            </p>
          </motion.div>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          {/* Search and Filter */}
          <motion.div 
            className="gallery-controls"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="search-box">
              <FaSearch />
              <input 
                type="text" 
                placeholder="Search images..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="gallery-filters">
              <button 
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
              >
                All ({galleryImages.length})
              </button>
              <button 
                className={filter === 'medals' ? 'active' : ''}
                onClick={() => setFilter('medals')}
              >
                Medals & Awards ({galleryImages.filter(img => img.category === 'medals').length})
              </button>
              <button 
                className={filter === 'certificates' ? 'active' : ''}
                onClick={() => setFilter('certificates')}
              >
                Certificates ({galleryImages.filter(img => img.category === 'certificates').length})
              </button>
              <button 
                className={filter === 'personal' ? 'active' : ''}
                onClick={() => setFilter('personal')}
              >
                Personal Photos ({galleryImages.filter(img => img.category === 'personal').length})
              </button>
              <button 
                className={filter === 'memorial' ? 'active' : ''}
                onClick={() => setFilter('memorial')}
              >
                Memorial ({galleryImages.filter(img => img.category === 'memorial').length})
              </button>
              <button 
                className={filter === 'press' ? 'active' : ''}
                onClick={() => setFilter('press')}
              >
                Press Coverage ({galleryImages.filter(img => img.category === 'press').length})
              </button>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="gallery-grid-page"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="gallery-item-page"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="gallery-placeholder-page">
                    <img 
                      src={image.imagePath} 
                      alt={image.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="gallery-overlay-page">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="no-results">
              <p>No images found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content-page"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn-page" onClick={() => setSelectedImage(null)}>
                <FaTimes />
              </button>
              
              <div className="lightbox-image-page">
                <img 
                  src={selectedImage.imagePath} 
                  alt={selectedImage.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p className="lightbox-category">
                  Category: <span>{selectedImage.category}</span> | Year: <span>{selectedImage.year}</span>
                </p>
                <p className="lightbox-description">{selectedImage.description}</p>
                
                <div className="lightbox-actions">
                  <button className="btn-secondary btn-small">
                    <FaDownload /> Download
                  </button>
                  <button className="btn-secondary btn-small">
                    <FaShareAlt /> Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
