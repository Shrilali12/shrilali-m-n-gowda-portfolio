// Internships.jsx
// Work-experience section on a bold #ff2a2a red background.
// A torn-paper SVG divider at the top makes the dark previous section
// "bleed" into the red one. Each card shows role, org, skills and tech.

import { internshipsList } from '../data/portfolioData.js';

// ── InternshipCard ────────────────────────────────────────────
function InternshipCard({ intern, index }) {
  const { organization, role, duration, skills, tech } = intern;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10
                 rounded-3xl p-8
                 hover:scale-[1.02] transition-transform duration-300
                 flex flex-col gap-5"
    >
      {/* ── Top row: duration + "Internship" badge ── */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="font-mono text-white/40 text-xs uppercase tracking-widest">
          {duration}
        </span>
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase
                     tracking-widest bg-black/30 text-white/60
                     border border-white/10"
        >
          Internship
        </span>
      </div>

      {/* ── Role & organisation ── */}
      <div>
        <h3 className="text-2xl font-black text-white leading-tight">
          {role}
        </h3>
        <p className="mt-1 text-red-200 uppercase text-sm font-semibold tracking-wide">
          {organization}
        </p>
      </div>

      {/* ── Skills gained ── */}
      {skills && skills.length > 0 && (
        <div className="flex-1">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2 font-semibold">
            Skills Gained
          </p>
          <ul className="space-y-1">
            {skills.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 text-white/80 text-sm"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Technologies row (border-t) ── */}
      {tech && tech.length > 0 && (
        <div className="border-t border-white/10 pt-4">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-semibold">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1 rounded-full
                           bg-black/30 border border-white/10 text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function Internships() {
  return (
    <section
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12
                 relative overflow-hidden"
    >
      {/* ── Torn-paper SVG divider — top edge ─────────────────
          fill-[#0a0a0a] matches the section above; rotate-180
          flips the wave so the "teeth" point downward into red. */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full overflow-hidden
                   leading-none rotate-180 -translate-y-[1px]"
      >
        <svg
          className="relative block h-12 md:h-20 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          {/* Jagged / torn-paper path */}
          <path
            d="
              M0,80 L0,40
              Q30,60  60,30
              Q90,0   120,35
              Q150,65 180,25
              Q210,0  240,40
              Q270,75 300,35
              Q330,5  360,45
              Q390,80 420,38
              Q450,5  480,42
              Q510,75 540,30
              Q570,0  600,38
              Q630,72 660,28
              Q690,0  720,40
              Q750,78 780,35
              Q810,5  840,42
              Q870,76 900,32
              Q930,0  960,40
              Q990,74 1020,28
              Q1050,0 1080,38
              Q1110,72 1140,30
              Q1170,0 1200,42
              L1200,80 Z
            "
            fill="#0a0a0a"
          />
        </svg>
      </div>

      {/* ── Decorative pulsing ★ — bottom-left ────────────────── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-8
                   text-black/20 text-[9rem] leading-none
                   animate-pulse select-none"
      >
        ★
      </span>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div data-aos="fade-up" className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-black uppercase
                       text-black leading-tight tracking-tight"
          >
            Work Experience
          </h2>
          <p className="mt-4 text-red-100 text-base max-w-xl mx-auto">
            Hands-on industry exposure that shaped how I think, build, and collaborate.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={intern.organization + intern.role}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
