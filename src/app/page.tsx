import NavHighlighter from "./components/NavHighlighter";
import MobileNavbar from "./components/MobileNavbar";
import data from "../data/portfolioData.json";

export default function Home() {
  // ── Data ─────────────────────────────────────────────────────────────────
  const { meta, hero, about, projects, skills, contact, footer } = data;

  return (
    <div>
      <NavHighlighter />
      <div className="ambient-grid"></div>

      {/* ── Header ── */}
      <header className="site-header">
        <a className="logo" href="#home">{meta.initials}</a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta" href="#contact">Let&apos;s Talk</a>
      </header>
      {/* MobileNavbar MUST be outside header — fixed children of sticky parents are clipped on iOS */}
      <MobileNavbar />
      <main>
        {/* ── Hero ── */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <div className="hero-badge">{hero.badge}</div>
            <h1 className="hero-title">
              <span className="hero-name">{meta.name}</span>
              {/* <span className="hero-role">{meta.ole}</span> */}
            </h1>
            <p className="hero-summary">{hero.summary}</p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn ghost"   href={`mailto:${meta.email}`}>Email Me</a>
            </div>

            {/* <div className="hero-links">
              <a href={meta.github}   target="_blank" rel="noreferrer">GitHub</a>
              <a href={meta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div> */}
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-ring"></div>
              <div className="portrait-content">
                <p className="tag">{hero.portraitCard.tag}</p>
                <h3>{meta.name}</h3>
                <p>{meta.role}</p>
                <div className="mini-grid">
                  {hero.portraitCard.miniGrid.map((item) => (
                    <div key={item.label}>
                      <span>{item.label} : </span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

             <div className="hero-stats">
              {hero.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <p>{stat.label}</p>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="section about">
          <div className="section-title">
            <p>{about.sectionLabel}</p>
            <h2>{about.heading}</h2>
          </div>

          <div className="about-grid">
            {about.cards.map((card) => (
              <div className="about-card" key={card.type}>
                <h3>{card.title}</h3>

                {/* Summary */}
                {card.type === "summary" && (
                  <>
                    <p>{card.description}</p>
                    <div className="pill-row">
                      {card.pills?.map((p) => <span key={p}>{p}</span>)}
                    </div>
                  </>
                )}

                {/* Experience */}
                {card.type === "experience" && (
                  <>
                    <p className="subtle">{card.subtitle}</p>
                    <p>{card.description}</p>
                    <div className="metrics">
                      {card.metrics!.map((m) => (
                        <div key={m.label}>
                          <strong>{m.value}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pill-row">
                      {card.pills?.map((p) => <span key={p}>{p}</span>)}
                    </div>
                  </>
                )}

                {/* Education */}
                {card.type === "education" && (
                  <div className="timeline">
                    {card.timeline!.map((t) => (
                      <div key={t.degree}>
                        <h4>{t.degree}</h4>
                        <p>{t.institution} - {t.period}</p>
                        <span>{t.score}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="section projects">
          <div className="section-title">
            <p>{projects.sectionLabel}</p>
            <h2>{projects.heading}</h2>
          </div>

          <div className="project-grid">
            {projects.items.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-meta">
                  <span>{project.tech}</span>
                  <a
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={project.link !== "#" ? "noreferrer" : undefined}
                    aria-disabled={project.link === "#"}
                  >
                    {project.linkLabel}
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-row">
                  {project.chips.map((chip) => <span key={chip}>{chip}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section skills">
          <div className="section-title">
            <p>{skills.sectionLabel}</p>
            <h2>{skills.heading}</h2>
          </div>

          <div className="skills-grid">
            {skills.cards.map((card) => (
              <div className={`skill-card ${card.accent}`} key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="chip-row">
                  {card.chips.map((chip) => <span key={chip}>{chip}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className={`tool-row skill-card ${skills.secondaryTools.accent}`}>
            <p>{skills.secondaryTools.label}</p>
            <div className="chip-row">
              {skills.secondaryTools.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="section contact">
          <div className="section-title">
            <p>{contact.sectionLabel}</p>
            <h2>{contact.heading}</h2>
          </div>

          <div className="contact-grid">
            {contact.cards.map((card) => (
              <div
                className={`contact-card${card.highlight ? " highlight" : ""}`}
                key={card.type}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>

                {/* Reach out */}
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
                      <a href={meta.github}   target="_blank" rel="noreferrer">GitHub</a>
                      <a href={meta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  </>
                )}

                {/* Quick intro */}
                {card.type === "quick-intro" && (
                  <div className="contact-actions">
                    <a className="btn primary" href={`mailto:${meta.email}`}>Start a Project</a>
                    <a className="btn ghost"   href="#home">Back to Top</a>
                  </div>
                )}
              </div>
            ))}
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
