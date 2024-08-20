import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import Products from '../components/Products';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Ecosystem />
      <Products />
      <Benefits />
      <Footer />
    </>
  );
};

export default Home;
