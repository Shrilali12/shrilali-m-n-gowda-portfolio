// Contact section — EmailJS form with mailto fallback and parallax background word
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData.js';

export default function Contact() {
  // Refs for the section element and the form element
  const ref = useRef(null);
  const formRef = useRef(null);

  // Status can be: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  // Parallax: track scroll progress on this section
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  // Handle form submission — EmailJS or mailto fallback
  function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    // Grab field values
    const firstName = formRef.current.querySelector('#firstName').value.trim();
    const lastName  = formRef.current.querySelector('#lastName').value.trim();
    const email     = formRef.current.querySelector('#email').value.trim();
    const message   = formRef.current.querySelector('#message').value.trim();

    // Basic validation
    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;

    // Check whether EmailJS has been configured with real values
    const isConfigured =
      serviceId && templateId && publicKey &&
      serviceId  !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey  !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      // Fallback: open the user's mail client with pre-filled details
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`,
        '_blank'
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // EmailJS path — async IIFE so we can use await without making handleSubmit async
    (async () => {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus('success');
        formRef.current.reset();
      } catch (err) {
        console.error(err);
        setStatus('error');
      } finally {
        setTimeout(() => setStatus('idle'), 4000);
      }
    })();
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Giant parallax "Contact" word — purely decorative background ── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none text-white/[0.03]"
          style={{
            transform: 'scaleY(1.6)',
            transformOrigin: 'top',
            fontFamily: "'Impact','Arial Black',sans-serif",
          }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red card — right-aligned ── */}
      <div className="relative z-10 w-full flex justify-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16"
        >
          {/* Card header row */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-semibold">
              Reach Me
            </span>

            {/* DM on Instagram pill — only rendered when instagram link exists */}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-white/10 border border-white/20 text-white text-xs font-semibold
                           hover:bg-white/20 transition"
              >
                {/* Instagram icon */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                DM on Instagram
              </a>
            )}
          </div>

          {/* ── Contact form ── */}
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

              {/* LEFT column — text inputs */}
              <div className="flex flex-col gap-8">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    required
                    placeholder="Shrilali"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-white text-lg placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="M N Gowda"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-white text-lg placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-white text-lg placeholder-white/30 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* RIGHT column — message textarea */}
              <div>
                <label htmlFor="message" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-white text-lg placeholder-white/30 focus:border-white focus:outline-none transition-colors resize-none min-h-[120px]"
                />
              </div>
            </div>

            {/* Permission checkbox */}
            <div className="flex items-start gap-3 mb-6">
              <input
                id="permission"
                type="checkbox"
                required
                className="mt-1 accent-black w-4 h-4 shrink-0"
              />
              <label htmlFor="permission" className="text-white/70 text-sm leading-relaxed">
                I agree to let Shrilali contact me regarding this message.
              </label>
            </div>

            {/* Response time note + direct email link */}
            <p className="text-white/50 text-xs mb-6 leading-relaxed">
              Your message will be sent directly to my inbox. I typically respond within 24–48 hours.{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline hover:text-white transition"
              >
                Or email me directly ↗
              </a>
            </p>

            {/* Submit button — appearance changes based on current status */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={[
                  'group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2',
                  'font-semibold text-sm tracking-wide',
                  'transition-all duration-300',
                  status === 'sending'
                    ? 'border-white/30 text-white/50 cursor-not-allowed bg-transparent'
                    : status === 'success'
                      ? 'border-green-400 text-green-400 bg-transparent'
                      : status === 'error'
                        ? 'border-red-900 text-red-900 bg-red-950/30'
                        : 'border-white text-[#ff2a2a] bg-white hover:bg-transparent hover:text-white',
                ].join(' ')}
              >
                {/* Spinner icon — shown while sending */}
                {status === 'sending' && (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                )}

                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Sent Successfully ✓'}
                {status === 'error'   && 'Failed — Try Again'}
                {status === 'idle'    && (
                  <>
                    Send Message
                    {/* Arrow icon with hover slide animation */}
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
