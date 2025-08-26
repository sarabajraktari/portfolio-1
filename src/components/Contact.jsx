export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-8 text-gray-400">Open to roles in front-end, full-stack, and WordPress development.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:sarabajraktari90@gmail.com" className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Email</a>
          <a href="https://github.com/sarabajraktari" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border hover:bg-gray-800">GitHub</a>
          <a href="https://www.linkedin.com/in/sarabajraktari9/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border hover:bg-gray-800">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
