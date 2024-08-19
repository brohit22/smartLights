import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-transparent z-10'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <Logo />
        <nav className='hidden md:flex flex-grow justify-end pr-10'>
          <NavLinks />
        </nav>
        <Button className='bg-blue-500 text-white hover:bg-blue-600 transition duration-300'>
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
