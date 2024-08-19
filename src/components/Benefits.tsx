import React from 'react';
import Card from './Card'; // Import the Card component

const Benefits: React.FC = () => {
  return (
    <section className='py-16 bg-gray-100'>
      <h2 className='text-center text-3xl font-semibold'>
        The platform assists city managers on multiple fronts
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        <Card
          icon='dollar' // Adjust icon based on your requirement
          text='Saves on power consumption & related costs'
        />
        <Card icon='cog' text='Lowers downtimes' />
        <Card icon='lock' text='Ensures security in the neighborhood' />
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default Benefits;
