// About.jsx
// About section — portrait image on the left, bio + tech stack on the right.
// AOS handles scroll-in animations; framer-motion handles hover effects on badges.

import { motion } from 'framer-motion';
import { aboutContent } from '../data/portfolioData.js';
import profileImg from '../assets/about/profile.png';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ──────────────────────────────────── */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Small badge */}
          <span className="inline-block border border-[#ff2a2a] text-[#ff2a2a] rounded-full px-4 py-1 text-sm">
            About Me
          </span>
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            {aboutContent.heading}
          </h2>
        </div>

        {/* ── Two-column grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Portrait with decorative accent border */}
          <div
            className="relative max-w-sm mx-auto w-full"
            data-aos="fade-right"
          >
            {/* Profile image */}
            <img
              src={profileImg}
              alt="Shrilali M N Gowda — illustrated portrait"
              className="w-full rounded-2xl object-cover shadow-2xl relative z-10"
            />

            {/* Decorative offset red border sitting behind the image */}
            <div
              className="absolute inset-0 border-2 border-[#ff2a2a] rounded-2xl translate-x-3 translate-y-3 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* RIGHT — Bio text + tech stack badges */}
          <div data-aos="fade-left">

            {/* Bio — rendered from HTML string stored in portfolioData.
                [&>span]:!text-[#ff2a2a] overrides the inline text-black class so
                the name shows up in accent red on this dark background. */}
            <div
              className="text-white/90 leading-relaxed text-lg [&>span]:!text-[#ff2a2a] [&>span]:!bg-transparent"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            {/* ── Tech Stack badges ──────────────────────────── */}
            <div className="mt-8">
              <p className="text-white/50 text-sm uppercase tracking-widest mb-3">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.map((tech) => (
                  /* Hover: badge lights up in accent red */
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.08 }}
                    className="bg-white/10 hover:bg-[#ff2a2a] hover:text-white text-white/80 border border-white/20 rounded-lg px-4 py-2 text-sm font-medium transition cursor-default inline-block"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          {/* ── End right column ──────────────────────────────── */}

        </div>
      </div>
    </section>
  );
}
