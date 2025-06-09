'use client';

import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition duration-200 ease-in-out flex flex-col h-full">
        
        <div className="relative w-full h-48 bg-gray-100 rounded-md overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            style={{ objectFit: 'contain' }}
            className="group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        <div className="mt-4 flex-grow">
          <h2 className="text-md font-medium text-gray-800 line-clamp-2 h-12">
            {product.title}
          </h2>
        </div>

        <p className="text-blue-600 font-semibold mt-2 text-lg">
          Price: ₹{product.price}
        </p>
      </div>
    </Link>
  );
}
