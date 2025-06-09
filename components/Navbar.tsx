'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        🛍️ Product Catalog
      </Link>

  
      <Link href="/cart" className="relative">
        🛒 Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;



