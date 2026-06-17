import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <div className="glass p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-electric/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-neonred/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              About <span className="text-electric">Motera Sports Hub</span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              Born from a passion for sport, Motera Sports Hub is a premium destination for athletes
              of every level. From cricket and football to badminton, gym, and fitness gear, we curate
              only the best equipment to help you perform at your peak. Our mission is simple — to
              empower every athlete with world-class gear and expert guidance.
            </p>
            <p className="mt-6 text-electric font-semibold text-lg">
              🏆 Play Better. Train Harder. Win Bigger. 🚀
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}