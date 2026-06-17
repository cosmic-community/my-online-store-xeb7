import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import ReviewCard from '@/components/ReviewCard';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { getFeaturedProducts, getProducts, getCategories, getReviews } from '@/lib/cosmic';

export default async function HomePage() {
  const [featured, allProducts, categories, reviews] = await Promise.all([
    getFeaturedProducts(),
    getProducts(),
    getCategories(),
    getReviews(),
  ]);

  const showcaseProducts = featured.length > 0 ? featured : allProducts.slice(0, 8);

  return (
    <>
      <Hero />

      {categories.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Shop By <span className="text-electric">Category</span>
            </h2>
            <p className="mt-3 text-gray-400">Find exactly what your game needs.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <Reveal key={category.id} delay={i * 80}>
                <CategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {showcaseProducts.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Reveal className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Featured <span className="text-electric">Gear</span>
              </h2>
              <p className="mt-3 text-gray-400">Premium picks for peak performance.</p>
            </div>
            <Link href="/products" className="btn-outline !px-6 !py-2 text-sm hidden sm:inline-flex">
              View All
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <WhyChooseUs />
      <Stats />
      <About />

      {reviews.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              What Athletes <span className="text-electric">Say</span>
            </h2>
            <p className="mt-3 text-gray-400">Real reviews from real champions.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review, i) => (
              <Reveal key={review.id} delay={i * 80}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}