export default function About() {
  const services = [
    { number: "01", title: "WordPress development", text: "Custom themes, Gutenberg blocks and flexible CMS experiences built around real content needs." },
    { number: "02", title: "Backend architecture", text: "Maintainable PHP, MVC patterns, integrations and data models that are clear to extend." },
    { number: "03", title: "Front-end implementation", text: "Responsive interfaces with Tailwind CSS, Alpine.js, Vue and React — with performance in mind." },
  ];

  return (
    <section id="about" className="section border-y border-white/[0.06] bg-slate-900/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="section-label !text-left">What I do</span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">From solid foundations to polished interfaces.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">I enjoy turning complex requirements into clear digital experiences. I work across the stack, but my strongest focus is building custom, maintainable WordPress products.</p>
            <p className="mt-5 text-sm text-slate-500">Based in Prizren, Kosovo · BSc in Computer Science</p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service) => (
              <article key={service.number} className="grid gap-3 py-7 sm:grid-cols-[48px_1fr]">
                <span className="font-mono text-sm text-amber-300">{service.number}</span>
                <div><h3 className="text-xl font-semibold text-white">{service.title}</h3><p className="mt-2 leading-7 text-slate-400">{service.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
