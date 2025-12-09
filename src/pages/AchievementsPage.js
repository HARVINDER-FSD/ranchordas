import { motion } from 'framer-motion';
import { GiMedal } from 'react-icons/gi';
import './AchievementsPage.css';

const achievements = [
  {
    icon: <GiMedal />,
    title: 'Samar Seva Star',
    year: '1965',
    category: 'Military Service Medal',
    description: 'Awarded for distinguished service during the Indo-Pak War of 1965.',
    details: 'Established on 11 February 1967, this medal recognized Ranchordas Pagi\'s crucial role in identifying Pakistani troop movements and providing accurate intelligence about enemy positions. His strategic assistance helped the Indian Army make successful decisions during critical operations. Read the full story of his 1965 war contributions in the book.'
  },
  {
    icon: <GiMedal />,
    title: 'Sangram Medal',
    year: '1971',
    category: 'Military Campaign Medal',
    description: 'Recognized for participation and support in the 1971 Bangladesh Liberation War.',
    details: 'Established on 17 January 1973, this medal honored his service in guiding Indian forces through treacherous desert terrain during the 1971 conflict. He tracked enemy movements and helped prevent infiltrations using his unmatched navigation skills. Discover the complete account of his 1971 war heroics in the biography.'
  },
  {
    icon: <GiMedal />,
    title: 'Police Medal',
    year: 'Meritorious Service',
    category: 'Civil Service Decoration',
    description: 'Awarded for outstanding expertise in border surveillance and footprint tracking.',
    details: 'Even at age 58, he served as a master tracker with rare expertise in reading footprints—identifying direction, distance, and number of persons. His skills made him invaluable to border security operations. The book reveals the fascinating techniques behind his legendary tracking abilities.'
  }
];

const AchievementsPage = () => {
  return (
    <div className="achievements-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">HONORS & ACHIEVEMENTS</h1>
            <p className="page-subtitle">
              A lifetime of service recognized by the nation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="achievements-content paper-texture">
        <div className="container">
          <motion.div 
            className="intro-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Ranchordas Pagi's contributions to India's defense were recognized at the highest levels. 
              From civilian honors to military recognition, his legacy stands as a testament to the 
              power of local knowledge, courage, and unwavering patriotism.
            </p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-detail-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="achievement-header">
                  <div className="achievement-icon-large">{achievement.icon}</div>
                  <div className="achievement-meta">
                    <span className="achievement-category">{achievement.category}</span>
                    <span className="achievement-year-badge">{achievement.year}</span>
                  </div>
                </div>
                <h3>{achievement.title}</h3>
                <p className="achievement-desc">{achievement.description}</p>
                <div className="achievement-details">
                  <p>{achievement.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="timeline-summary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Recognition Timeline</h2>
            <div className="timeline-bars">
              <div className="timeline-bar">
                <span className="year">1965</span>
                <div className="bar-fill" style={{ width: '33%' }}></div>
                <span className="label">Samar Seva Star — Battlefield Guidance</span>
              </div>
              <div className="timeline-bar">
                <span className="year">1971</span>
                <div className="bar-fill" style={{ width: '66%' }}></div>
                <span className="label">Sangram Medal — Strategic Tracking</span>
              </div>
              <div className="timeline-bar">
                <span className="year">Service</span>
                <div className="bar-fill" style={{ width: '100%' }}></div>
                <span className="label">Police Medal — Border Security Expertise</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
