import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About"},
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#courses", label: "Courses" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* Navbar content */}
      <nav className="relative container flex items-center justify-between py-4 bg-gray-900/90 backdrop-blur border-b border-gray-700">
      <a
        href="#"
        className="flex items-center gap-2 font-mono font-semibold tracking-tight text-black group"
      >
        <span className="text-xl text-gray-400 transition-transform duration-500 group-hover:scale-110">
          &lt;SB/&gt;
        </span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-400">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-gray-300">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-4 py-2 border rounded-lg text-gray-400 border-gray-400"
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
                className="block py-2 text-center hover:text-gray-300"
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
