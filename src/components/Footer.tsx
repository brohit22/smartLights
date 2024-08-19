const Footer: React.FC = () => {
  return (
    <footer className='py-6 bg-gray-900 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <p>© 2024 Smart Lights</p>
        <div className='flex space-x-4'>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/terms'>Terms & Conditions</a>
          <a href='/cookies'>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
