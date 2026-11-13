export default function Contact() {
  return (
    <section id="contact" className="section px-4">
      <div className="container rounded-3xl border border-amber-300/20 bg-amber-300/[0.06] px-6 py-14 text-center text-white md:py-20">
        <span className="section-label">Let’s connect</span>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Have a project or opportunity in mind?</h2>
        <p className="mx-auto mb-8 max-w-xl text-slate-400">I’m open to WordPress, front-end, and full-stack development roles and collaborations.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:sarabajraktari90@gmail.com" className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-200">Send an email</a>
          <a href="https://github.com/sarabajraktari" target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-6 py-3 transition hover:border-white">GitHub</a>
          <a href="https://www.linkedin.com/in/sarabajraktari9/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-6 py-3 transition hover:border-white">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
