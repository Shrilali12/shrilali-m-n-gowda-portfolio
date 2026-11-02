# Shrilali M N Gowda — Portfolio

A single-page developer portfolio showcasing full-stack projects, skills, and experience built with React 19, Vite, and Tailwind CSS 4.

**Live site:** https://shrilali-m-n-gowda-portfolio.vercel.app

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 (plain JSX) |
| Build tool | Vite |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion, AOS |
| Contact form | EmailJS |
| Cursor effect | WebGL (SplashCursor) |

---

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build
```

---

## Environment Variables

Create a `.env.local` file in the project root (it is git-ignored) with the following keys:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these variables are absent the contact form falls back to opening the visitor's mail client.

---

## Credits

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
