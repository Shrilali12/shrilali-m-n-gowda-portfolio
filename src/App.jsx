// App.jsx — root component
// Composes all sections in order and initialises AOS scroll animations.
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

// ── Layout ───────────────────────────────────────────────────
import Preloader  from './components/Preloader'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'

// ── Sections ─────────────────────────────────────────────────
import Hero       from './components/Hero'
import About      from './components/About'
import Process    from './components/Process'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import SoftSkills from './components/SoftSkills'
import Leadership from './components/Leadership'
import Contact    from './components/Contact'

export default function App() {
  // Show the preloader until it signals completion
  const [showPreloader, setShowPreloader] = useState(true)

  // Initialise AOS once the preloader is gone
  useEffect(() => {
    if (!showPreloader) {
      AOS.init({
        duration: 700,   // ms per animation
        once: true,      // animate each element only once
        offset: 80,      // px from bottom of viewport before triggering
      })
    }
  }, [showPreloader])

  return (
    <>
      {/* Preloader — AnimatePresence handles the exit animation */}
      <AnimatePresence>
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      {/* Main site — rendered beneath the preloader so AOS is ready */}
      {!showPreloader && (
        <div className="min-h-screen bg-black text-white">
          <Navbar />

          <main>
            {/* ── #home ── */}
            <Hero />

            {/* ── #about ── */}
            <About />

            {/* ── #process ── How I Work */}
            <Process />

            {/* ── #skills ── Technical Skills */}
            <Skills />

            {/* ── #projects ── */}
            <Projects />

            {/* ── Experience / Internships ── */}
            <Experience />

            {/* ── Soft Skills ── */}
            <SoftSkills />

            {/* ── Activities & Leadership ── */}
            <Leadership />

            {/* ── #contact ── */}
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  )
}
