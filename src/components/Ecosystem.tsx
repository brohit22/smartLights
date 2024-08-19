// src/components/Ecosystem.tsx
import React from 'react';
import IconWithDescription from './IconWithDescription';

const Ecosystem: React.FC = () => {
  return (
    <section className='py-16 bg-gray-100'>
      <h2 className='text-center text-3xl font-semibold'>
        How does a smart street light ecosystem work?
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
        <IconWithDescription
          icon='controller'
          description='Smart Light Controller'
        />
        <IconWithDescription icon='gateway' description='Gateway' />
        <IconWithDescription icon='utility' description='Utilities' />
        <IconWithDescription icon='analytics' description='Analytics' />
      </div>
    </section>
  );
};

export default Ecosystem;
