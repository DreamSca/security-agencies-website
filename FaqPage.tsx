import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import MotionWrap from '../../components/animations/MotionWrap';
import FaqItem from '../../components/company/FaqItem';

interface Faq {
  question: string;
  answer: string;
}

interface CompanyData {
  colors: { accent: string };
  content: { faqs: Faq[] };
}

const FaqPage = () => {
  const { company } = useOutletContext<{ company: CompanyData }>();
  const { faqs } = company.content;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <MotionWrap>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} isOpen={openIndex === index} setOpen={() => setOpenIndex(openIndex === index ? null : index)} accentColor={company.colors.accent} />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
};

export default FaqPage;