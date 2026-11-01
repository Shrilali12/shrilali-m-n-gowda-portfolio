// Experience.jsx
// Internship / work-experience section — placed between Projects and Contact.
// All content comes from portfolioData.js (internshipsList).

import { internshipsList } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* ── Section header ─────────────────────────────── */}
        <div className="text-center mb-12">
          {/* Badge */}
          <span className="bg-[#ff2a2a] text-white rounded-full px-4 py-1 text-sm font-semibold inline-block">
            Experience
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-black text-black mt-4">
            Where I've Worked
          </h2>
        </div>

        {/* ── Internship cards ──────────────────────────── */}
        <div className="flex flex-col gap-8">
          {internshipsList.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-[#0a0a0a] text-white rounded-2xl p-8 border-l-4 border-[#ff2a2a]"
            >
              {/* ── Row 1: org, role, duration ────────────── */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <div>
                  {/* Organisation name */}
                  <h3 className="text-2xl font-black text-white">
                    {item.organization}
                  </h3>

                  {/* Role */}
                  <p className="text-[#ff2a2a] font-semibold mt-1">
                    {item.role}
                  </p>
                </div>

                {/* Duration badge */}
                <span className="text-white/50 text-sm self-start sm:self-center">
                  {item.duration}
                </span>
              </div>

              {/* ── Skills gained ────────────────────────── */}
              {item.skills && item.skills.length > 0 && (
                <div className="mb-4">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                    Skills Gained
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/10 text-white/80 rounded px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Technologies ─────────────────────────── */}
              {item.tech && item.tech.length > 0 && (
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20 rounded px-3 py-1 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
