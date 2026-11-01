// ============================================================
// portfolioData.js
// This ONE file controls ALL the text and links on the website.
// Edit values here — components import them automatically.
// ============================================================

// ── Personal info ────────────────────────────────────────────
export const personalInfo = {
  name: "Shrilali M N Gowda",
  firstName: "Shrilali",
  brandName: "Shrilali M N Gowda",      // shown in preloader, navbar, footer
  title: "Full Stack Intern",
  location: "Bengaluru, India",
  phone: "+91 6362101816",
  emails: {
    primary: "shrilalinatesh@gmail.com",
    secondary: "",
  },
  summary:
    "A BCA graduate with 9.05 CGPA and an innovative thinker who built the Wild Health project to digitize wild animal health records.",
  resumeUrl: "/shrilaliresume-1",        // place the PDF in /public
};

// ── TAP Academy credit (footer) ──────────────────────────────
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

// ── Social links ─────────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/Shrilali12",
  linkedin: "https://www.linkedin.com/in/shrilali-m-n-gowda/",
  instagram: "",                          // not provided — hidden by components
};

// ── Hero section ─────────────────────────────────────────────
export const heroContent = {
  greeting: "Hi, I'm Shrilali",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I build clean, scalable web solutions — from intuitive front-ends to robust back-end systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:shrilalinatesh@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/shrilaliresume-1" },
};

// ── About section ─────────────────────────────────────────────
export const aboutContent = {
  heading: "Hello!",
  // Rendered with dangerouslySetInnerHTML — only your own trusted text here.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shrilali M N Gowda</span>,
  a BCA graduate from MES MSPS First Grade College, Chikkamagalur, with a 9.05 CGPA.
  I am an innovative thinker with a curiosity about how things work — during my final year I built
  <strong>Wild Health</strong>, a website that digitizes wild animal health records to help
  veterinary doctors and forest staff monitor them easily.
  I am passionate about learning new technologies and building solutions that create real-world impact,
  and I am currently sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Java", "JavaScript", "React", "Spring Boot", "MySQL"],
};

// ── Skills / Process section ──────────────────────────────────
export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured, curious approach — from understanding the problem to shipping a clean solution.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem deeply — exploring user needs, studying similar solutions, and mapping out the requirements before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design",
      text: "I plan the database schema, sketch the UI flow, and decide on the tech stack so that the architecture is solid before development begins.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build iteratively — writing clean, commented code across the full stack (HTML/CSS/JS front-end, Java/Spring Boot back-end, MySQL database) and testing each feature as I go.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I use Git for version control, review the final build for bugs and responsiveness, then ship the project — ready to gather feedback and iterate.",
    },
  ],
  endText: "Ready to ship!",
};

// ── Technical skills ──────────────────────────────────────────
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" },
        { name: "Spring Boot" },
      ],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "SQL" }, { name: "Oracle" }],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code" },
        { name: "MS Office" },
      ],
    },
  ],
};

// ── Leadership / Activities ───────────────────────────────────
export const leadershipList = [
  {
    title: "IT Forum",
    description:
      "Active member of the college IT Forum — secured 1st Prize in the Coding Battle competition and won a prize in the Exhibition for Best Working Model. Also participated in an Inter-College Technical Symposium, presenting a paper on DBMS.",
    role: "Active Member",
    badge: "Tech Club",
  },
];

// ── Internships / Experience ──────────────────────────────────
export const internshipsList = [
  {
    organization: "Nexora Solution",
    role: "Web Development Intern",
    duration: "Internship",
    skills: [
      "Responsive Web Design",
      "Bug Fixing",
      "UI/UX Improvement",
      "Teamwork",
      "Full-Stack Fundamentals",
    ],
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];

// ── Soft skills ───────────────────────────────────────────────
export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Co-led a team of five on the Wild Health project — coordinating database design and feature development across the group.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Identified the gap in wildlife health record-keeping and designed a digital solution from scratch during my final year.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Presented a technical paper on DBMS at an inter-college symposium, clearly explaining complex concepts to a mixed audience.",
  },
  {
    name: "Leadership",
    icon: "🏆",
    desc: "Guided teammates through feature implementation decisions, keeping the project on track and winning Best Working Model at the exhibition.",
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    id: "wild-health",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Wild Health — Digitization of Wild Animal Health Records",
    description:
      "A full-stack website that digitizes wild animal health records, enabling veterinary doctors and forest staff to monitor animal health easily. I designed the database and built the image-upload module for health records as part of a team of five.",
    techTags: ["HTML", "CSS", "JavaScript", "MySQL"],
    links: {
      github: "https://github.com/Shrilali12",   // update to the specific repo when available
      demo: "",                                   // "" renders "Demo Coming Soon"
    },
    isFlagship: true,
  },
];

// ── Certificates (optional / bonus component) ─────────────────
export const certificates = {
  featured: [
    { name: "Web Development Internship", issuer: "Nexora Solution", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/shrilali-m-n-gowda/",
};

// ── Education ─────────────────────────────────────────────────
export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "MES MSPS First Grade College, Chikkamagalur",
  cgpa: "9.05 CGPA",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

// ── Footer ────────────────────────────────────────────────────
export const footerContent = {
  taglines: [
    "Full Stack Developer",
    "Java · React · MySQL · Spring Boot",
    "Building solutions that create real-world impact",
  ],
  credential: "BCA Graduate — 9.05 CGPA",
  copyright: `© ${new Date().getFullYear()} Shrilali M N Gowda | Built with React`,
};

// ── EmailJS (contact form) ────────────────────────────────────
// Values are read from .env.local (never commit that file to git).
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
