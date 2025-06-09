'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductList = ({ searchQuery }: { searchQuery: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {filteredProducts.length === 0 ? (
        <p className="col-span-full text-center text-red-500">
          No products found for &quot;{searchQuery}&quot;
        </p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-md p-4 shadow-sm">
            <div className="relative w-full h-32 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-blue-600 font-bold">₹{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
