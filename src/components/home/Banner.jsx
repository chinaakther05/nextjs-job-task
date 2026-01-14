import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
          <h2 className='text-5xl font-bold'>Smart Digital <span className='text-primary'>Products Store</span></h2>
           <p className=''>Buy every product with up to 15% discount</p>
           <button className='btn btn-primary btn-outline'>Explore Products</button>
         </div>
         <div className='flex-1'>
            <Image alt='Buy every product with up to 15% discount' src={'/17-Series-1400x765,png.webp'} width={650} height={400}></Image>
         </div>
        </div>
    );
};

export default Banner;