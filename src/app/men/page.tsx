import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function MenPage() {
  const menProducts = products.filter(product => product.category === 'men');

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Men's Collection</h1>
        <p className="text-lg text-gray-600">Discover our collection of trendy men's clothing</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 