// Navbar.jsx
// Sticky navigation bar with scroll-aware background, active-section highlighting,
// and a mobile hamburger menu animated with Framer Motion.

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData.js';

// ── Navigation links definition ───────────────────────────────
const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Process',  href: '#process'  },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

// Derive the section id from a href string, e.g. "#about" → "about"
const hrefToId = (href) => href.replace('#', '');

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);  // true when page scrolled > 50px
  const [activeSection, setActiveSection] = useState('home'); // which section is in view
  const [menuOpen,      setMenuOpen]      = useState(false);  // mobile hamburger toggle

  // ── 1. Track scroll position to switch navbar background ────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── 2. IntersectionObserver — highlight active nav link ──────
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => hrefToId(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Fire when the section occupies at least 30% of the viewport
        threshold: 0.3,
        // Shrink the observation area from the top so the navbar doesn't interfere
        rootMargin: '-60px 0px -30% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── 3. Close mobile menu on ESC key ─────────────────────────
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // ── Logo: first letter in red, rest in white ─────────────────
  const [firstChar, ...restChars] = personalInfo.brandName;
  const logoRest = restChars.join('');

  // Helper — close menu then navigate (smooth scroll handled by CSS)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo / Brand name ── */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
          onClick={handleNavClick}
          aria-label="Go to top"
        >
          <span className="text-[#ff2a2a]">{firstChar}</span>
          <span className="text-white">{logoRest}</span>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === hrefToId(href);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={[
                    'relative text-sm font-medium transition-colors duration-200 group',
                    isActive ? 'text-[#ff2a2a]' : 'text-white/80 hover:text-[#ff2a2a]',
                  ].join(' ')}
                >
                  {label}
                  {/* Underline slide-in on hover / active */}
                  <span
                    className={[
                      'absolute -bottom-0.5 left-0 h-[2px] bg-[#ff2a2a] transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full',
                    ].join(' ')}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Mobile hamburger button ── */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full origin-center"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full origin-center"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col px-6 py-4 gap-5">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = activeSection === hrefToId(href);
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={handleNavClick}
                      className={[
                        'block text-base font-medium transition-colors duration-200',
                        isActive
                          ? 'text-[#ff2a2a]'
                          : 'text-white/80 hover:text-[#ff2a2a]',
                      ].join(' ')}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
