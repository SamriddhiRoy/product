'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
};

type Props = {
  params: {
    productId: string;
  };
};

const AddToCartButton = dynamic(() => import('@/components/AddToCartButton'), {
  ssr: false,
});

export default async function ProductDetailPage({ params }: Props) {
  const res = await fetch(`https://dummyjson.com/products/${params.productId}`);
  const product: Product = await res.json();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-80 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100 border relative">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            style={{ objectFit: 'contain' }}
            className="transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-3 text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mb-5 leading-relaxed">{product.description}</p>
          <p className="text-xl font-semibold text-blue-700 mb-4">
            <span className="font-semibold text-blue-700">Price:</span> ₹{product.price}
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
