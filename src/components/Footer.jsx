export default function Footer() {
  return (
    <footer className="mt-auto border-t max-w-7xl mx-auto">
      <div className="container py-6 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Sara Bajraktari. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with React & TailwindCSS & GSAP.</p>
      </div>
    </footer>
  )
}
