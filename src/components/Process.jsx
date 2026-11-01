// ============================================================
// Process.jsx — "How I Work" section
// Reads all content from portfolioData.js (skillsContent).
// Displays a 4-card process grid on a white background.
// ============================================================

import { skillsContent } from '../data/portfolioData.js';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    // White background section — contrasts with the dark sections around it
    <section id="process" className="bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="text-center mb-16">
          {/* Red badge pill */}
          <span className="bg-[#ff2a2a] text-white rounded-full px-4 py-1 text-sm font-semibold inline-block">
            {skillsContent.badge}
          </span>

          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl font-black text-black mt-4 leading-tight">
            {skillsContent.heading}
          </h2>

          {/* Short description */}
          <p className="text-lg text-black/60 mt-4 max-w-2xl mx-auto">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Process cards grid ─────────────────────────────── */}
        {/* 1 column on mobile → 2 columns on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {skillsContent.cards.map((card, index) => (
            <motion.div
              key={card.number}
              // AOS scroll animation — each card fades up with a staggered delay
              data-aos="fade-up"
              data-aos-delay={index * 100}
              // Framer Motion hover — subtle lift effect
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="
                bg-[#0a0a0a] text-white rounded-2xl p-8
                border border-white/10 hover:border-[#ff2a2a]
                transition-all duration-300 group
              "
            >
              {/* Large step number — dim by default, red on hover */}
              <p className="text-5xl font-black text-[#ff2a2a]/30 group-hover:text-[#ff2a2a] transition mb-4">
                {card.number}
              </p>

              {/* Step title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>

              {/* Step description */}
              <p className="text-white/70 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── End-text callout ───────────────────────────────── */}
        <div className="mt-12 text-center text-[#ff2a2a] font-bold text-xl flex items-center justify-center gap-2">
          {/* Rocket emoji before the endText string */}
          <span>🚀</span>
          <span>{skillsContent.endText}</span>
        </div>

      </div>
    </section>
  );
}
