const projects = [
  { name: "Coach Finder", stack: ["Vue.js", "Firebase", "Vuex"], desc: "A complete coach discovery experience with authentication, requests, filtering, dynamic forms and centralized state.", link: "https://github.com/sarabajraktari/coach-finder", color: "from-amber-300/25 to-orange-500/5", mark: "CF" },
  { name: "Audio Book", stack: ["Laravel", "MySQL", "PHP"], desc: "A full-stack audio platform with role-based access, CRUD workflows, wishlists and chapter playback.", link: "https://github.com/sarabajraktari/AudioBook", color: "from-violet-400/25 to-fuchsia-500/5", mark: "AB" },
  { name: "Tourist Places", stack: ["Angular", "HTTP", "Pipes"], desc: "A dynamic guide to cities and attractions across Kosovo, built around remote data and reusable views.", link: "https://github.com/sarabajraktari/tourist-places", color: "from-cyan-400/25 to-blue-500/5", mark: "TP" },
  { name: "Learning Course App", stack: ["Vue.js", "Components"], desc: "An interactive course manager demonstrating reusable components and clear parent–child communication.", link: "https://github.com/sarabajraktari/The-Learning-Course-App", color: "from-emerald-400/25 to-teal-500/5", mark: "LC" },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><span className="section-label !text-left">Selected work</span><h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Projects built to learn<br className="hidden md:block" /> and solve.</h2></div>
          <a href="https://github.com/sarabajraktari" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-300 transition hover:text-amber-300">All projects on GitHub ↗</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <a key={project.name} href={project.link} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-7 rounded-2xl border border-white/10 bg-slate-950/75 shadow-2xl transition duration-500 group-hover:scale-[1.03]">
                  <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4"><i className="h-2 w-2 rounded-full bg-rose-400/70"/><i className="h-2 w-2 rounded-full bg-amber-300/70"/><i className="h-2 w-2 rounded-full bg-emerald-400/70"/></div>
                  <div className="flex h-[calc(100%-36px)] items-center justify-center"><span className="text-4xl font-black tracking-[-0.08em] text-white/80 md:text-6xl">{project.mark}</span></div>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">0{index + 1}</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-semibold text-white">{project.name}</h3><span className="text-xl text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-300">↗</span></div>
                <p className="mt-3 leading-7 text-slate-400">{project.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <li key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{item}</li>)}</ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
