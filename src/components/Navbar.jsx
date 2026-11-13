import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const links = [
    { href: "#about", label: "About"},
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#courses", label: "Courses" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 shadow-lg shadow-slate-950/20 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/75">

      {/* Navbar content */}
      <nav className="relative container flex items-center justify-between py-4">
      <a
        href="#"
        className="group flex items-center gap-2 font-mono font-semibold tracking-tight"
      >
        <span className="text-xl text-white transition-colors duration-300 group-hover:text-amber-300">
          &lt;SB/&gt;
        </span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              aria-current={activeSection === l.href.slice(1) ? "location" : undefined}
              className={`relative py-2 transition hover:text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-amber-300 after:transition-transform ${
                activeSection === l.href.slice(1)
                  ? "text-white after:scale-x-100"
                  : "after:scale-x-0"
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300 lg:block">Let’s talk</a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="rounded-lg border border-slate-600 px-4 py-2 text-slate-300 md:hidden"
        >
         { open ? "X" : "☰" }
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex h-screen flex-col gap-4 p-4 border-t border-t-gray-400 bg-gray-900/95 text-gray-400 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={activeSection === l.href.slice(1) ? "location" : undefined}
                className={`block py-2 text-center transition hover:text-white ${
                  activeSection === l.href.slice(1) ? "text-white" : "text-slate-400"
                }`}
                onClick={() => {
                  setActiveSection(l.href.slice(1));
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
