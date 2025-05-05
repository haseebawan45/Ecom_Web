'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 