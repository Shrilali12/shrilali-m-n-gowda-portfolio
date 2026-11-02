// TechnicalSkills.jsx
// Displays skill categories as cards, each with pill badges.
// Two sub-components live in this file: SkillBadge and SkillCard.

import { technicalSkills } from '../data/portfolioData.js';

// ── SkillBadge ────────────────────────────────────────────────
// A single rounded-pill badge for one skill name.
function SkillBadge({ name }) {
  return (
    <span
      className="inline-flex items-center
                 px-4 py-2 rounded-full
                 bg-white/5 border border-white/10
                 text-white text-sm font-medium
                 hover:bg-red-600/20 hover:border-red-500/30
                 transition-colors duration-200 cursor-default"
    >
      {name}
    </span>
  );
}

// ── SkillCard ─────────────────────────────────────────────────
// A frosted-glass card for one skill category.
function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md
                 border border-white/10 rounded-2xl p-6
                 hover:scale-[1.02] hover:border-red-500/30
                 hover:shadow-[0_0_30px_rgba(255,42,42,0.12)]
                 transition-all duration-300"
    >
      {/* Category title */}
      <h3
        className="uppercase font-black text-white text-sm tracking-widest
                   pb-3 mb-4 border-b border-white/10"
      >
        {category.title}
      </h3>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12
                 relative overflow-hidden"
    >
      {/* Blurred red glow circles — purely decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20
                   w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0
                   w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div
          data-aos="fade-up"
          className="text-center mb-14"
        >
          {/* Pill label */}
          <span
            className="inline-block border border-[#ff2a2a] text-[#ff2a2a]
                       rounded-full px-4 py-1 text-xs font-semibold
                       uppercase tracking-widest mb-5"
          >
            Technical Stack
          </span>

          <h2
            className="text-4xl md:text-5xl font-black text-white uppercase
                       leading-tight"
          >
            My Skillset
          </h2>

          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Technologies I use to design, build, and ship products end-to-end.
          </p>
        </div>

        {/* ── Skills grid ────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                     gap-6 md:gap-8"
        >
          {technicalSkills.categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
