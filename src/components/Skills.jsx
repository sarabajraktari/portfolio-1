export default function Skills() {
  const groups = [
    { label: "Core", items: ["PHP", "WordPress", "JavaScript", "TypeScript", "HTML", "CSS", "MySQL"] },
    { label: "Frameworks", items: ["Laravel", "Vue.js", "React", "Angular", "Alpine.js", "Tailwind CSS"] },
    { label: "Workflow", items: ["Git", "GitHub", "ACF", "Gutenberg", "Twig", "Firebase", "Postman", "Mocha"] },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-label">Technical toolkit</span>
        <h2 className="section-title">Tools I work with</h2>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="bg-slate-950/90 p-7 md:p-9">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => <li key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
