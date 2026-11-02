// ============================================================
// Services.jsx  (the "How I Work / Process" section)
// Uses a scroll-driven animated SVG path to reveal process steps.
// Content comes entirely from portfolioData.js → skillsContent.
// ============================================================

import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsContent } from '../data/portfolioData.js';

// ── SVG path definitions ──────────────────────────────────────
// Desktop: a curving S-shaped line that weaves between the cards
const CURVE =
  'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200';

// Mobile: simple vertical line
const MLINE = 'M 2,0 L 2,100';

// ── Desktop / mobile card position config ─────────────────────
const CARD_POSITIONS = [
  {
    className:
      'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    aosType: 'fade-left',
    aosDelay: 100,
  },
  {
    className:
      'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    aosType: 'fade-right',
    aosDelay: 200,
  },
  {
    className:
      'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    aosType: 'fade-left',
    aosDelay: 300,
  },
  {
    className:
      'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
    aosType: 'fade-right',
    aosDelay: 400,
  },
];

// ── TagCard ───────────────────────────────────────────────────
// Activates (turns red) when the animated SVG path tip reaches it.
function TagCard({ card, className, aosDelay, aosType, pathLength, containerRef }) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // Watch pathLength (0 → 1) and flip isActive when the line tip
  // has scrolled past this card's vertical position inside the section.
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef.current || !cardRef.current) return;
    const containerH = containerRef.current.getBoundingClientRect().height;
    const cardTop = cardRef.current.offsetTop;

    // Activate when the scroll line tip has passed this card's position
    if (latest * containerH > cardTop + 50) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-colors duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_40px_rgba(255,42,42,0.4)]'
          : 'bg-white shadow-lg'
      } ${className}`}
    >
      {/* Punched hole at top */}
      <div className="flex justify-center mb-1">
        <div
          className={`w-6 h-6 rounded-full border-4 transition-colors duration-700 ${
            isActive
              ? 'border-red-700/60 bg-red-800/30'
              : 'border-gray-200 bg-gray-100'
          }`}
        />
      </div>

      {/* Inner content panel */}
      <div
        className={`rounded-[1.5rem] p-8 min-h-[220px] transition-colors duration-700 ${
          isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
        }`}
      >
        {/* Step number (large, faint) */}
        <p
          className={`text-5xl font-black italic mb-3 transition-colors duration-700 ${
            isActive ? 'text-white/30' : 'text-gray-200'
          }`}
        >
          {card.number}
        </p>

        {/* Step title */}
        <h3
          className={`text-2xl font-black mb-3 transition-colors duration-700 ${
            isActive ? 'text-white' : 'text-gray-900'
          }`}
        >
          {card.title}
        </h3>

        {/* Step description */}
        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-red-100' : 'text-gray-500'
          }`}
        >
          {card.text}
        </p>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────
export default function Services() {
  // Attach to the section so useScroll can measure scroll progress
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Spring-smooth the raw scroll progress for the SVG path animation
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right,#8080800a 1px,transparent 1px),linear-gradient(to bottom,#8080800a 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    >
      {/* ── Inner wrapper — fixed height on desktop for absolute positioning ── */}
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* ── Header block ──────────────────────────────────── */}
        <div
          data-aos="fade-up"
          className="relative md:absolute md:top-10 md:left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          {/* Badge pill */}
          <span className="inline-block bg-black text-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </span>

          {/* Heading + decorative arrow */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 mb-6">
              {skillsContent.heading}
            </h2>

            {/* Hand-drawn arrow SVG — purely decorative */}
            <svg
              className="absolute -bottom-4 -right-8 w-12 h-12 text-[#ff2a2a] rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4 Q 10 10 15 18 M 15 18 L 10 18 M 15 18 L 15 13"
              />
            </svg>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Desktop animated SVG path (3 layers) ─────────── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full pointer-events-none z-0"
          style={{ height: '1350px' }}
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Layer 1 — faint static guide dashes */}
          <path
            d={CURVE}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2 — mask driven by scroll progress */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={CURVE}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3 — real dashed path revealed by the mask */}
          <path
            d={CURVE}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile vertical animated line ─────────────────── */}
        <svg
          className="md:hidden absolute left-[50%] -translate-x-1/2 top-[180px] w-4 pointer-events-none z-0"
          style={{ height: 'calc(100% - 180px)' }}
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d={MLINE}
                fill="none"
                stroke="white"
                strokeWidth="4"
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </mask>
          </defs>

          {/* Faint guide line */}
          <path
            d={MLINE}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Revealed line */}
          <path
            d={MLINE}
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* ── Process cards ──────────────────────────────────── */}
        {/* On mobile: stacked column; on desktop: absolute positioned */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, i) => (
            <TagCard
              key={card.number}
              card={card}
              className={CARD_POSITIONS[i].className}
              aosType={CARD_POSITIONS[i].aosType}
              aosDelay={CARD_POSITIONS[i].aosDelay}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* ── End decorative text (desktop only) ─────────────── */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] rotate-6 select-none pointer-events-none">
          <span className="font-['Caveat',_cursive] text-3xl text-gray-600">
            {skillsContent.endText}
          </span>
        </div>
      </div>
    </section>
  );
}
