import ReviewCard from '@/components/ReviewCard';
import { getReviews } from '@/lib/cosmic';

export const metadata = {
  title: 'Reviews | Motera Sports Hub',
  description: 'Read what our customers say about Motera Sports Hub.',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Customer <span className="text-electric">Reviews</span>
        </h1>
        <p className="mt-4 text-gray-400">Real reviews from real champions.</p>
      </div>

      {reviews.length === 0 ? (
        <div className="glass p-12 text-center text-gray-400">No reviews yet.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}