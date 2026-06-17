import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl mb-3">
            <span className="text-2xl">🏆</span>
            <span className="bg-gradient-to-r from-electric to-neonred bg-clip-text text-transparent">
              MOTERA SPORTS HUB
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Play Better. Train Harder. Win Bigger. Premium sports equipment & fitness gear.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-electric">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/products" className="hover:text-electric">Products</Link></li>
            <li><Link href="/categories" className="hover:text-electric">Categories</Link></li>
            <li><Link href="/reviews" className="hover:text-electric">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-electric">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 +91 98765 43210</li>
            <li>📍 Motera, Ahmedabad, India</li>
            <li>✉️ hello@moterasports.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-electric">Hours</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Mon–Sat: 9:00 – 21:00</li>
            <li>Sunday: 10:00 – 18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Motera Sports Hub. All rights reserved.
      </div>
    </footer>
  );
}