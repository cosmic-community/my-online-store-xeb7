// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategory, getCategories, getProductsByCategory } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id);
  const name = getMetafieldValue(category.metadata?.name) || category.title;
  const emoji = getMetafieldValue(category.metadata?.icon_emoji);
  const description = getMetafieldValue(category.metadata?.description);
  const image = category.metadata?.category_image;

  return (
    <div className="relative z-10">
      <div className="relative h-64 overflow-hidden bg-navy">
        {image ? (
          <img
            src={`${image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={1600}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-7xl">
            {emoji || '🏷️'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white flex items-center gap-3">
            {emoji && <span>{emoji}</span>}
            {name}
          </h1>
          {description && <p className="mt-2 text-gray-300 max-w-2xl">{description}</p>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/categories" className="text-sm text-electric hover:underline mb-8 inline-block">
          ← Back to Categories
        </Link>

        {products.length === 0 ? (
          <div className="glass p-12 text-center text-gray-400">
            No products in this category yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}