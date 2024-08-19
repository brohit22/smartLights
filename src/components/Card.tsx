import React from 'react';
import { FaCog, FaDollarSign, FaLock } from 'react-icons/fa';

interface CardProps {
  image?: string;
  icon?: 'cog' | 'dollar' | 'lock'; // Extend this list based on available icons
  title?: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ image, icon, title, text }) => {
  return (
    <div className='border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white'>
      {image && (
        <img
          src={`/path/to/images/${image}`}
          alt={title}
          className='w-full h-48 object-cover'
        />
      )}
      {icon && (
        <div className='flex items-center justify-center p-4'>
          {icon === 'cog' && <FaCog className='text-3xl text-gray-500' />}
          {icon === 'dollar' && (
            <FaDollarSign className='text-3xl text-gray-500' />
          )}
          {icon === 'lock' && <FaLock className='text-3xl text-gray-500' />}
        </div>
      )}
      <div className='p-4'>
        {title && <h3 className='text-lg font-semibold'>{title}</h3>}
        <p className='text-gray-600'>{text}</p>
      </div>
    </div>
  );
};

export default Card;
