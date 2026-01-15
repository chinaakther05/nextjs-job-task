'use client';
import Link from 'next/link';
import React from 'react';
import { TbError404Off } from "react-icons/tb";

const Error404 = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center  bg-gray-100">
            <TbError404Off size={120} className="text-primary" />
            <h1 className="text-4xl font-bold mt-4">Oops! Page not found.</h1>
            <Link href={'/'} className='btn mt-4'>Go to Home</Link>
        </div>
    );
};

export default Error404;
