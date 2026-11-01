// Hero.jsx
// Full-screen hero section with video background, animated text, and CTA buttons.

import { motion } from 'framer-motion';
import { heroContent } from '../data/portfolioData.js';
import heroVideo from '../assets/hero/hero.mp4';

// Helper: reusable fade-up motion variant factory
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  // Destructure CTA data for clarity
  const { greeting, titleHighlight, subtitle, ctaPrimary, ctaSecondary, ctaResume } = heroContent;

  // Only show resume button when href is a non-empty string
  const showResume = ctaResume && typeof ctaResume.href === 'string' && ctaResume.href.trim() !== '';

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* ── Background video ─────────────────────────────────── */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* ── Dark overlay so text stays readable ─────────────── */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* ── Hero content (sits above video + overlay) ────────── */}
      <div className="relative z-10 text-white text-center px-6 max-w-4xl mx-auto">

        {/* 1. Availability badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-block bg-[#ff2a2a]/20 text-[#ff2a2a] border border-[#ff2a2a]/30 rounded-full px-4 py-1 text-sm mb-6">
            👋 Available for Opportunities
          </span>
        </motion.div>

        {/* 2. Greeting line */}
        <motion.p
          className="text-2xl md:text-4xl font-light text-white/80 mb-2"
          {...fadeUp(0.3)}
        >
          {greeting}
        </motion.p>

        {/* 3. Title highlight — uses the float animation from index.css */}
        <motion.h1
          className="text-4xl md:text-7xl font-black text-[#ff2a2a] leading-tight animate-float"
          {...fadeUp(0.5)}
        >
          {titleHighlight}
        </motion.h1>

        {/* 4. Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mt-4"
          {...fadeUp(0.7)}
        >
          {subtitle}
        </motion.p>

        {/* 5. CTA button row */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          {...fadeUp(0.9)}
        >
          {/* Primary — solid red */}
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="bg-[#ff2a2a] hover:bg-[#cc0000] text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              {ctaPrimary.text}
            </a>
          )}

          {/* Secondary — outlined white */}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition"
            >
              {ctaSecondary.text}
            </a>
          )}

          {/* Resume — only when href is provided */}
          {showResume && (
            <a
              href={ctaResume.href}
              download
              className="border border-white/30 text-white/80 hover:border-[#ff2a2a] hover:text-[#ff2a2a] px-8 py-3 rounded-lg transition flex items-center gap-2"
            >
              {/* Simple download arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              {ctaResume.text}
            </a>
          )}
        </motion.div>
      </div>

      {/* ── Bouncing scroll-down chevron ─────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
