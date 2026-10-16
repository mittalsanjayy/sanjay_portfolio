import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { navItems, profile, resume } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape and return focus to the toggle button.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the menu if the viewport grows to desktop width.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const onChange = (event) => event.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label={`${profile.name}, back to top`}>
          <span className="wordmark__mark" aria-hidden="true">{profile.wordmark.charAt(0)}</span>
          <span>{profile.wordmark}</span>
        </a>

        <nav id="site-menu" className={`nav__menu ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${active === item.id ? "is-active" : ""}`}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary nav__resume" href={resume.file} download={resume.downloadName} onClick={closeMenu}>
            <Icon name="download" size={16} />
            Download Résumé
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
    </header>
  );
}
