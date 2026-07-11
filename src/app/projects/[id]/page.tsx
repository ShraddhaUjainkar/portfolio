import { notFound } from "next/navigation";
import data from "../../../data/portfolioData.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return data.projects.items.map((item) => ({
    id: item.id,
  }));
}

function TechIcon({ name }: { name: string }) {
  const size = 18;
  const normalized = name.toLowerCase().trim();

  if (normalized.includes("react")) {
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
        <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" cx="12" cy="12" />
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
  }
  if (normalized.includes("node")) {
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
  }
  if (normalized.includes("next")) {
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
  }
  if (normalized.includes("typescript")) {
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
  }
  if (normalized.includes("postgres")) {
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
  }
  if (normalized.includes("laravel")) {
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
  }
  if (normalized.includes("express")) {
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
  }
  if (normalized.includes("websocket")) {
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
  }
  if (normalized.includes("supabase")) {
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
  }
  if (normalized.includes("prisma")) {
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
  }
  if (normalized.includes("tailwind")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="#38bdf8"
        width={size}
        height={size}
        className="tech-icon-svg"
      >
        <path d="M12 6.086c-2.317 0-3.856 1.159-4.628 3.478 1.159-1.545 2.508-2.125 4.053-1.74 1.016.255 1.742.993 2.545 1.81C15.283 10.975 16.924 12.64 20.372 12.64c2.317 0 3.856-1.159 4.628-3.478-1.159 1.545-2.508 2.125-4.053 1.74-.879-.22-1.507-.853-2.222-1.58C17.585 8.134 16.035 6.086 12 6.086zM7.372 12.64c-2.317 0-3.856 1.159-4.628 3.478 1.159-1.545 2.508-2.125 4.053-1.74.879.22 1.507.853 2.222 1.58 1.14 1.159 2.69 3.207 6.725 3.207 2.317 0 3.856-1.159 4.628-3.478-1.159 1.545-2.508 2.125-4.053 1.74-1.016-.255-1.742-.993-2.545-1.81-1.312-1.341-2.953-3.007-6.402-3.007z" />
      </svg>
    );
  }

  // Generic Code Bracket Icon
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tech-icon-svg"
      width={size}
      height={size}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = data.projects.items.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  // Fallback to meta links if custom detailed fields are missing
  const role = (project as any).role || "Full-Stack Developer";
  const timeline = (project as any).timeline || "2026";
  const longDescription =
    (project as any).longDescription || project.description;
  const features = (project as any).features || [];
  const architecture = (project as any).architecture || "";
  const github = (project as any).github || "";

  return (
    <div className="project-detail-container">
      {/* ── Detail Navigation Header ── */}
      <nav className="project-detail-header">
        <a href="/#projects" className="back-button">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Projects
        </a>
      </nav>

      {/* ── Case Study Title Header (Full Width) ── */}
      <header className="project-detail-title-section">
        <h1>{project.title}</h1>
        <p className="project-detail-summary">{project.description}</p>
      </header>

      {/* ── Full Width Preview Image ── */}
      <div className="project-detail-image-wrapper">
        <img
          src={`/projects/${project.id}.png`}
          alt={`${project.title} Preview`}
        />
      </div>

      {/* ── Technology Ribbon Section ── */}
      <section className="project-detail-tech-ribbon">
        <span className="ribbon-label">Technology Stack</span>
        <div className="ribbon-tech-list">
          {project.chips.map((chip) => (
            <div className="ribbon-tech-item" key={chip}>
              <TechIcon name={chip} />
              <span>{chip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Case Study Content Split (Left: Content, Right: Sidebar) ── */}
      <section className="project-detail-content">
        <div className="detail-main">
          <div className="detail-section">
            <h2>Overview</h2>
            <p>{longDescription}</p>
          </div>

          {features.length > 0 && (
            <div className="detail-section">
              <h2>Key Features</h2>
              <div className="features-list">
                {features.map((feature: string, idx: number) => (
                  <div className="feature-card" key={idx}>
                    <div className="feature-card-bullet"></div>
                    <div className="feature-card-content">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="detail-sidebar">
          {/* Action Links Card */}
          <div className="sidebar-card actions-card">
            <h3>Links</h3>
            <div className="project-detail-actions">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {project.linkLabel}
              </a>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost"
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
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Project Metadata Card */}
          <div className="sidebar-card info-card">
            <h3>Project Info</h3>
            <div className="project-detail-meta-list">
              <div className="meta-item">
                <label>Role</label>
                <span>{role}</span>
              </div>
              <div className="meta-item">
                <label>Timeline</label>
                <span>{timeline}</span>
              </div>
            </div>
          </div>

          {/* Technical Details Sidebar Card */}
          {architecture && (
            <div className="sidebar-card architecture-card">
              <h3>Technical Details</h3>
              <p>{architecture}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
