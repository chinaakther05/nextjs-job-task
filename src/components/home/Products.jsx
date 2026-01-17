import React from 'react';
import products from "@/data/items.json";
import ProductCard from '../cards/ProductCard';


const Products = async() => {
 
  if (!products || products.length === 0) return <p>No products found</p>;

  return (
    <div className='container mx-auto py-4'>
     <div className='relative py-4'>
<h2 className='text-center text-4xl md:text-5xl font-bold mb-10'>
  <span className='relative inline-block'>
    <span className='relative z-10 animate-fade-in-down'>
      Our Products
    </span>
    <span className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-expand'></span>
  </span>
</h2>
  {/* Background Blur Effect */}
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow'></div>
</div>
      <div className='grid md:grid-cols-4 gap-4'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      
      </div>
    </div>
  );
};

export default Products;
