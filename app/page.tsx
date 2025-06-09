'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      
      <div className="flex justify-center py-6 px-4 bg-white shadow-md sticky top-0 z-10">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="🔍 Search for products..."
          className="w-full max-w-xl px-6 py-3 rounded-full border border-gray-300 shadow-sm text-base focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
        />
      </div>

    
     <main className="px-4 sm:px-8 md:px-12 py-10">
  {filteredProducts.length > 0 ? (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-500 mt-16 text-lg">
      No products found for <span className="font-semibold">&quot;{searchQuery}&quot;</span>
    </div>
  )}
</main>

    </div>
  );
}
