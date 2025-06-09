'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">🛒 Your cart is empty</h2>
        <p className="mt-2 text-gray-500">Looks like you haven&apos;t added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">🛍️ Your Cart</h2>

      <div className="grid gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-5">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain rounded"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">Price: ₹{item.price}</p>

                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-md font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <p className="mt-2 font-semibold text-blue-700">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 text-sm font-semibold"
            >
              🗑️ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right text-2xl font-bold text-gray-800">
        Total: ₹{totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
