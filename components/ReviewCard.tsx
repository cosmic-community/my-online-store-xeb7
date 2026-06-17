import type { Review } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'opacity-100' : 'opacity-25'}>★</span>
      ))}
    </div>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  const name = getMetafieldValue(review.metadata?.reviewer_name) || 'Anonymous';
  const title = getMetafieldValue(review.metadata?.review_title);
  const content = getMetafieldValue(review.metadata?.review_content);
  const rating = typeof review.metadata?.rating === 'number' ? review.metadata.rating : 0;
  const avatar = review.metadata?.reviewer_avatar;
  const product = review.metadata?.product;

  return (
    <div className="glass neon-card p-6 transition-transform duration-500 hover:-translate-y-2">
      <Stars rating={rating} />
      {title && <h3 className="mt-3 font-semibold text-white">{title}</h3>}
      {content && <p className="mt-2 text-sm text-gray-400 line-clamp-4">{content}</p>}
      <div className="mt-5 flex items-center gap-3">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border border-electric/40"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center text-electric font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-white text-sm">{name}</p>
          {product && (
            <p className="text-xs text-gray-500">
              on {getMetafieldValue(product.metadata?.name) || product.title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}