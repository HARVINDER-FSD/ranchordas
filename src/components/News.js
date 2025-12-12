import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaNewspaper } from 'react-icons/fa';
import './News.css';

const newsArticles = [
  { id: 1, src: '/assets/ranchordas/news artical.png', title: 'Hero of the Desert', description: 'First major coverage of Ranchordas Pagi\'s heroic deeds during the Indo-Pak wars' },
  { id: 2, src: '/assets/ranchordas/news artical 2.png', title: 'Desert Guide Saves Lives', description: 'How his expertise in desert navigation saved countless soldiers\' lives' },
  { id: 3, src: '/assets/ranchordas/news artical 3.png', title: 'The Tracking Master', description: 'The man who could read the desert like a book and track enemy movements' },
  { id: 4, src: '/assets/ranchordas/news artical 4.png', title: 'War Hero Recognition', description: 'Official recognition of his invaluable contributions during wartime' },
  { id: 5, src: '/assets/ranchordas/news artical 5.png', title: 'Desert Warrior', description: 'Stories from the 1965 and 1971 Indo-Pakistan wars' },
  { id: 6, src: '/assets/ranchordas/news artical 6.png', title: 'Legendary Scout', description: 'His legendary scouting abilities and desert expertise documented' },
  { id: 7, src: '/assets/ranchordas/news artical 7.png', title: 'Border Guardian', description: 'Protecting India\'s western borders with unmatched dedication' },
  { id: 8, src: '/assets/ranchordas/news artical 8.png', title: 'National Hero', description: 'Recognition as a national hero for his service to the motherland' },
  { id: 9, src: '/assets/ranchordas/news artical 9.png', title: 'Desert Legend', description: 'The legend of the greatest desert guide in Indian military history' },
  { id: 10, src: '/assets/ranchordas/news artical 10.png', title: 'Brave Heart', description: 'Stories of extraordinary courage and bravery in the face of danger' },
  { id: 11, src: '/assets/ranchordas/news artical 11.png', title: 'Military Honor', description: 'Military honors and recognition for exceptional service' },
  { id: 12, src: '/assets/ranchordas/news artical 12.png', title: 'Patriot\'s Story', description: 'The inspiring story of a true patriot who served his nation' },
  { id: 13, src: '/assets/ranchordas/news artical 13.png', title: 'Desert Master', description: 'Master of desert navigation and survival techniques' },
  { id: 14, src: '/assets/ranchordas/news artical 14.png', title: 'War Veteran', description: 'Veteran of multiple wars and countless military operations' },
  { id: 15, src: '/assets/ranchordas/news artical 15.png', title: 'Hero\'s Legacy', description: 'The lasting legacy of a hero who changed the course of history' },
  { id: 16, src: '/assets/ranchordas/news artical 16.png', title: 'Courage Under Fire', description: 'Displaying extraordinary courage in the most dangerous situations' },
  { id: 17, src: '/assets/ranchordas/news artical 17.png', title: 'Desert Navigator', description: 'The ultimate desert navigator who knew every grain of sand' },
  { id: 18, src: '/assets/ranchordas/news artical 18.png', title: 'Final Tribute', description: 'Final tribute to a great soul who dedicated his life to the nation' }
];

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="news">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <FaNewspaper className="title-icon" />
            IN THE NEWS
          </h2>
          <p className="section-subtitle">
            Media coverage and press recognition of a true hero
          </p>
        </motion.div>

        <motion.div 
          className="news-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="news-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="news-image">
                <img src={article.src} alt={article.title} />
                <div className="news-overlay">
                  <FaNewspaper className="news-icon" />
                  <p>Click to read</p>
                </div>
              </div>
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            className="news-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              className="news-lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedArticle(null)}>
                <FaTimes />
              </button>
              <div className="news-lightbox-image">
                <img 
                  src={selectedArticle.src} 
                  alt={selectedArticle.title}
                />
                <div className="news-lightbox-info">
                  <h3>{selectedArticle.title}</h3>
                  <p>{selectedArticle.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default News;