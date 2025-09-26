import { useOutletContext } from 'react-router-dom';
import MotionWrap from '../../components/animations/MotionWrap';
import { motion } from 'framer-motion';

interface CompanyData {
  content: {
    ourStory: { mission: string; vision: string; history: string };
  };
}

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.8 }
  }
};

const OurStoryPage = () => {
  const { company } = useOutletContext<{ company: CompanyData }>();
  const { ourStory } = company.content;

  const storySections = [
    { title: 'Our History', content: ourStory.history },
    { title: 'Our Mission', content: ourStory.mission },
    { title: 'Our Vision', content: ourStory.vision },
  ];

  return (
    <MotionWrap>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          {storySections.map((section, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: (useOutletContext<{ company: any }>().company.colors.accent) }}>
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionWrap>
  );
};

export default OurStoryPage;