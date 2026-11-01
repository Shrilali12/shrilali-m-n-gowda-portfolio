// SoftSkills.jsx
// Soft skills section — placed between Experience and Leadership.
// All content comes from portfolioData.js (softSkillsList).

import { softSkillsList } from '../data/portfolioData.js';

export default function SoftSkills() {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────── */}
        <div className="text-center mb-12">
          {/* Badge */}
          <span className="border border-[#ff2a2a] text-[#ff2a2a] rounded-full px-4 py-1 text-sm inline-block">
            Soft Skills
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-black text-white mt-4">
            How I Work With People
          </h2>
        </div>

        {/* ── Skill cards grid ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {softSkillsList.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}          /* staggered entrance */
              className="bg-black border border-white/10 hover:border-[#ff2a2a]/40 rounded-2xl p-6 transition group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{skill.icon}</div>

              {/* Skill name — turns red on card hover via group-hover */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#ff2a2a] transition mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
