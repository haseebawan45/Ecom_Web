export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'men' | 'women';
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A comfortable and versatile white t-shirt made from 100% cotton.',
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 79.99,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Modern slim fit jeans with stretch fabric for maximum comfort.',
  },
  {
    id: '3',
    name: 'Casual Blazer',
    price: 129.99,
    category: 'men',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A versatile blazer perfect for both casual and formal occasions.',
  },
  {
    id: '4',
    name: 'Floral Summer Dress',
    price: 89.99,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Light and breezy floral dress perfect for summer days.',
  },
  {
    id: '5',
    name: 'High-Waist Jeans',
    price: 89.99,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Flattering high-waist jeans with perfect stretch and comfort.',
  },
  {
    id: '6',
    name: 'Casual Blouse',
    price: 49.99,
    category: 'women',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant blouse with a modern cut and comfortable fit.',
  },
]; 