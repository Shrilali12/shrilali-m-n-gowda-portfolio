// Footer.jsx
// Site footer: brand, taglines, credential, social links, TAP Academy credit, copyright.

import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData.js';

// ── Simple SVG icons for GitHub and LinkedIn ──────────────────
function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2.03c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.42.36.79 1.07.79 2.15v3.19c0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

// ── Social icon button wrapper ────────────────────────────────
function SocialButton({ href, label, children }) {
  if (!href || href.trim() === '') return null; // hide if link is empty
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded border border-white/20 text-white/70 hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-all duration-200"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  // Split brand name: first letter red, rest white
  const [firstChar, ...restChars] = personalInfo.brandName;
  const brandRest = restChars.join('');

  return (
    <footer
      id="footer"
      className="bg-black text-white border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">

        {/* ── 1. Brand heading ── */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="text-[#ff2a2a]">{firstChar}</span>
          <span className="text-white">{brandRest}</span>
        </h2>

        {/* ── 2. Taglines ── */}
        <p className="text-white/60 text-sm sm:text-base">
          {footerContent.taglines.map((tagline, i) => (
            <span key={i}>
              {tagline}
              {i < footerContent.taglines.length - 1 && (
                <span className="mx-2 text-white/30">·</span>
              )}
            </span>
          ))}
        </p>

        {/* ── 3. Credential ── */}
        <p className="text-white/40 text-xs tracking-wide uppercase">
          {footerContent.credential}
        </p>

        {/* ── 4. Social icons ── */}
        <div className="flex items-center gap-3">
          <SocialButton href={socialLinks.github} label="GitHub profile">
            <GithubIcon />
          </SocialButton>
          <SocialButton href={socialLinks.linkedin} label="LinkedIn profile">
            <LinkedinIcon />
          </SocialButton>
          {/* Instagram — only shown if non-empty (hidden by default per portfolioData) */}
          {socialLinks.instagram && socialLinks.instagram.trim() !== '' && (
            <SocialButton href={socialLinks.instagram} label="Instagram profile">
              {/* Simple text fallback icon */}
              <span className="text-xs font-bold">IG</span>
            </SocialButton>
          )}
        </div>

        {/* ── 5. TAP Academy credit ── */}
        <p className="text-sm text-white/50">
          Trained at{' '}
          <a
            href={academy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff2a2a] hover:underline font-medium"
          >
            {academy.name}
          </a>
        </p>

        {/* ── Divider ── */}
        <div className="w-full border-t border-white/10" />

        {/* ── 6. Copyright ── */}
        <p className="text-white/50 text-sm">{footerContent.copyright}</p>
      </div>
    </footer>
  );
}
