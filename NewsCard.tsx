import { motion } from 'framer-motion';

interface NewsItem {
  date: string;
  title: string;
  body: string;
}

interface Props {
  item: NewsItem;
  accentColor: string;
  index: number;
}

const NewsCard = ({ item, accentColor, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col"
    >
      <p className="text-sm mb-2" style={{ color: accentColor }}>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
      <p className="text-gray-400 flex-grow">{item.body}</p>
    </motion.div>
  );
};

export default NewsCard;