import CategoryCard from '@/components/CategoryCard';
import { getCategories } from '@/lib/cosmic';

export const metadata = {
  title: 'Categories | Motera Sports Hub',
  description: 'Explore sports equipment by category.',
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Shop By <span className="text-electric">Category</span>
        </h1>
        <p className="mt-4 text-gray-400">Find exactly what your game needs.</p>
      </div>

      {categories.length === 0 ? (
        <div className="glass p-12 text-center text-gray-400">No categories available yet.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}