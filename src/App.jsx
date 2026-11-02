// App.jsx — root component
// Renders all sections in the correct order.
// Preloader is self-contained (manages its own timer + exit animation).
// AOS is initialised once here; individual sections add data-aos attributes.

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// ── Layout ────────────────────────────────────────────────────
import Preloader      from './components/Preloader'        // self-contained, no props
import Navbar         from './components/Navbar'
import Footer         from './components/Footer'

// ── Sections (in page order) ──────────────────────────────────
import Hero           from './components/Hero'             // #home
import About          from './components/About'            // #about
import TechnicalSkills from './components/TechnicalSkills' // #skills
import Services       from './components/Services'         // #process (scroll-path)
import Projects       from './components/Projects'         // #projects
import Internships    from './components/Internships'      // work experience
import Leadership     from './components/Leadership'       // activities timeline
import SoftSkills     from './components/SoftSkills'       // white cards
import Contact        from './components/Contact'          // #contact

// ── Fluid cursor effect ───────────────────────────────────────
import SplashCursor   from './components/SplashCursor'

// ── Scroll-reveal wrapper ─────────────────────────────────────
import ScrollReveal   from './components/ScrollReveal'

export default function App() {
  // Initialise AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,   // each element animates in once; ScrollReveal handles re-play
      offset: 80,
    })
  }, [])

  return (
    <>
      {/* SplashCursor — WebGL fluid trail, pointer-events: none so links stay clickable */}
      <SplashCursor
        VELOCITY_DISSIPATION={3}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={18}
        COLOR="#ffffff"
        RAINBOW_MODE={false}
      />

      {/*
        Preloader sits at z-[100000] fixed — overlays the whole page.
        It fades/slides out after ~2.2 s on its own.
      */}
      <Preloader />

      {/* Navbar is sticky; always rendered beneath the preloader */}
      <Navbar />

      <main>
        {/* Hero — has its own AOS.init + staggered entrance, no ScrollReveal wrapper */}
        <Hero />

        {/* Every section below gets a fade+slide-up on scroll */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* TechnicalSkills — #skills */}
        <ScrollReveal delay={0.05}>
          <TechnicalSkills />
        </ScrollReveal>

        {/* Services — #process (scroll-driven path animation) */}
        <ScrollReveal delay={0.05}>
          <Services />
        </ScrollReveal>

        {/* Projects — #projects */}
        <ScrollReveal delay={0.05}>
          <Projects />
        </ScrollReveal>

        {/* Internships — bold red section */}
        <ScrollReveal delay={0.05}>
          <Internships />
        </ScrollReveal>

        {/* Leadership — dark section with vertical timeline */}
        <ScrollReveal delay={0.05}>
          <Leadership />
        </ScrollReveal>

        {/* SoftSkills — white section with light cards */}
        <ScrollReveal delay={0.05}>
          <SoftSkills />
        </ScrollReveal>

        {/* Contact — #contact, parallax + EmailJS form */}
        <ScrollReveal delay={0.05}>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  )
}
