import Card from "../card/Card"

export default function Projects({firePos}) {
  const projects = [
    {
      name: 'Coach Finder',
      stack: 'Vue.js · Firebase · Vuex · Router',
      desc: 'Feature-rich app with authentication, dynamic forms, filtering and state management.',
      link: 'https://github.com/sarabajraktari/coach-finder',
    },
    {
      name: 'The Learning Course App',
      stack: 'Vue.js',
      desc: 'Interactive app for managing learning courses with component communication and reusable parts.',
      link: 'https://github.com/sarabajraktari/The-Learning-Course-App',
    },
    {
      name: 'The Monster Slayer Game',
      stack: 'Vue.js',
      desc: 'Interactive game demonstrating Vue methods, watchers, computed properties, and dynamic styling.',
      link: 'https://github.com/sarabajraktari/The-Monster-Slayer-Game',
    },
    {
      name: 'Audio Book',
      stack: 'Laravel · MySQL',
      desc: 'Full-stack app with role-based access control, CRUD, wishlist, and audio chapter playback.',
      link: 'https://github.com/sarabajraktari/AudioBook',
    },
    {
      name: 'Tourist Places',
      stack: 'Angular',
      desc: 'Dynamic app to showcase cities and attractions in Kosovo with HTTP data and pipes.',
      link: 'https://github.com/sarabajraktari/tourist-places',
    },
    {
      name: 'Portfolio',
      stack: 'PHP · WordPress',
      desc: 'Custom WordPress portfolio site.',
      link: 'https://github.com/sarabajraktari/portfolio',
    },
  ]
  return (
    <section id="projects" className="section">
      <div className="container text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card firePos={firePos} key={p.name} href={p.link} target="_blank" rel="noreferrer">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-300 mb-2">{p.stack}</p>
              <p className="text-gray-400">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
