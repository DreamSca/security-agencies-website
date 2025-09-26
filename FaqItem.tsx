import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface Faq {
  question: string;
  answer: string;
}

interface Props {
  faq: Faq;
  isOpen: boolean;
  setOpen: () => void;
  accentColor: string;
}

const FaqItem = ({ faq, isOpen, setOpen, accentColor }: Props) => {
  return (
    <div className="border-b border-gray-700">
      <button onClick={setOpen} className="w-full flex justify-between items-center text-left py-5 px-2">
        <span className="text-lg font-medium text-white">{faq.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FiChevronDown size={24} style={{ color: accentColor }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <p className="pb-5 px-2 text-gray-300">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;