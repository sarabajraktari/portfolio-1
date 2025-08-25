import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#courses", label: "Courses" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="font-semibold tracking-tight">
          Sara Bajraktari
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-blue-600">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border rounded-lg"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 p-4 border-t bg-white md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2 text-center hover:text-blue-600"
                onClick={() => setOpen(false)}
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
