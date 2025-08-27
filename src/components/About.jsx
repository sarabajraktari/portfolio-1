import Card from "../card/Card";

export default function About({firePos}){
    return (
        <section id="about" className="relative w-full section py-20 overflow-hidden text-white">
            {/* About / Info Cards */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center my-10">About</h2>
                <div className="relative z-30 container grid md:grid-cols-2 gap-10">
                <Card firePos={firePos} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                {/* Heading */}
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
                    About Me
                </h2>

                {/* Main paragraph */}
                <p className="text-gray-200 leading-relaxed">
                    I'm a web developer with 3 years of experience building <span className="font-semibold">custom WordPress themes</span> and web applications using <span className="font-semibold">PHP with MVC architecture</span>. 
                    I create dynamic and maintainable websites using <span className="font-semibold">Gutenberg blocks, Twig, and Tailwind CSS</span>, while adding interactivity with <span className="font-semibold">Alpine.js</span>. 
                    My focus is on delivering <span className="font-semibold">clean, performant, and user-friendly applications</span> that combine solid backend logic with modern front-end practices.
                </p>

                {/* Location / Footer */}
                <p className="text-sm text-gray-400 mt-3 italic">
                    Based in Prizren, Kosovo.
                </p>
                </Card>

                <Card firePos={firePos} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
                    Education
                </h2>

                <div className="space-y-3 text-sm leading-snug text-gray-200">
                    {/* Degree and University */}
                    <div className="font-medium text-gray-100">
                    BSc in Computer Science, University of Prizren &quot;Ukshin Hoti&quot;
                    </div>

                    {/* Years and Focus */}
                    <div className="text-gray-400 italic">2018 – 2021 · Software Design</div>

                    {/* Coursework */}
                    <div>
                    <span className="font-semibold text-gray-100">Coursework:</span>{" "}
                    Software Development, Algorithms & Data Structures, Database Administration, Network Design
                    </div>

                    {/* Projects & Highlights */}
                    <div>
                    <span className="font-semibold text-gray-100">Projects & Highlights:</span>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-gray-300">
                        <li>Developed small-scale software projects applying MVC and database principles</li>
                        <li>Designed and implemented database schemas and queries for class projects</li>
                        <li>Worked on collaborative software design assignments emphasizing modular, maintainable code</li>
                    </ul>
                    </div>
                </div>
                </Card>

                </div>
            </div>
        </section>
    );
}