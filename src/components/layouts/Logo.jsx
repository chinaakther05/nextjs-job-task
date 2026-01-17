import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-1'>
            <Image alt='logo-our-products' src={'/images.png'} width={60} height={50} />
            <h2 className='text-xl font-bold'>Smart <span className='text-primary'>Shop</span> </h2>
        </Link>
    );
};

export default Logo;