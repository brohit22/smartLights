import React from 'react';
import Logo from '../components/Logo';

const Footer: React.FC = () => {
  return (
    <footer className='py-6 w-1920px h-657px  bg-footer-texture text-white'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <Logo />
        <ul className='flex space-x-10 text-white'>
          <li>Products</li>
          <li>Software Services</li>
          <li>Follow Us</li>
        </ul>
      </div>
      <div className='container mx-auto px-4 flex justify-between items-center mt-4'>
        <div className='flex space-x-4'>
          <a href='/privacy' className='hover:underline'>
            Privacy Policy
          </a>
          <a href='/terms' className='hover:underline'>
            Terms & Conditions
          </a>
          <a href='/cookies' className='hover:underline'>
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
