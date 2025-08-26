import Card from "../card/Card"

export default function Experience({firePos}) {
  const items = [
    {
      company: 'Starlabs',
      role: 'PHP / WordPress Developer',
      period: 'Dec 2022 – Present',
      bullets: [
        'Developed and maintained web applications using PHP and WordPress',
        'Used Twig for maintainable front-end development',
        'Implemented interactivity with Alpine.js',
        'Styled with Tailwind CSS; improved Core Web Vitals',
        'Worked extensively with WordPress as a CMS; ACF, Yoast, WPML, Contact Form 7, Rank Math, FVM, Permalink Manager Lite, Gutenberg blocks',
        'Increased website performance by ~30% using optimized PHP and Tailwind CSS',
      ],
    },
    {
      company: 'ASTech (ITP)',
      role: 'Intern QA',
      period: 'Jan 2022 – Apr 2022',
      bullets: [
        'Automated testing using Mocha, improving coverage by ~40%',
        'Identified and reported bugs; reduced app errors by ~25%',
        'Conducted API testing using Postman for reliable backend performance',
      ],
    },
  ]
  return (
    <section id="experience" className="section">
      <div className="container text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {items.map((exp) => (
            <Card firePos={firePos} key={exp.company}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold">{exp.role} · {exp.company}</h3>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
