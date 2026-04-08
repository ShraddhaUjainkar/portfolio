"use client";

import { useEffect } from "react";

/** Watches each <section> and highlights the matching nav link. */
export default function NavHighlighter() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            const active = document.querySelector(
              `.nav a[href="#${entry.target.id}"]`
            );
            if (active) active.classList.add("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null; // renders nothing, only runs the side-effect
}
