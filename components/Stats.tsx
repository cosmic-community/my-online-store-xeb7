'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

const stats: Stat[] = [
  { label: 'Happy Customers', value: 10000, suffix: '+' },
  { label: 'Products', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Star Rating', value: 4.9, suffix: '', decimals: 1 },
];

function Counter({ stat }: { stat: Stat }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(stat.value * progress);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [stat.value]);

  const formatted = stat.decimals
    ? display.toFixed(stat.decimals)
    : Math.floor(display).toLocaleString('en-IN');

  return (
    <div ref={ref} className="glass p-8 text-center">
      <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-electric to-neonred bg-clip-text text-transparent">
        {formatted}{stat.suffix}
      </div>
      <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}