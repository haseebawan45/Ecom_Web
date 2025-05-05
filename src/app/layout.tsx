import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion Store - Men & Women Clothing',
  description: 'Discover our collection of trendy men and women clothing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Fashion Store</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    All Products
                  </a>
                  <a href="/men" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    Men
                  </a>
                  <a href="/women" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    Women
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
                  Cart (0)
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Fashion Store. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
} 