"use client"

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartButton = ({product}) => {
    const isLogin = false;
    const router = useRouter();
    const path = usePathname();

    const add2Card =()=>{
     if(isLogin) alert(product.id);
     else{
          router.push(`/login?callbackUrl=${path}`);
     }
        
    };
    return (
        <div>
       <button onClick={add2Card} className="px-5 py-2 w-full  btn btn-primary bg-blue-600 text-white rounded">
                <FaCartPlus></FaCartPlus>
                Add to Cart
              </button>
     </div>
    );
};

export default CartButton;