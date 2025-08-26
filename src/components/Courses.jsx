import Card from "../card/Card"

export default function Courses({firePos}) {
  const items = [
    {
      title: 'Vue.js - The Complete Guide (Vue 3, Router & Composition API)',
      org: 'Udemy · Maximilian Schwarzmüller',
      period: 'Oct 2024 – Dec 2024',
      link: 'https://www.udemy.com/certificate/UC-cb81867a-9b6f-4766-9890-91f82a588356/',
    },
    {
      title: 'Understanding TypeScript',
      org: 'Udemy · Maximilian Schwarzmüller',
      period: 'Apr 2022',
      link: 'https://www.udemy.com/certificate/UC-491649f5-471a-4276-bec5-8076f296e6e4/',
    },
    {
      title: 'Full-Stack Development Training',
      org: 'KODE Project-You Program (Angular + Express JS)',
      period: 'Apr 2022 – Aug 2022',
    },
    { title: 'Front-End Development', org: 'Shkolla Digjitale in Prizren', period: '2018 – 2019' },
    { title: 'Back-End Development (Laravel)', org: 'MakerSpace Course', period: '2019' },
    { title: 'Angular – The Complete Guide (Continuing)', org: 'Udemy · Maximilian Schwarzmüller' },
  ]
  return (
    <section id="courses" className="section">
      <div className="container text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Courses & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((c, idx) => (
            <Card firePos={firePos} key={idx} className="border rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-400">{c.org}</p>
              {c.period && <p className="text-sm text-gray-400">{c.period}</p>}
              {c.link && <a className="text-white underline mt-auto inline-block" href={c.link} target="_blank" rel="noreferrer">Certificate</a>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
