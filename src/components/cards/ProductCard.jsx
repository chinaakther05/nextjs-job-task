"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";



const ProductCard = ({ product, onViewDetails }) => {
  const { title, image, price, rating, reviews } = product;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative h-56 w-full">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>
        <p className="text-lg font-bold">৳ {price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary btn-sm flex items-center gap-2">
            <BsCartPlus /> Add to Cart
          </button>

          {/* ✅ View Details without navigation */}
         
         <Link
  href={`/products/${product.id}`}
  className="btn btn-primary btn-outline mt-4 w-full"
>
  View Details
</Link>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
