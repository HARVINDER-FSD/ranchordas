import { useState } from 'react';
import { motion } from 'framer-motion';
import { GiMedal, GiMilitaryFort, GiDesert, GiTrophyCup } from 'react-icons/gi';
import './Achievements.css';

const achievements = [
  {
    icon: <GiMedal />,
    title: 'Samar Seva Star',
    year: '1965',
    description: 'Awarded for identifying enemy movements and providing strategic intelligence during the 1965 war'
  },
  {
    icon: <GiMedal />,
    title: 'Sangram Medal',
    year: '1971',
    description: 'Recognized for guiding forces through desert terrain and tracking enemy infiltrations in 1971'
  },
  {
    icon: <GiMedal />,
    title: 'Police Medal',
    year: 'Meritorious Service',
    description: 'Honored for his rare footprint tracking expertise and border surveillance mastery'
  }
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="achievements" className="achievements paper-texture">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">HONORS & ACHIEVEMENTS</h2>
          <p className="section-subtitle">
            Recognition of a lifetime dedicated to serving Mother India
          </p>
        </motion.div>

        <div className="achievements-slider">
          <div className="achievements-track">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`achievement-card ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <div className="achievement-year">{achievement.year}</div>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="slider-dots">
            {achievements.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
