import Link from 'next/link';
import type { Category } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function CategoryCard({ category }: { category: Category }) {
  const image = category.metadata?.category_image;
  const name = getMetafieldValue(category.metadata?.name) || category.title;
  const emoji = getMetafieldValue(category.metadata?.icon_emoji);
  const description = getMetafieldValue(category.metadata?.description);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group glass neon-card overflow-hidden block transition-transform duration-500 hover:-translate-y-2"
    >
      <div className="relative h-44 overflow-hidden bg-navy">
        {image ? (
          <img
            src={`${image.imgix_url}?w=700&h=400&fit=crop&auto=format,compress`}
            alt={name}
            width={350}
            height={200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            {emoji || '🏷️'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          {emoji && <span className="text-2xl">{emoji}</span>}
          <h3 className="text-lg font-bold text-white group-hover:text-electric transition-colors">
            {name}
          </h3>
        </div>
      </div>
      {description && (
        <p className="p-4 text-sm text-gray-400 line-clamp-2">{description}</p>
      )}
    </Link>
  );
}