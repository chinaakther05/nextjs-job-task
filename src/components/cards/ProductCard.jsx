"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";
import CartButton from "../Buttons/Cartbutton";
import { useState } from "react";

const ProductCard = ({ product, onViewDetails }) => {
  const { title, image, price, rating, reviews, id, originalPrice, discountPercentage } = product;
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // ডিসকাউন্ট ক্যালকুলেশন (যদি ডেটা থাকে)
  const discount = discountPercentage || 0;
  const showDiscount = discount > 0;
  const displayedOriginalPrice = originalPrice || Math.round(price * 1.2); // 20% বেশি দেখাবে যদি originalPrice না থাকে
  const savedAmount = displayedOriginalPrice - price;

  return (
 
   
    <div 
    
      className="card group bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden animate-fadeInUp"
      style={{ animationDelay: `${id % 10 * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ডিসকাউন্ট বেজ শুধু দেখাবে যদি ডিসকাউন্ট থাকে */}
      {showDiscount && (
        <div className="absolute top-3 left-3 z-20">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse shadow-lg">
            -{discount}%
          </div>
        </div>
      )}

      {/* Hot বেজ শুধু হাই রেটিং এর জন্য */}
      {rating >= 4.5 && (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce-slow shadow-lg flex items-center gap-1">
            ⭐ Top Rated
          </div>
        </div>
      )}

      {/* Product Image */}
      <figure className="relative h-56 w-full overflow-hidden">
        <div className={`absolute inset-0 ${isImageLoaded ? 'hidden' : 'block'} bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse rounded-t-2xl`} />
        
        <Image 
          src={image} 
          alt={title} 
          fill 
          style={{ objectFit: "cover" }}
          className={`
            transition-all duration-700
            ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
          onLoad={() => setIsImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Image Overlay on Hover */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
      </figure>

      {/* Product Content */}
      <div className="card-body p-4 md:p-6">
        {/* Title */}
        <h2 className="card-title text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i}
                className={`
                  ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                `}
              />
            ))}
          </div>
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {rating}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-xs">
            ({reviews} reviews)
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          {/* Current Price */}
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-2xl font-bold text-primary">
              ৳ {price.toLocaleString()}
            </p>
            
            {/* Original Price (যদি ডিসকাউন্ট থাকে) */}
            {showDiscount && (
              <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ৳ {displayedOriginalPrice.toLocaleString()}
              </p>
            )}
          </div>
          
          {/* Saved Amount (যদি ডিসকাউন্ট থাকে) */}
          {showDiscount && savedAmount > 0 && (
            <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
              Save ৳{savedAmount.toLocaleString()}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="card-actions flex justify-between items-center gap-2">
          <CartButton 
            product={product} 
            className="btn btn-primary btn-sm md:btn-md flex-1 transition-transform duration-300 hover:scale-105"
          >
            <BsCartPlus className="text-lg" />
            <span className="hidden sm:inline">Add to Cart</span>
          </CartButton>

          <Link
            href={`/products/${id}`}
            className="btn btn-outline btn-primary btn-sm md:btn-md flex-1 transition-transform duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => onViewDetails?.(product), 300);
            }}
          >
            <span>View Details</span>
          </Link>
        </div>

        {/* Quick Info */}
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>📦 Free Shipping</span>
            <span>🔄 30-Day Return</span>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default ProductCard;