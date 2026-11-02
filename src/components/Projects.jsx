// Projects.jsx
// Showcases portfolio projects with gradient-border cards and interactive links.
// Sub-components: GitHubIcon, ExternalLinkIcon, ProjectCard.

import { projects, socialLinks } from '../data/portfolioData.js';

// ── Inline SVG icons ──────────────────────────────────────────

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4
           M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

// ── ProjectCard ───────────────────────────────────────────────
// Outer div = 1 px gradient border wrapper; inner div = dark panel.
function ProjectCard({ project, aosDelay }) {
  const { badge, number, title, description, techTags, links, isFlagship } = project;

  // Gradient border class — brighter red for flagship, subtle for others
  const borderClass = isFlagship
    ? `bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30
       hover:from-red-500/70 hover:to-red-500/50`
    : `bg-white/10 hover:bg-white/20`;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${borderClass}`}
    >
      {/* ── Inner dark panel ─────────────────────────────────── */}
      <div
        className="rounded-2xl p-6 md:p-8 backdrop-blur-md h-full
                   bg-[#111111]/90"
      >

        {/* Optional badge pill */}
        {badge && (
          <span
            className="inline-block mb-4 px-3 py-1 rounded-full
                       bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20
                       text-xs font-bold uppercase tracking-widest"
          >
            {badge}
          </span>
        )}

        {/* Number + Title row */}
        <div className="flex items-start gap-4 mb-4">
          {/* Big faint number */}
          <span
            className="text-5xl font-black text-white/10 leading-none
                       select-none shrink-0"
          >
            {number}
          </span>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-white/60 leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech tag pills */}
        <div className="flex flex-wrap gap-2 mb-7">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-bold
                         bg-white/5 border border-white/10 text-white/70
                         hover:bg-[#ff2a2a]/20 hover:text-[#ff2a2a]
                         hover:border-[#ff2a2a]/30
                         transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3">

          {/* GitHub link — only when truthy */}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         px-5 py-2.5 rounded-lg
                         border border-white/20 text-white/80 text-sm font-semibold
                         hover:border-white hover:text-white
                         transition-all duration-200"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}

          {/* Demo button */}
          {links.demo ? (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         px-5 py-2.5 rounded-lg
                         bg-[#ff2a2a] hover:bg-[#cc0000] text-white text-sm font-semibold
                         transition-colors duration-200"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2
                         px-5 py-2.5 rounded-lg
                         border border-white/10 text-white/30 text-sm font-semibold
                         cursor-not-allowed select-none"
            >
              Demo Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative"
      style={{
        backgroundImage: `
          linear-gradient(to right,  #8080800a 1px, transparent 1px),
          linear-gradient(to bottom, #8080800a 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      <div className="relative max-w-4xl mx-auto">

        {/* ── Section header ───────────────────────────────── */}
        <div data-aos="fade-up" className="text-center mb-14">
          {/* Pill label */}
          <span
            className="inline-block border border-[#ff2a2a] text-[#ff2a2a]
                       rounded-full px-4 py-1 text-xs font-semibold
                       uppercase tracking-widest mb-5"
          >
            Featured Projects
          </span>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black
                       text-white leading-tight"
          >
            Work that speaks
            <br />
            <span className="text-[#ff2a2a]">for itself</span>
          </h2>

          <p className="mt-5 text-white/50 max-w-lg mx-auto text-base">
            Real projects built to solve real problems — from concept to deployment.
          </p>
        </div>

        {/* ── Project cards ────────────────────────────────── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* ── "Explore All Repositories" button ───────────── */}
        {socialLinks.github && (
          <div data-aos="fade-up" className="mt-14 text-center">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3
                         px-7 py-3.5 rounded-full
                         border border-white/20 text-white/80 font-semibold text-sm
                         hover:border-[#ff2a2a] hover:text-white
                         hover:shadow-[0_0_20px_rgba(255,42,42,0.15)]
                         transition-all duration-300"
            >
              <GitHubIcon className="w-5 h-5" />
              Explore All My Repositories
              {/* Arrow */}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
