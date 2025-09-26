import { motion } from 'framer-motion';
import CompanyLogoCard from '../components/portal/CompanyLogoCard';
import companies from '../data/companies.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Portal = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Security Services Portal</h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4">Your Gateway to Premier Protection</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {companies.map((company) => (
          <CompanyLogoCard key={company.id} company={company} />
        ))}
      </motion.div>
    </div>
  );
};

export default Portal;