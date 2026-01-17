"use client";

import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl h-full animate-pulse">
      
      <figure className="skeleton h-48 w-full"></figure>

      <div className="card-body flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          
          <div className="skeleton h-5 w-3/4"></div>

       
          <div className="flex gap-1">
            <div className="skeleton h-4 w-12"></div>
          </div>

          
          <div className="skeleton h-4 w-full"></div>

         
          <div className="skeleton h-6 w-1/2"></div>
        </div>

        
        <div className="skeleton h-10 w-full mt-4"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;