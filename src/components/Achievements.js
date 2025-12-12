import { useState } from 'react';
import { motion } from 'framer-motion';
import { GiMedal, GiTrophyCup } from 'react-icons/gi';
import './Achievements.css';

const achievements = [
  {
    icon: <GiMedal />,
    image: '/assets/ranchordas/medal.png',
    title: 'Medal of Honor',
    year: 'War Service',
    description: 'Prestigious medal awarded for exceptional service during wartime operations'
  },
  {
    icon: <GiMedal />,
    image: '/assets/ranchordas/medal 1.png',
    title: 'Samar Seva Star',
    year: '1965',
    description: 'Awarded for identifying enemy movements and providing strategic intelligence during the 1965 war'
  },
  {
    icon: <GiMedal />,
    image: '/assets/ranchordas/medal 2.png',
    title: 'Sangram Medal',
    year: '1971',
    description: 'Recognized for guiding forces through desert terrain and tracking enemy infiltrations in 1971'
  },
  {
    icon: <GiMedal />,
    image: '/assets/ranchordas/medal 3.png',
    title: 'Police Medal',
    year: 'Meritorious Service',
    description: 'Honored for his rare footprint tracking expertise and border surveillance mastery'
  },
  // {
  //   icon: <GiTrophyCup />,
  //   image: '/assets/ranchordas/certificate.png',
  //   title: 'Main Service Certificate',
  //   year: 'Primary Recognition',
  //   description: 'Primary certificate documenting his distinguished service to the nation'
  // },

  {
    icon: <GiTrophyCup />,
    image: '/assets/ranchordas/certificate 2.png',
    title: 'Achievement Certificate',
    year: 'Honor',
    description: 'Certificate acknowledging his outstanding achievements in desert warfare'
  },
  {
    icon: <GiTrophyCup />,
    image: '/assets/ranchordas/certificate 3.png',
    title: 'Bravery Certificate',
    year: 'Valor',
    description: 'Certificate honoring his acts of bravery and courage in service of the motherland'
  },
  {
    icon: <GiTrophyCup />,
    image: '/assets/ranchordas/certificate 4.png',
    title: 'Recognition Certificate',
    year: 'Merit',
    description: 'Certificate of recognition for his meritorious service and dedication'
  },
  {
    icon: <GiTrophyCup />,
    image: '/assets/ranchordas/certificate 5.png',
    title: 'Excellence Certificate',
    year: 'Achievement',
    description: 'Certificate acknowledging his excellence in military operations'
  },
  {
    icon: <GiTrophyCup />,
    image: '/assets/ranchordas/certificate 6.png',
    title: 'Service Excellence',
    year: 'Distinguished Service',
    description: 'Certificate for distinguished service in challenging conditions'
  },
  {
    icon: <GiTrophyCup />,
    image: '/assets/ranchordas/certificate 7.jpg',
    title: 'Valor Certificate',
    year: 'Courage',
    description: 'Certificate recognizing his acts of valor and courage in the line of duty'
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
                <div className="achievement-image">
                  <img src={achievement.image} alt={achievement.title} />
                </div>
                <div className="achievement-content">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                  <div className="achievement-year">{achievement.year}</div>
                  <p>{achievement.description}</p>
                </div>
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
