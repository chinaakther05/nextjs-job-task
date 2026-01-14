"use client";

import React, { useEffect, useState } from "react";

import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import productsData from "@/data/items.json";
import ProductCard from "@/components/cards/ProductCard";


const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API delay
    const timer = setTimeout(() => {
      setProducts(productsData); // 👈 data set হচ্ছে
      setLoading(false);         // 👈 loading বন্ধ হচ্ছে
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => <ProductSkeleton key={i} />)
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};

export default ProductsPage;