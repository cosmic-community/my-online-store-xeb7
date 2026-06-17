'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Get In <span className="text-electric">Touch</span>
        </h2>
        <p className="mt-3 text-gray-400">We&apos;d love to hear from you. Reach out anytime.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass p-8 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium text-white">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-sm text-gray-400">Store Location</p>
              <p className="font-medium text-white">Motera, Ahmedabad, Gujarat, India</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">✉️</span>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium text-white">hello@moterasports.com</p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="glass p-8 space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric"
          />
          <textarea
            required
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric resize-none"
          />
          <button type="submit" className="btn-primary w-full">
            {sent ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}