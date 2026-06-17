import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/cosmic';

export const metadata = {
  title: 'Products | Motera Sports Hub',
  description: 'Browse our full collection of premium sports equipment and fitness gear.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          All <span className="text-electric">Products</span>
        </h1>
        <p className="mt-4 text-gray-400">Gear up for greatness.</p>
      </div>

      {products.length === 0 ? (
        <div className="glass p-12 text-center text-gray-400">No products available yet.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}