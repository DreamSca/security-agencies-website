import { useOutletContext } from 'react-router-dom';
import MotionWrap from '../../components/animations/MotionWrap';
import NewsCard from '../../components/company/NewsCard';

interface NewsItem {
  date: string;
  title: string;
  body: string;
}

interface CompanyData {
  colors: { accent: string };
  content: { news: NewsItem[] };
}

const NewsPage = () => {
  const { company } = useOutletContext<{ company: CompanyData }>();
  const { news } = company.content;

  return (
    <MotionWrap>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">News & Events</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <NewsCard key={index} item={item} accentColor={company.colors.accent} index={index} />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
};

export default NewsPage;