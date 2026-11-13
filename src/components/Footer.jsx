export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-7xl border-t border-white/10">
      <div className="container py-6 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Sara Bajraktari. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with React, Tailwind CSS & GSAP.</p>
      </div>
    </footer>
  )
}
