import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center min-h-[70vh] lg:min-h-[65vh] px-4 md:px-8 lg:px-16 py-6 lg:py-0 overflow-hidden'>
      
      {/* Text Section */}
      <div className='flex-1 space-y-5 animate-slideUp'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transform transition-all duration-700 hover:translate-x-2'>
          Smart Digital <span className='text-primary animate-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Products Store</span>
        </h2>

        <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slideUp delay-200'>
          Buy every product with up to <span className='font-bold text-primary'>15% discount</span>
        </p>

        <button className='btn btn-primary btn-outline transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-slow px-8 py-3 text-lg font-semibold'>
          Explore Products
        </button>
      </div>
      
      {/* Image Section */}
      <div className='flex-1 mt-4 lg:mt-0 animate-float'>
        <Image 
          alt='Buy every product with up to 15% discount' 
          src={'/17-Series-1400x765,png.webp'} 
          width={650} 
          height={400}
          className='rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1 border-4 border-white dark:border-gray-800'
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
