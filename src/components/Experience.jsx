const roles = [
  {
    company: "Freelance",
    role: "Elementor / WordPress Developer",
    period: "30 September — Present · Part-time",
    summary: "Supporting clients with Elementor website migrations, redesigns, ongoing maintenance and performance improvements.",
    highlights: ["Migrating existing websites to WordPress and Elementor", "Redesigning pages and responsive layouts in Elementor", "Improving performance and Core Web Vitals", "Maintaining, updating and troubleshooting live websites"],
  },
  {
    company: "Starlabs", role: "PHP / WordPress Developer", period: "Dec 2022 — Present",
    summary: "Building custom WordPress products across backend architecture, content editing and front-end delivery.",
    highlights: ["Custom PHP themes using MVC architecture", "Reusable Gutenberg blocks with ACF and Twig", "API integrations, complex queries and multilingual sites", "Around 30% improvement in speed and Core Web Vitals"],
  },
  {
    company: "ASTech (ITP)", role: "QA Intern", period: "Jan 2022 — Apr 2022",
    summary: "Improved product reliability through automated tests, structured bug reporting and API verification.",
    highlights: ["Mocha automation that increased coverage by around 40%", "Postman API testing and regression checks", "Bug investigation that helped reduce application errors"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section border-y border-white/[0.06] bg-slate-900/30">
      <div className="container">
        <span className="section-label">Career so far</span>
        <h2 className="section-title">Experience</h2>
        <div className="mx-auto max-w-4xl">
          {roles.map((role) => (
            <article key={role.company} className="relative grid gap-5 border-l border-white/10 pb-14 pl-8 last:pb-0 md:grid-cols-[180px_1fr] md:gap-10 md:pl-12">
              <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-amber-300 ring-4 ring-slate-950" />
              <div><p className="text-sm text-slate-500">{role.period}</p><p className="mt-1 font-semibold text-amber-300">{role.company}</p></div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{role.role}</h3>
                <p className="mt-3 leading-7 text-slate-400">{role.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  {role.highlights.map((item) => <li key={item} className="flex gap-2"><span className="text-amber-300">—</span>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
