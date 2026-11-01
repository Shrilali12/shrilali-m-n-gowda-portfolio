// ============================================================
// Projects.jsx — Project Showcase section
// Reads all content from portfolioData.js (projects array).
// Each project is a large card; flagship projects have a red left border.
// ============================================================

import { projects } from '../data/portfolioData.js';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    // Pure black background
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="text-center mb-16">
          {/* Outlined red badge pill */}
          <span className="border border-[#ff2a2a] text-[#ff2a2a] rounded-full px-4 py-1 text-sm inline-block">
            My Work
          </span>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Projects I've Built
          </h2>
        </div>

        {/* ── Projects list ──────────────────────────────────── */}
        <div>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              // AOS scroll fade-up animation
              data-aos="fade-up"
              // Framer Motion subtle hover lift
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className={`
                mb-8
                bg-[#0a0a0a] border border-white/10 hover:border-[#ff2a2a]/40
                rounded-2xl p-8 md:p-10
                transition-all duration-300 group
                ${project.isFlagship ? 'border-l-4 border-l-[#ff2a2a]' : ''}
              `}
            >
              {/* Inner layout: number on the left, content on the right */}
              <div className="flex flex-col md:flex-row md:items-start gap-8">

                {/* ── Left: large decorative project number ──── */}
                <div
                  className="
                    text-8xl font-black text-white/5
                    group-hover:text-[#ff2a2a]/10 transition
                    leading-none select-none
                    shrink-0
                  "
                  aria-hidden="true"
                >
                  {project.number}
                </div>

                {/* ── Right: project details ───────────────────── */}
                <div className="flex-1">

                  {/* Badge pill — only shown when project.badge is truthy */}
                  {project.badge && (
                    <span className="
                      bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20
                      rounded-full px-3 py-1 text-xs font-semibold mb-4 inline-block
                    ">
                      {project.badge}
                    </span>
                  )}

                  {/* Project title */}
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-white/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-white/80 rounded-lg px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ── Links row ─────────────────────────────── */}
                  <div className="flex flex-wrap items-center gap-6">

                    {/* GitHub link — only rendered when the value is a non-empty string */}
                    {project.links.github && project.links.github.trim() !== '' && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff2a2a] hover:underline font-semibold"
                      >
                        View on GitHub →
                      </a>
                    )}

                    {/* Live demo link OR "Demo Coming Soon" placeholder */}
                    {project.links.demo && project.links.demo.trim() !== '' ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff2a2a] hover:underline font-semibold"
                      >
                        Live Demo →
                      </a>
                    ) : (
                      <span className="text-white/30 text-sm">
                        Demo Coming Soon
                      </span>
                    )}

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
