import Link from 'next/link';
import type { Product } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ProductCard({ product }: { product: Product }) {
  const image = product.metadata?.product_images?.[0];
  const name = getMetafieldValue(product.metadata?.name) || product.title;
  const price = product.metadata?.price;
  const compare = product.metadata?.compare_at_price;
  const brand = getMetafieldValue(product.metadata?.brand);
  const status = getMetafieldValue(product.metadata?.inventory_status);
  const featured = product.metadata?.featured === true;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group glass neon-card overflow-hidden block transition-transform duration-500 hover:-translate-y-2 [transform-style:preserve-3d] hover:[transform:perspective(900px)_rotateX(4deg)_rotateY(-4deg)]"
    >
      <div className="relative aspect-square overflow-hidden bg-navy">
        {image ? (
          <img
            src={`${image.imgix_url}?w=700&h=700&fit=crop&auto=format,compress`}
            alt={name}
            width={350}
            height={350}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">🛍️</div>
        )}
        {featured && (
          <span className="absolute top-3 left-3 bg-neonred text-white text-xs font-bold px-3 py-1 rounded-full shadow-neon-red">
            Featured
          </span>
        )}
        {status && (
          <span className="absolute top-3 right-3 glass text-xs px-3 py-1">
            {status}
          </span>
        )}
      </div>
      <div className="p-5">
        {brand && <p className="text-xs uppercase tracking-wider text-electric mb-1">{brand}</p>}
        <h3 className="font-semibold text-lg text-white group-hover:text-electric transition-colors line-clamp-1">
          {name}
        </h3>
        <div className="mt-3 flex items-center gap-3">
          {typeof price === 'number' && (
            <span className="text-xl font-bold text-white">₹{price.toLocaleString('en-IN')}</span>
          )}
          {typeof compare === 'number' && typeof price === 'number' && compare > price && (
            <span className="text-sm text-gray-500 line-through">
              ₹{compare.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}