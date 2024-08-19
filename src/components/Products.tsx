import React from 'react';
import Carousel from '../components/Carousel';
import Card from './Card';

const Products: React.FC = () => {
  return (
    <section className='py-16'>
      <h2 className='text-center text-3xl font-semibold'>
        Cutting-edge hardware
      </h2>
      <Carousel>
        <Card
          image='product1.png'
          title='Centralized Control & Monitoring System'
          text='' // Empty text since title is used
        />
        <Card
          image='product2.png'
          title='Street Light Controller'
          text='' // Empty text since title is used
        />
        {/* Add more cards as needed */}
      </Carousel>
    </section>
  );
};

export default Products;
