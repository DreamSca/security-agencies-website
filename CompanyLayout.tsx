import { Outlet, useParams, Navigate } from 'react-router-dom';
import companiesData from '../data/companies.json';
import CompanyHeader from '../components/company/CompanyHeader';
import Footer from '../components/shared/Footer';
import { AnimatePresence } from 'framer-motion';

const CompanyLayout = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const company = companiesData.find(c => c.id === companyId);

  if (!company) {
    // If companyId is not found, redirect to the portal page
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-brand-dark min-h-screen flex flex-col">
      <CompanyHeader company={company} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {/* The key is essential for AnimatePresence to detect page changes */}
          <Outlet context={{ company }} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyLayout;