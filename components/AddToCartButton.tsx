'use client';

import { useCart } from '@/context/CartContext';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity?: number;
};

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ ...product, quantity: 1 })}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
