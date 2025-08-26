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
        className="flex items-center gap-2 font-semibold tracking-tight text-black group"
      >
        {/* Planet SVG */}
    <svg
        className="w-8 h-8 text-gray-800 transition-transform duration-500 group-hover:rotate-180"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Planet in the middle */}
        <circle cx="12" cy="12" r="10" className="text-blue-900" fill="currentColor" />

        <path
          d="M 3 8 C 9 3, 16 14, 22 8 
            M 3 16 C 8 10, 16 22, 22 16"
          stroke="#fde047"
          strokeWidth="1"
          fill="none"
          className="opacity-70"
        />
      </svg>

      </a>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gray-500">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-4 py-2 border rounded-lg text-white border-gray-600"
        >
         { open ? "X" : "☰" }
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex h-screen flex-col gap-4 p-4 border-t border-gray-700 bg-gray-900/95 text-white md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2 text-center hover:text-gray-500"
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
