"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills" },
  { id: "contact",  label: "Contact" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300); // wait for menu close animation
  };

  return (
    <>
      {/* Hamburger button — rendered inside the header via CSS absolute positioning */}
      <button
        className="hamburger-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className={`hamburger-icon ${open ? "open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* Full-screen overlay menu */}
      <div className={`mobile-menu-overlay ${open ? "open" : ""}`} aria-hidden={!open}>
        {/* Backdrop */}
        <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />

        {/* Slide-in panel */}
        <nav className="mobile-menu-panel" aria-label="Mobile navigation">
          <ul className="mobile-menu-list">
            {NAV_LINKS.map(({ id, label }, i) => (
              <li
                key={id}
                className="mobile-menu-item"
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                <button
                  className="mobile-menu-link"
                  onClick={() => handleNav(id)}
                >
                  <span className="menu-link-number">0{i + 1}</span>
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mobile-menu-cta btn primary"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </>
  );
}
