// ============================================================
// SoftSkills.jsx
// Displays soft / professional skills from portfolioData.js.
// WHITE section with faint grid background and torn-paper divider.
// ============================================================

import { softSkillsList } from '../data/portfolioData.js';

// ── Individual skill card ─────────────────────────────────────
function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] flex flex-col items-center text-center hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(255,42,42,0.15)] transition-all duration-300"
    >
      {/* Emoji icon container */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-2xl mb-5 group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300 shadow-sm">
        {skill.icon}
      </div>

      {/* Skill name */}
      <p className="uppercase font-black text-gray-900 text-sm tracking-wide mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300">
        {skill.name}
      </p>

      {/* Short description */}
      <p className="text-gray-500 text-xs leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────
export default function SoftSkills() {
  return (
    <section
      id="softskills"
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right,#80808006 1px,transparent 1px),linear-gradient(to bottom,#80808006 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      {/* ── Torn-paper SVG divider (dark section above) ─────── */}
      {/* rotate-180 flips it so the jagged edge faces down into this section */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[1px]"
      >
        <svg
          className="relative block h-12 md:h-20 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 L0,40 Q30,60 60,30 Q90,0 120,35 Q150,65 180,25 Q210,0 240,40 Q270,75 300,35 Q330,5 360,45 Q390,80 420,38 Q450,5 480,42 Q510,75 540,30 Q570,0 600,38 Q630,72 660,28 Q690,0 720,40 Q750,78 780,35 Q810,5 840,42 Q870,76 900,32 Q930,0 960,40 Q990,74 1020,28 Q1050,0 1080,38 Q1110,72 1140,30 Q1170,0 1200,42 L1200,80 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      {/* ── Section header ────────────────────────────────────── */}
      <div className="text-center mb-14 relative z-10" data-aos="fade-up">
        {/* Pill label */}
        <span className="inline-block border border-[#ff2a2a] text-[#ff2a2a] rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-5">
          Core Competencies
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900">
          Professional Soft Skills
        </h2>

        {/* Sub-description */}
        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
          Human skills that complement technical ability — the foundation of effective collaboration and problem solving.
        </p>
      </div>

      {/* ── Skills grid ───────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {softSkillsList.map((skill, index) => (
          <SoftSkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
