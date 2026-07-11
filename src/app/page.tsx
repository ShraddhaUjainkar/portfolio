import NavHighlighter from "./components/NavHighlighter";
import MobileNavbar from "./components/MobileNavbar";
import data from "../data/portfolioData.json";

function TechIcon({ name }: { name: string }) {
  const size = 18;
  switch (name) {
    case "React.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#61dafb"
          strokeWidth="2"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <ellipse
            rx="10"
            ry="4.5"
            transform="rotate(0 12 12)"
            cx="12"
            cy="12"
          />
          <ellipse
            rx="10"
            ry="4.5"
            transform="rotate(60 12 12)"
            cx="12"
            cy="12"
          />
          <ellipse
            rx="10"
            ry="4.5"
            transform="rotate(120 12 12)"
            cx="12"
            cy="12"
          />
          <circle cx="12" cy="12" r="2" fill="#61dafb" />
        </svg>
      );
    case "Node.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="#339933"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M12 2L2 7.7v11.6L12 22l10-5.7V7.7L12 2zm-1 16.5l-6-3.4V10l6 3.4v7.1zm8-3.4l-6 3.4v-7.1l6-3.4v5.1z" />
        </svg>
      );
    case "Next.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="#ffffff"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 14.3l-5.6-7.8v7.8H8.5V7.7h1.2l5.6 7.8V7.7h1.2v8.6h-1.2z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6" />
          <path
            d="M7 8h6v2h-2v6H9v-6H7V8zm10 0h-4v8h4v-2h-2v-1h2V9h-2V8h2V8z"
            fill="#ffffff"
          />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="#336791"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M12 2a10 10 0 00-10 10c0 4.1 2.5 7.6 6 9.1V18H7a3 3 0 010-6h1V9a4 4 0 018 0v3h1a3 3 0 010 6h-1v3.1c3.5-1.5 6-5 6-9.1A10 10 0 0012 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      );
    case "Laravel":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff2d20"
          strokeWidth="2"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M8 3h8v6H8zM4 11h8v10H4zM12 9h8v8h-8z" />
        </svg>
      );
    case "Express.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M3 12h18M3 6h18M3 18h18" strokeDasharray="2 2" />
          <text
            x="4"
            y="15"
            fill="#ffffff"
            fontSize="10"
            fontWeight="bold"
            fontFamily="monospace"
          >
            EX
          </text>
        </svg>
      );
    case "WebSockets":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f15a24"
          strokeWidth="2"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#f15a24" />
        </svg>
      );
    case "Supabase":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="#3ecf8e"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M19 11h-6V3l-9 10h6v8l9-10z" />
        </svg>
      );
    case "Prisma":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="#5a67d8"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6" />
          <path
            d="M7 8h6v2h-2v6H9v-6H7V8zm10 0h-4v8h4v-2h-2v-1h2V9h-2V8h2V8z"
            fill="#ffffff"
          />
        </svg>
      );
    case "REST APIs":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path
            d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
            fill="rgba(56, 189, 248, 0.1)"
          />
        </svg>
      );
    case "JWT Auth":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ec4899"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            fill="rgba(236, 72, 153, 0.1)"
          />
        </svg>
      );
    case "DSA":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={size}
          height={size}
          className="tech-icon-svg"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  // ── Data ─────────────────────────────────────────────────────────────────
  const { meta, hero, about, projects, skills, contact, footer } = data;

  return (
    <div>
      <NavHighlighter />
      <div className="ambient-grid"></div>

      {/* ── Header ── */}
      <header className="site-header">
        <div className="flex items-center gap-8">
          <a className="logo" href="#home">
            <img
              src="/s-logo.png"
              alt="Shraddha Logo"
              className="signature-logo"
            />
            <span className="divider" />
          </a>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <a className="cta" href="#contact">
          Let&apos;s Talk
        </a>
      </header>
      {/* MobileNavbar MUST be outside header — fixed children of sticky parents are clipped on iOS */}
      <MobileNavbar />
      <main>
        {/* ── Hero ── */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-name">{meta.name}</span>
              <span className="hero-role">{meta.role}</span>
            </h1>
            <p className="hero-summary">{hero.summary}</p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href={`mailto:${meta.email}`}>
                Email Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-glow"></div>

            <div className="orbit-container">
              <div className="orbit-core">
                <span>Tech</span>
              </div>
              <div className="orbit-ring-1">
                <span className="orbit-node node-1">
                  <TechIcon name="React.js" />
                  React.js
                </span>
                <span className="orbit-node node-2">
                  <TechIcon name="Node.js" />
                  Node.js
                </span>
                <span className="orbit-node node-3">
                  <TechIcon name="Next.js" />
                  Next.js
                </span>
                <span className="orbit-node node-4">
                  <TechIcon name="TypeScript" />
                  TypeScript
                </span>
              </div>
              <div className="orbit-ring-2">
                <span className="orbit-node node-1">
                  <TechIcon name="PostgreSQL" />
                  PostgreSQL
                </span>
                <span className="orbit-node node-2">
                  <TechIcon name="Laravel" />
                  Laravel
                </span>
                <span className="orbit-node node-3">
                  <TechIcon name="Express.js" />
                  Express.js
                </span>
                <span className="orbit-node node-4">
                  <TechIcon name="WebSockets" />
                  WebSockets
                </span>
                <span className="orbit-node node-5">
                  <TechIcon name="Supabase" />
                  Supabase
                </span>
                <span className="orbit-node node-6">
                  <TechIcon name="Prisma" />
                  Prisma
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="section about">
          <div className="section-title">
            <p className="about-subtitle">
              <span className="dot-purple"></span>
              {about.sectionLabel}
            </p>
            <h2>
              Building scalable applications with{" "}
              <span className="text-purple-gradient">
                modern web technologies.
              </span>
            </h2>
          </div>

          <div className="about-bento-grid">
            {/* ── Professional Narrative Card ── */}
            <div className="about-card card-summary">
              <div className="card-header-with-icon">
                <div className="icon-wrapper-purple">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>Professional Narrative</h3>
              </div>

              <p className="narrative-description">
                I specialize in developing full-stack web applications that
                combine robust backend systems with intuitive user experiences.
                My experience spans Laravel, Node.js, React.js, RESTful APIs,
                authentication systems, database optimization, and modern
                JavaScript development. I actively build projects using Node.js,
                Express.js, PostgreSQL, and real-time communication technologies
                while maintaining a strong focus on clean architecture and
                performance.
              </p>

              <div className="card-divider"></div>

              <div className="tools-section">
                <span className="tools-title">Technologies & Tools</span>
                <div className="tools-grid">
                  {/* React.js */}
                  <div className="tool-tag">
                    <TechIcon name="React.js" />
                    <span>React.js</span>
                  </div>
                  {/* Next.js */}
                  <div className="tool-tag">
                    <TechIcon name="Next.js" />
                    <span>Next.js</span>
                  </div>
                  {/* Node.js */}
                  <div className="tool-tag">
                    <TechIcon name="Node.js" />
                    <span>Node.js</span>
                  </div>
                  {/* Express.js */}
                  <div className="tool-tag">
                    <TechIcon name="Express.js" />
                    <span>Express.js</span>
                  </div>
                  {/* PostgreSQL */}
                  <div className="tool-tag">
                    <TechIcon name="PostgreSQL" />
                    <span>PostgreSQL</span>
                  </div>
                  {/* REST APIs */}
                  <div className="tool-tag">
                    <TechIcon name="REST APIs" />
                    <span>REST APIs</span>
                  </div>
                  {/* JWT Auth */}
                  <div className="tool-tag">
                    <TechIcon name="JWT Auth" />
                    <span>JWT Auth</span>
                  </div>
                  {/* Laravel */}
                  <div className="tool-tag">
                    <TechIcon name="Laravel" />
                    <span>Laravel</span>
                  </div>
                  {/* TypeScript */}
                  <div className="tool-tag">
                    <TechIcon name="TypeScript" />
                    <span>TypeScript</span>
                  </div>
                  {/* DSA */}
                  <div className="tool-tag">
                    <TechIcon name="DSA" />
                    <span>DSA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Work History Card ── */}
            <div className="about-card card-experience">
              <div className="card-header-with-icon">
                <div className="icon-wrapper-purple">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3>Work History</h3>
              </div>

              <div className="experience-role-info">
                <h4>Software Engineer — Netwin Infosolutions Pvt. Ltd.</h4>
                <p className="role-meta">
                  Jul 2023 – Dec 2025 • Nashik, Maharashtra
                </p>
              </div>

              <div className="card-divider"></div>

              <ul className="experience-bullets">
                <li>
                  <span className="bullet-purple"></span>
                  <p>
                    <strong>Contributed to scalable backend development</strong>{" "}
                    using Node.js, Express.js, Laravel while building reusable
                    React.js interfaces and RESTful APIs.
                  </p>
                </li>
                <li>
                  <span className="bullet-purple"></span>
                  <p>
                    <strong>Implemented JWT authentication</strong>, third-party
                    integrations, and secure API communication.
                  </p>
                </li>
                <li>
                  <span className="bullet-purple"></span>
                  <p>
                    <strong>Worked across frontend and backend layers</strong>{" "}
                    with a focus on performance, maintainability, and secure
                    application development.
                  </p>
                </li>
              </ul>

              <div className="card-divider"></div>

              <div className="experience-metrics-row">
                <div className="metric-box">
                  <div className="metric-header">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#a78bfa"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="metric-value">2.6+</span>
                  </div>
                  <span className="metric-label">Years of Experience</span>
                </div>

                <div className="metric-box">
                  <div className="metric-header">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#a78bfa"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span className="metric-value">Full-Stack</span>
                  </div>
                  <span className="metric-label">Development</span>
                </div>
              </div>
            </div>

            {/* ── Education Card ── */}
            <div className="about-card card-education">
              <div className="card-header-with-icon">
                <div className="icon-wrapper-purple">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3>Education</h3>
              </div>

              <div className="education-grid-row">
                <div className="education-column">
                  <div className="degree-header">
                    <span className="bullet-purple"></span>
                    <h4>BE Computer Engineering</h4>
                  </div>
                  <p className="degree-details">
                    GCOEJ, Jalgaon • 2020 – 2023 • 8.80 / 10 CGPA
                  </p>
                </div>

                <div className="education-column">
                  <div className="degree-header">
                    <span className="bullet-purple"></span>
                    <h4>Diploma in Computer Engineering</h4>
                  </div>
                  <p className="degree-details">
                    Sanjivani Polytechnic College • 2017 – 2020 • 94.86%
                  </p>
                </div>

                {/* Wireframe isometric books stack illustration */}
                <div className="books-illustration-wrapper">
                  <svg
                    viewBox="0 0 160 120"
                    width="120"
                    height="90"
                    className="education-illustration"
                  >
                    {/* Graduation Cap */}
                    <path
                      d="M80 15 L115 30 L80 45 L45 30 Z"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M55 35 L55 52 C55 58, 105 58, 105 52 L105 35"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M115 30 L115 48 C115 50, 117 51, 119 51 C121 51, 123 50, 123 48 L123 30"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1"
                    />
                    <circle cx="119" cy="51" r="1.5" fill="#a78bfa" />

                    {/* Book 1 (Top Book) */}
                    <path
                      d="M45 60 L115 60 L105 70 L35 70 Z"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 70 L35 76 C35 78, 40 80, 45 80 L105 80 C110 80, 115 78, 115 76 L115 60"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M105 70 L105 80"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                    />

                    {/* Book 2 (Middle Book) */}
                    <path
                      d="M40 75 L120 75 L110 85 L30 85 Z"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 85 L30 91 C30 93, 35 95, 40 95 L110 95 C115 95, 120 93, 120 91 L120 75"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M110 85 L110 95"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                    />

                    {/* Book 3 (Bottom Book) */}
                    <path
                      d="M35 90 L125 90 L115 100 L25 100 Z"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25 100 L25 106 C25 108, 30 110, 35 110 L115 110 C120 110, 125 108, 125 106 L125 90"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M115 100 L115 110"
                      fill="none"
                      stroke="#222222"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="section projects">
          <div className="section-title">
            <p className="about-subtitle">
              <span className="dot-purple"></span>

              {projects.sectionLabel}
            </p>
            <h2>
              Built for{" "}
              <span className="text-purple-gradient">Real-World Problems</span>
            </h2>
          </div>

          <div className="project-grid">
            {projects.items.map((project) => (
              <article className="project-card" key={project.id}>
                <a
                  href={`/projects/${project.id}`}
                  style={{ position: "relative", display: "block" }}
                  className="project-card-image-wrapper"
                >
                  <img
                    src={`/projects/${project.id}.png`}
                    alt={`${project.title} Preview`}
                    className="project-card-image"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="project-card-content">
                  <div className="project-meta">{project.tech}</div>
                  <h3>
                    <a
                      href={`/projects/${project.id}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p>{project.description}</p>

                  <div className="project-card-footer">
                    <a
                      href={`/projects/${project.id}`}
                      className="view-details-btn"
                    >
                      View Details
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section skills">
          <div className="section-title">
            <p className="about-subtitle">
              <span className="dot-purple"></span>
              {skills.sectionLabel}
            </p>
            <h2>
              <span className="text-purple-gradient">{skills.heading}</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.cards.map((card) => (
              <div className={`skill-card ${card.accent}`} key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="section contact">
          <div className="section-title">
            <p className="about-subtitle">
              <span className="dot-purple"></span>
              {contact.sectionLabel}
            </p>
            <h2>
              <span className="text-purple-gradient">{contact.heading}</span>
            </h2>
          </div>

          {/* <div className="contact-grid">
            {contact.cards.map((card) => (
              <div
                className={`contact-card${card.highlight ? " highlight" : ""}`}
                key={card.type}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>

                {card.type === "reach-out" && (
                  <>
                    <div className="contact-details">
                      {card.details!.map((d) => (
                        <div key={d.label}>
                          <span>{d.label} : </span>
                          <a href={d.href}>{d.value}</a>
                        </div>
                      ))}
                    </div>
                    <div className="hero-links">
                      <a href={meta.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                      <a href={meta.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                    </div>
                  </>
                )}

                {card.type === "quick-intro" && (
                  <div className="contact-actions">
                    <a className="btn primary" href={`mailto:${meta.email}`}>
                      Start a Project
                    </a>
                    <a className="btn ghost" href="#home">
                      Back to Top
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div> */}

          <div className="contact-grid">
            {contact.cards.map((card) => (
              <div
                className={`contact-card${card.highlight ? " highlight" : ""}`}
                key={card.type}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>

                {/* Hire Me */}
                {card.type === "quick-intro" && (
                  <div className="contact-actions">
                    <a
                      className="btn primary"
                      href={meta.freelancer}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hire Me on Freelancer
                    </a>

                    <a
                      className="btn ghost"
                      href={meta.resume}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Resume
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* ── Contact Ribbon Bar (Bottom of Section) ── */}
          <div className="contact-ribbon-bar">
            {/* Email */}
            <a
              href={`mailto:${meta.email}`}
              target="_blank"
              rel="noreferrer"
              className="ribbon-link"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{meta.email}</span>
            </a>

            {/* LinkedIn */}
            <a
              href={`${meta.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="ribbon-link"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>Linkedin</span>
            </a>

            {/* GitHub */}
            <a
              href={`${meta.github}`}
              target="_blank"
              rel="noreferrer"
              className="ribbon-link"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <p>{footer.text}</p>
      </footer>
    </div>
  );
}
