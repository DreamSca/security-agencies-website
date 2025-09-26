import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppButton from '../../components/shared/AppButton';
import MotionWrap from '../../components/animations/MotionWrap';
import heroPattern from '../../assets/patterns/hero-pattern.svg';

interface CompanyData {
  id: string;
  name: string;
  colors: { primary: string; accent: string };
  content: {
    home: { heroTitle: string; heroSubtitle: string };
  };
}

const HomePage = () => {
  const { company } = useOutletContext<{ company: CompanyData }>();
  const { home } = company.content;

  return (
    <MotionWrap>
      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden px-4"
           style={{ backgroundImage: `url(${heroPattern})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white"
          >
            {home.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
          >
            {home.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-8"
          >
            <AppButton to={`/${company.id}/contact`} company={company}>
              Get In Touch
            </AppButton>
          </motion.div>
        </div>
      </div>
    </MotionWrap>
  );
};

export default HomePage;