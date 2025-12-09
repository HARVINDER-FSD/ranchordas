import { motion } from 'framer-motion';
import { GiCompass, GiDesert, GiMilitaryFort, GiTrophy } from 'react-icons/gi';
import './Timeline.css';

const timelineEvents = [
  {
    year: '1920s',
    icon: <GiDesert />,
    title: 'Born in the Desert',
    description: 'Born in a small village near Jaisalmer, Rajasthan. Grew up learning the secrets of the Thar Desert from his father and grandfather.',
    position: 'left'
  },
  {
    year: '1940s-50s',
    icon: <GiCompass />,
    title: 'Master of the Sands',
    description: 'Became renowned as the most knowledgeable guide in the Thar Desert. Knew every dune, water source, and secret path across 1000+ kilometers.',
    position: 'right'
  },
  {
    year: '1965',
    icon: <GiMilitaryFort />,
    title: 'First Indo-Pak War',
    description: 'Volunteered to guide Indian Army through treacherous desert terrain. His knowledge of secret routes helped troops outmaneuver enemy forces.',
    position: 'left'
  },
  {
    year: '1971',
    icon: <GiTrophy />,
    title: 'Victory in Bangladesh Liberation',
    description: 'Once again guided Indian forces through impossible desert conditions. His strategic guidance was crucial in India\'s decisive victory.',
    position: 'right'
  },
  {
    year: '1971',
    icon: <GiTrophy />,
    title: 'Padma Shri Award',
    description: 'Honored with India\'s fourth-highest civilian award for his exceptional service to the nation during both wars.',
    position: 'left'
  },
  {
    year: 'Legacy',
    icon: <GiMilitaryFort />,
    title: 'Eternal Honor',
    description: 'BSF post named after him. His story continues to inspire generations of Indians about courage, patriotism, and selfless service.',
    position: 'right'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">THE JOURNEY OF A LEGEND</h2>
          <p className="section-subtitle">
            From humble beginnings to national hero — the story of Ranchordas Pagi
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${event.position}`}
              initial={{ opacity: 0, x: event.position === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{event.icon}</div>
                <div className="timeline-year">{event.year}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>

        <div className="desert-map">
          <motion.div
            className="map-overlay"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>The Desert Routes</h3>
            <p>Ranchordas Pagi guided Indian forces through these strategic paths</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
