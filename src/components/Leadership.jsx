// Leadership.jsx
// Activities & leadership section — placed after SoftSkills.
// All content comes from portfolioData.js (leadershipList).

import { leadershipList } from '../data/portfolioData.js';

export default function Leadership() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* ── Section header ─────────────────────────────── */}
        <div className="text-center mb-12">
          {/* Badge */}
          <span className="border border-[#ff2a2a] text-[#ff2a2a] rounded-full px-4 py-1 text-sm inline-block">
            Activities
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-black text-white mt-4">
            Beyond the Code
          </h2>
        </div>

        {/* ── Leadership / activity cards ───────────────── */}
        <div className="flex flex-col gap-8">
          {leadershipList.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-[#0a0a0a] border border-white/10 hover:border-[#ff2a2a]/40 rounded-2xl p-8 transition"
            >
              {/* ── Top row: title + badge pill ─────────── */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                {/* Title */}
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Badge pill */}
                <span className="bg-[#ff2a2a] text-white rounded-full px-3 py-1 text-xs font-bold">
                  {item.badge}
                </span>
              </div>

              {/* Role */}
              <p className="text-[#ff2a2a] text-sm font-semibold mt-1">
                {item.role}
              </p>

              {/* Description */}
              <p className="text-white/70 leading-relaxed mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
