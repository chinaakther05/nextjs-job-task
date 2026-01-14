"use client";

import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl h-full animate-pulse">
      {/* Image */}
      <figure className="skeleton h-48 w-full"></figure>

      <div className="card-body flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          {/* Title */}
          <div className="skeleton h-5 w-3/4"></div>

          {/* Rating */}
          <div className="flex gap-1">
            <div className="skeleton h-4 w-12"></div>
          </div>

          {/* Review */}
          <div className="skeleton h-4 w-full"></div>

          {/* Price */}
          <div className="skeleton h-6 w-1/2"></div>
        </div>

        {/* Add to Cart button */}
        <div className="skeleton h-10 w-full mt-4"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;