import Link from 'next/link';

const floats = [
  { emoji: '🏏', cls: 'top-20 left-[8%] text-6xl', delay: '0s' },
  { emoji: '⚽', cls: 'top-32 right-[10%] text-7xl', delay: '1s' },
  { emoji: '🏀', cls: 'bottom-28 left-[14%] text-6xl', delay: '2s' },
  { emoji: '🏸', cls: 'bottom-20 right-[18%] text-5xl', delay: '1.5s' },
  { emoji: '🏋️', cls: 'top-1/2 left-[44%] text-5xl', delay: '0.5s' },
];

export default function Hero() {
  return (
    <section className="relative z-10 min-h-[92vh] flex items-center justify-center overflow-hidden bg-hero-grid">
      {floats.map((f) => (
        <span
          key={f.emoji}
          className={`absolute animate-float opacity-70 select-none ${f.cls}`}
          style={{ animationDelay: f.delay }}
          aria-hidden="true"
        >
          {f.emoji}
        </span>
      ))}

      <div className="relative text-center px-4 max-w-4xl animate-fadeUp">
        <span className="inline-block glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-electric mb-6">
          Premium Sports Showroom
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-electric via-white to-neonred bg-clip-text text-transparent">
            MOTERA SPORTS HUB
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Your Ultimate Destination for Premium Sports Equipment &amp; Fitness Gear.
        </p>
        <p className="mt-3 text-electric font-semibold">
          🏆 Play Better. Train Harder. Win Bigger. 🚀
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/products" className="btn-primary">Shop Now</Link>
          <Link href="/categories" className="btn-outline">Explore Products</Link>
        </div>
      </div>
    </section>
  );
}