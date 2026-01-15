"use client";

import React, { useEffect, useState } from "react";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import ProductCard from "@/components/cards/ProductCard";
import Image from "next/image";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await import("@/data/items.json");
      setProducts(data.default);
    };

    loadData();
  }, []);

  if (!products) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Array(6).fill(0).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {selectedProduct ? (
        <div className="max-w-4xl mx-auto py-10">
          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-4 btn btn-outline btn-sm"
          >
            Back
          </button>

          <h1 className="text-3xl font-bold mb-4">
            {selectedProduct.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/2 h-96">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                width={500}
                height={400}
                className="rounded-xl object-contain"
              />
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-lg font-bold">
                Price: ৳ {selectedProduct.price}
              </p>
              <p>
                Rating: {selectedProduct.rating} ({selectedProduct.reviews} reviews)
              </p>
              <p>{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
