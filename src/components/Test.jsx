"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const Test = () => {
    const session = useSession();
    return (
        <div>
          
        </div>
    );
};

export default Test;