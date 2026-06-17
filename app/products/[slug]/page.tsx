// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProduct, getProducts, getReviews } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';
import ProductCard from '@/components/ProductCard';
import ReviewCard from '@/components/ReviewCard';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const [allProducts, allReviews] = await Promise.all([getProducts(), getReviews()]);

  const name = getMetafieldValue(product.metadata?.name) || product.title;
  const description = getMetafieldValue(product.metadata?.description);
  const brand = getMetafieldValue(product.metadata?.brand);
  const status = getMetafieldValue(product.metadata?.inventory_status);
  const price = product.metadata?.price;
  const compare = product.metadata?.compare_at_price;
  const stock = product.metadata?.stock_quantity;
  const images = product.metadata?.product_images || [];
  const category = product.metadata?.category;

  const related = allProducts
    .filter((p) => p.id !== product.id && p.metadata?.category?.id === category?.id)
    .slice(0, 4);

  const productReviews = allReviews.filter((r) => r.metadata?.product?.id === product.id);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/products" className="text-sm text-electric hover:underline mb-8 inline-block">
        ← Back to Products
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="glass overflow-hidden aspect-square bg-navy">
            {images[0] ? (
              <img
                src={`${images[0].imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-7xl">🛍️</div>
            )}
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {images.slice(1, 5).map((img, i) => (
                <div key={i} className="glass overflow-hidden aspect-square bg-navy">
                  <img
                    src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                    alt={`${name} ${i + 2}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {brand && <p className="text-sm uppercase tracking-wider text-electric mb-2">{brand}</p>}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{name}</h1>

          <div className="mt-5 flex items-center gap-4">
            {typeof price === 'number' && (
              <span className="text-3xl font-bold text-white">
                ₹{price.toLocaleString('en-IN')}
              </span>
            )}
            {typeof compare === 'number' && typeof price === 'number' && compare > price && (
              <span className="text-lg text-gray-500 line-through">
                ₹{compare.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {status && (
              <span className="glass px-4 py-1.5 text-sm text-electric">{status}</span>
            )}
            {typeof stock === 'number' && (
              <span className="glass px-4 py-1.5 text-sm text-gray-300">
                {stock} in stock
              </span>
            )}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="glass px-4 py-1.5 text-sm text-gray-300 hover:text-electric"
              >
                {getMetafieldValue(category.metadata?.name) || category.title}
              </Link>
            )}
          </div>

          {description && (
            <p className="mt-6 text-gray-300 leading-relaxed">{description}</p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 Enquire on WhatsApp
            </a>
            <Link href="/products" className="btn-outline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {productReviews.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-extrabold mb-8">
            Customer <span className="text-electric">Reviews</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-extrabold mb-8">
            Related <span className="text-electric">Products</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}