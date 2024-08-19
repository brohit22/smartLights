import React from 'react';
import logo from '../assets/images/smart lights_logo.svg';

const Logo: React.FC = () => {
  return (
    <div className='flex items-center'>
      <img src={logo} alt='Smart Lights Logo' className='h-10' />
      <span className='ml-2 font-inter text-base font-normal leading-[29.05px] tracking-[1.5px]'>
        Smart Lights
      </span>
    </div>
  );
};

export default Logo;
