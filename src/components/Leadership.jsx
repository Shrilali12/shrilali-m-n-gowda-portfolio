// Leadership.jsx
// Activities & leadership section with an alternating vertical timeline.
//
// Layout:
//   Mobile  — single column; line fixed at left-4; cards sit right of line.
//   md+     — zigzag: even-index cards LEFT (fade-right), odd-index RIGHT (fade-left);
//             the gradient line runs down the centre; a glowing dot sits on it.

import { leadershipList } from '../data/portfolioData.js';

// ── LeadershipItem ────────────────────────────────────────────
function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0; // left on md+ when even, right when odd

  return (
    <div className="relative flex items-center mb-12 last:mb-0">

      {/* ── Glowing dot on the timeline line ─────────────────
          Mobile: fixed at left-4.
          md+:    centred (left-1/2, -translate-x-1/2).          */}
      <div
        aria-hidden="true"
        className="absolute left-4 md:left-1/2 md:-translate-x-1/2
                   w-4 h-4 rounded-full
                   bg-[#ff2a2a] border-2 border-[#0a0a0a]
                   shadow-[0_0_14px_4px_rgba(255,42,42,0.55)]
                   z-10 shrink-0"
      />

      {/* ── Card wrapper
          Mobile:  full width, padded left so it clears the dot.
          md even: 45% width, pushed to the LEFT with mr-auto + right padding.
          md odd:  45% width, pushed to the RIGHT with ml-auto + left padding. */}
      <div
        data-aos={isEven ? 'fade-right' : 'fade-left'}
        data-aos-delay={index * 120}
        className={[
          // mobile: full width, left-padded past the dot
          'w-full pl-12',
          // md+: half-width card
          'md:w-[45%]',
          isEven
            ? 'md:mr-auto md:ml-0 md:pr-10 md:pl-0 md:text-right'
            : 'md:ml-auto md:mr-0 md:pl-10 md:pr-0 md:text-left',
        ].join(' ')}
      >
        <div
          className="bg-white/5 backdrop-blur-md border border-white/10
                     rounded-2xl p-6
                     hover:border-[#ff2a2a]/30
                     hover:shadow-[0_0_24px_rgba(255,42,42,0.08)]
                     transition-all duration-300"
        >
          {/* Badge pill */}
          {item.badge && (
            <span
              className={[
                'inline-block mb-3 px-3 py-1 rounded-full',
                'bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20',
                'text-[10px] font-bold uppercase tracking-widest',
                isEven ? 'md:float-right md:ml-3' : '',
              ].join(' ')}
            >
              {item.badge}
            </span>
          )}

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-black text-white
                       hover:text-[#ff2a2a] transition-colors duration-200
                       leading-snug clear-both"
          >
            {item.title}
          </h3>

          {/* Role */}
          <p
            className="mt-1 font-mono text-xs uppercase tracking-widest
                       text-red-400"
          >
            {item.role}
          </p>

          {/* Description */}
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function Leadership() {
  return (
    <section
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        /* Same faint 80px grid as the Projects section */
        backgroundImage: `
          linear-gradient(to right,  #8080800a 1px, transparent 1px),
          linear-gradient(to bottom, #8080800a 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      {/* ── Torn-paper divider — top edge ─────────────────────
          fill-[#ff2a2a] matches the Internships section above.
          rotate-180 flips the wave so teeth point into this section. */}
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
            fill="#ff2a2a"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span
            className="inline-block border border-[#ff2a2a] text-[#ff2a2a]
                       rounded-full px-4 py-1 text-xs font-semibold
                       uppercase tracking-widest mb-5"
          >
            Activities
          </span>

          <h2
            className="text-4xl md:text-5xl font-black uppercase
                       text-white leading-tight"
          >
            Leadership &amp; Engagement
          </h2>

          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Beyond the keyboard — how I contribute, compete, and connect.
          </p>
        </div>

        {/* ── Timeline ──────────────────────────────────────────
            The gradient line runs top→bottom.
            Mobile: left-4. md+: left-1/2 (centre).               */}
        <div className="relative">

          {/* Vertical gradient line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0
                       left-4 md:left-1/2 md:-translate-x-px
                       w-0.5
                       bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10"
          />

          {/* Timeline items */}
          {leadershipList.map((item, index) => (
            <LeadershipItem
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
