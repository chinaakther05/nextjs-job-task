import React from 'react';
import products from "@/data/items.json";
import ProductCard from '../cards/ProductCard';

const Products = () => {
  if (!products || products.length === 0) return <p>No products found</p>;

  return (
    <div className='container mx-auto py-10'>
      <h2 className='text-center text-4xl font-bold mb-10'>Our Products</h2>
      <div className='grid md:grid-cols-4 gap-4'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
