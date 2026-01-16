"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";
import CartButton from "../Buttons/Cartbutton";



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
       <div className="card-actions flex justify-between gap-3">
 <CartButton product={{...product}}></CartButton>

  <Link
    href={`/products/${product.id}`}
    className="btn btn-primary btn-outline btn-sm"
  >
    View Details
  </Link>
</div>

      </div>
    </div>
  );
};

export default ProductCard;
