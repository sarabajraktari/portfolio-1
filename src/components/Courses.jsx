const courses = [
  { title: "Vue.js — The Complete Guide", org: "Udemy · Maximilian Schwarzmüller", year: "2024", link: "https://www.udemy.com/certificate/UC-cb81867a-9b6f-4766-9890-91f82a588356/" },
  { title: "Understanding TypeScript", org: "Udemy · Maximilian Schwarzmüller", year: "2022", link: "https://www.udemy.com/certificate/UC-491649f5-471a-4276-bec5-8076f296e6e4/" },
  { title: "Full-Stack Development", org: "KODE Project-You · Angular + Express", year: "2022" },
  { title: "Front-End Development", org: "Shkolla Digjitale, Prizren", year: "2019" },
];

export default function Courses() {
  return (
    <section id="courses" className="section border-y border-white/[0.06] bg-slate-900/30">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div><span className="section-label !text-left">Continuous learning</span><h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Selected courses</h2><p className="mt-4 leading-7 text-slate-400">Focused learning that supports my day-to-day engineering work.</p></div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {courses.map((course) => (
              <div key={course.title} className="flex items-start justify-between gap-5 py-5">
                <div><h3 className="font-semibold text-white">{course.title}</h3><p className="mt-1 text-sm text-slate-500">{course.org}</p></div>
                <div className="flex shrink-0 items-center gap-4"><span className="text-sm text-slate-500">{course.year}</span>{course.link && <a href={course.link} target="_blank" rel="noreferrer" aria-label={`View ${course.title} certificate`} className="text-amber-300 hover:text-amber-200">↗</a>}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
