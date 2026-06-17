import Reveal from '@/components/Reveal';

const items = [
  { icon: '🏅', title: 'Premium Quality', desc: 'Only the finest gear from trusted global brands.' },
  { icon: '💰', title: 'Affordable Prices', desc: 'Competitive pricing without compromising quality.' },
  { icon: '🤝', title: 'Trusted Store', desc: 'Thousands of happy athletes shop with us.' },
  { icon: '🎯', title: 'Expert Guidance', desc: 'Our specialists help you pick the right gear.' },
  { icon: '🚀', title: 'Fast Delivery', desc: 'Lightning-fast shipping across the country.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Reveal className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Why <span className="text-electric">Choose Us</span>
        </h2>
        <p className="mt-3 text-gray-400">Engineered for champions. Trusted by athletes.</p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="glass neon-card p-6 text-center h-full hover:shadow-neon-red">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}