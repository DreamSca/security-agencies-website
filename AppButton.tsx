import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  company: {
    colors: { primary: string; accent: string };
  };
}

const AppButton = ({ children, to, type = 'button', company }: Props) => {
  const buttonClasses = "inline-block font-semibold text-white px-8 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4";

  const buttonStyle = {
    background: `linear-gradient(45deg, ${company.colors.primary}, ${company.colors.accent})`,
    boxShadow: `0 4px 15px 0 ${company.colors.primary}80`,
    ringColor: company.colors.accent,
  };

  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  if (to) {
    return (
      <Link to={to}>
        <motion.div {...motionProps} className={buttonClasses} style={buttonStyle}>{children}</motion.div>
      </Link>
    );
  }

  return <motion.button {...motionProps} type={type} className={buttonClasses} style={buttonStyle}>{children}</motion.button>;
};

export default AppButton;