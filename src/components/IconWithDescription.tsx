// src/components/IconWithDescription.tsx
import React from 'react';

interface IconWithDescriptionProps {
  icon: string;
  description: string;
}

const IconWithDescription: React.FC<IconWithDescriptionProps> = ({
  icon,
  description,
}) => {
  return (
    <div className='flex flex-col items-center text-center'>
      {/* Placeholder for the icon */}
      <div className='w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-4'>
        {/* Replace with the actual icon component or image */}
        <img src={`/icons/${icon}.svg`} alt={icon} className='w-8 h-8' />
      </div>
      <p className='text-lg font-medium'>{description}</p>
    </div>
  );
};

export default IconWithDescription;
