import { Link, NavLink, useParams } from 'react-router-dom';

interface Company {
  id: string;
  name: string;
  logo: string;
  colors: { primary: string; accent: string };
}

interface Props {
  company: Company;
}

const CompanyHeader = ({ company }: Props) => {
  const { companyId } = useParams();
  const navLinks = [
    { name: 'Home', path: `/${companyId}` },
    { name: 'Our Story', path: `/${companyId}/our-story` },
    { name: 'News & Events', path: `/${companyId}/news` },
    { name: 'FAQs', path: `/${companyId}/faq` },
    { name: 'Contact Us', path: `/${companyId}/contact` },
  ];

  const activeStyle = {
    color: company.colors.accent,
    borderBottom: `2px solid ${company.colors.accent}`,
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to={`/${companyId}`} className="flex items-center">
          <img src={company.logo} alt={`${company.name} Logo`} className="h-8 mr-3" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.name === 'Home'}
              className="text-gray-300 hover:text-white transition-colors duration-300 pb-1"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default CompanyHeader;