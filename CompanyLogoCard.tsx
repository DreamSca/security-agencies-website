import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Company {
  id: string;
  name: string;
  logo: string;
}

interface Props {
  company: Company;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CompanyLogoCard = ({ company }: Props) => {
  return (
    <motion.div variants={cardVariants}>
      <Link to={`/${company.id}`}>
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 transition-all duration-300 hover:border-gray-500 hover:bg-gray-800/80 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50">
          <img src={company.logo} alt={`${company.name} Logo`} className="h-16 mx-auto" />
          <p className="text-center text-gray-300 mt-4 font-semibold transition-colors duration-300 group-hover:text-white">{company.name}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CompanyLogoCard;