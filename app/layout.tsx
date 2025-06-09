
import './globals.css';
import { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Product Catalog',
  description: 'A simple product catalog with cart functionality',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <CartProvider>
          <Navbar />
          <main className="p-6 max-w-7xl mx-auto">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
