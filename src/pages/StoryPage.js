import { motion } from 'framer-motion';
import { GiCompass, GiMilitaryFort, GiTrophy, GiSandsOfTime, GiCamel } from 'react-icons/gi';
import './StoryPage.css';

const storyChapters = [
  {
    year: '1920s',
    icon: <GiCamel />,
    title: 'Born in the Desert',
    content: `Ranchordas Pagi was born in a small village near Jaisalmer, Rajasthan, in the heart of the Thar Desert. From his earliest days, he was immersed in the harsh yet beautiful landscape that would define his life. His father and grandfather were both renowned guides, and they passed down generations of knowledge about the desert's secrets.

    Young Ranchordas learned to read the stars for navigation, identify water sources by observing animal behavior and plant life, and understand the subtle patterns in the sand that revealed hidden paths. The desert was not just his home—it was his classroom, his playground, and eventually, his battlefield.`,
    image: 'desert-childhood'
  },
  {
    year: '1940s-50s',
    icon: <GiCompass />,
    title: 'Master of the Sands',
    content: `By the time Ranchordas reached adulthood, he had become the most sought-after guide in the Thar Desert. Traders, travelers, and even government officials would seek his services to navigate the treacherous terrain. He knew every dune, every water source, and every secret path across more than 1,000 kilometers of desert.

    His reputation grew not just for his navigational skills, but for his uncanny ability to predict weather patterns, locate water in seemingly barren areas, and guide caravans safely through sandstorms. Local communities revered him as a living encyclopedia of desert knowledge.`,
    image: 'desert-master'
  },
  {
    year: '1965',
    icon: <GiMilitaryFort />,
    title: 'The Call of Duty - First War',
    content: `When the 1965 Indo-Pak War broke out, the Indian Army faced a critical challenge: how to move troops and equipment through the Thar Desert without being detected. Traditional routes were heavily monitored by enemy forces, and the harsh terrain made navigation extremely difficult.

    Ranchordas Pagi, then in his 40s, volunteered his services without hesitation. He guided Indian forces through secret desert paths that only he knew existed. His knowledge of water sources kept troops hydrated in the scorching heat. His understanding of terrain helped avoid enemy detection. His contribution was instrumental in several key victories along the western front.`,
    image: 'war-1965'
  },
  {
    year: '1971',
    icon: <GiTrophy />,
    title: 'Victory in Bangladesh Liberation',
    content: `Six years later, when the 1971 war began, Ranchordas Pagi was called upon once again. Despite his advancing age, he answered the call without hesitation. This time, the stakes were even higher, and the operations more complex.

    Pagi guided multiple battalions through the desert, often working day and night without rest. His strategic guidance helped Indian forces outmaneuver enemy positions and achieve swift, decisive victories. Army officers later testified that without his guidance, many operations would have been impossible or would have resulted in heavy casualties.

    His service during this war earned him the Padma Shri, India's fourth-highest civilian honor.`,
    image: 'war-1971'
  },
  {
    year: '1971',
    icon: <GiTrophy />,
    title: 'National Recognition',
    content: `The Indian government recognized Ranchordas Pagi's extraordinary contribution by awarding him the Padma Shri in 1971. The ceremony in New Delhi was a proud moment not just for Pagi, but for his entire community and the state of Rajasthan.

    Military leaders praised his courage, knowledge, and unwavering patriotism. His story became an inspiration, demonstrating that heroes come from all walks of life and that local knowledge and expertise are invaluable assets to national defense.`,
    image: 'padma-shri'
  },
  {
    year: 'Legacy',
    icon: <GiSandsOfTime />,
    title: 'Eternal Honor',
    content: `The Border Security Force named a strategic post in Jaisalmer after Ranchordas Pagi, ensuring his name would be remembered for generations. The "Ranchordas Pagi Post" stands as a permanent reminder of his sacrifice and service.

    Today, his story is taught in schools across India, studied in military academies, and celebrated in books and documentaries. He represents the countless unsung heroes who have contributed to India's defense—ordinary citizens who performed extraordinary acts of courage and patriotism.

    His legacy reminds us that true heroism isn't always found on the battlefield with weapons, but sometimes in the quiet knowledge of an old guide who knew every grain of sand in his beloved desert.`,
    image: 'legacy'
  }
];

const StoryPage = () => {
  return (
    <div className="story-page">
      <section className="page-hero story-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">THE JOURNEY OF A LEGEND</h1>
            <p className="page-subtitle">
              From humble beginnings to national hero — the complete story of Ranchordas Pagi
            </p>
          </motion.div>
        </div>
      </section>

      <section className="story-content">
        <div className="container">
          <motion.div 
            className="story-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="intro-text">
              This is the story of a man who knew the desert like no other, who answered his nation's call 
              not once but twice, and whose legacy continues to inspire generations of Indians. This is the 
              story of Ranchordas Pagi—the desert scout who helped India win.
            </p>
          </motion.div>

          <div className="story-timeline">
            {storyChapters.map((chapter, index) => (
              <motion.div
                key={index}
                className={`story-chapter ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="chapter-marker">
                  <div className="chapter-icon">{chapter.icon}</div>
                  <div className="chapter-year">{chapter.year}</div>
                </div>
                <div className="chapter-content">
                  <h2>{chapter.title}</h2>
                  <div className="chapter-text">
                    {chapter.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph.trim()}</p>
                    ))}
                  </div>
                  <div className="chapter-image-placeholder">
                    <span>{chapter.image}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="story-conclusion"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>A Hero for All Time</h2>
            <p>
              Ranchordas Pagi's story is more than just a tale of wartime heroism. It's a reminder that 
              every citizen has something valuable to contribute to their nation. His deep knowledge of 
              the desert, passed down through generations, became a strategic asset that helped India 
              secure victory in two major wars.
            </p>
            <p>
              His legacy teaches us to value local knowledge, to recognize heroes in unexpected places, 
              and to understand that patriotism comes in many forms. The desert scout who helped India 
              win will forever remain an inspiration to all who hear his story.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
