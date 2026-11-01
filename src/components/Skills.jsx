// ============================================================
// Skills.jsx — Technical Skills section
// Reads all content from portfolioData.js (technicalSkills).
// Displays a responsive category grid on a near-black background.
// ============================================================

import { technicalSkills } from '../data/portfolioData.js';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    // Dark near-black background — contrasts with surrounding white sections
    <section id="skills" className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="text-center mb-16">
          {/* Outlined red badge pill */}
          <span className="border border-[#ff2a2a] text-[#ff2a2a] rounded-full px-4 py-1 text-sm inline-block">
            Technical Skills
          </span>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            My Toolkit
          </h2>

          {/* Subheading */}
          <p className="text-white/50 mt-3">
            Technologies I work with
          </p>
        </div>

        {/* ── Categories grid ────────────────────────────────── */}
        {/* 1 col → 2 col (sm) → 4 col (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.categories.map((category, index) => (
            <motion.div
              key={category.title}
              // AOS scroll animation with staggered delay per card
              data-aos="fade-up"
              data-aos-delay={index * 100}
              // Framer Motion hover lift
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="
                bg-black border border-white/10 hover:border-[#ff2a2a]/50
                rounded-2xl p-6 transition
              "
            >
              {/* Category title in red */}
              <h3 className="text-[#ff2a2a] font-bold text-lg mb-4 uppercase tracking-wide">
                {category.title}
              </h3>

              {/* Skills list — each skill is a pill/badge */}
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="
                      bg-white/5 hover:bg-[#ff2a2a]/10
                      text-white/80 border border-white/10
                      rounded-lg px-3 py-2 text-sm
                      block transition cursor-default
                    ">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
