
'use client';
import Link from 'next/link';
import React from 'react';
import { TbError404Off } from 'react-icons/tb';

const error = () => {
    return (
             <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100">
            <TbError404Off size={120} className="text-primary" />
            <h1 className="text-4xl font-bold mt-4">Someting went worng</h1>
            <Link href={'/'} className='btn mt-4'>Go to Home</Link>
        </div>
    );
};

export default error;