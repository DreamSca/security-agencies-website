const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Security Services Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;