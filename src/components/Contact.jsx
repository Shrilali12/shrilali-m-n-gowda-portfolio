// Contact.jsx
// EmailJS-powered contact form section — id="contact"
// Imports all content from portfolioData.js; no hard-coded personal data.

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { personalInfo, emailjsConfig } from '../data/portfolioData.js';

export default function Contact() {
  // ── form field state ───────────────────────────────────────
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');

  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  // EmailJS needs a ref to the <form> element
  const formRef = useRef(null);

  // ── shared input class ─────────────────────────────────────
  const inputClass =
    'bg-black border border-white/10 focus:border-[#ff2a2a] text-white ' +
    'rounded-lg px-4 py-3 w-full outline-none transition placeholder-white/30';

  // ── submit handler ─────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      setStatus('success');

      // Reset fields after 4 seconds
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('idle');
      }, 4000);
    } catch {
      setStatus('error');
    }
  };

  // ── contact info cards data ────────────────────────────────
  const infoCards = [
    {
      icon: '📧',
      label: 'Email',
      value: personalInfo.emails.primary,
      href: `mailto:${personalInfo.emails.primary}`,
    },
    {
      icon: '📱',
      label: 'Phone',
      value: personalInfo.phone,
      href: null,
    },
    {
      icon: '📍',
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Section header ─────────────────────────────── */}
        <div className="text-center mb-12">
          {/* Badge */}
          <span className="border border-[#ff2a2a] text-[#ff2a2a] rounded-full px-4 py-1 text-sm inline-block">
            Get In Touch
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Let's Work Together
          </h2>

          {/* Subtext */}
          <p className="text-white/60 mt-3">
            Have a project in mind or want to hire me? Drop me a message.
          </p>
        </div>

        {/* ── Two-column grid ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

          {/* ── LEFT: contact info cards ─────────────────── */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card) => (
              <motion.div
                key={card.label}
                whileHover={{ scale: 1.02 }}
                className="bg-black border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-[#ff2a2a]/40 transition"
              >
                {/* Icon */}
                <span className="text-3xl">{card.icon}</span>

                {/* Label + value */}
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    {card.label}
                  </p>

                  {/* Render as a clickable mailto link if href is provided */}
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-white font-medium hover:text-[#ff2a2a] transition text-sm break-all"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{card.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── RIGHT: EmailJS form ───────────────────────── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Name field */}
            <div className="flex flex-col gap-1">
              <label className="text-white/60 text-sm">Your Name</label>
              <input
                type="text"
                name="from_name"          /* EmailJS template variable */
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-1">
              <label className="text-white/60 text-sm">Your Email</label>
              <input
                type="email"
                name="from_email"         /* EmailJS template variable */
                required
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-1">
              <label className="text-white/60 text-sm">Message</label>
              <textarea
                name="message"            /* EmailJS template variable */
                rows={5}
                required
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status !== 'sending' ? 1.02 : 1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ff2a2a] hover:bg-[#cc0000] text-white w-full py-3 rounded-lg font-bold transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </motion.button>

            {/* Success message */}
            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent! I'll reply soon.
              </p>
            )}

            {/* Error message */}
            {status === 'error' && (
              <p className="text-[#ff2a2a] text-sm text-center">
                ❌ Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
