import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative h-screen bg-hero-pattern bg-cover bg-center transition-opacity duration-1000 ${
        loading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
        <h3 className='font-inter text-2xl md:text-3xl font-normal tracking-wide mb-4'>
          Smart Lighting Solutions
        </h3>
        <h1 className='font-inter text-3xl md:text-5xl font-normal leading-[72px] opacity-50'>
          Bringing A New Perspective To Street Lights
          <br />
          And The Cities Of Tomorrow.
        </h1>
        <Button className='mt-8'>Login</Button>
      </div>

      {loading && (
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin'></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
