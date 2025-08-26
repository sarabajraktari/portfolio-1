import Card from "../card/Card";

export default function About({firePos}){
    return (
        <section id="about" className="relative w-full section py-20 overflow-hidden text-white">
            {/* About / Info Cards */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center my-10">About</h2>
                <div className="relative z-30 container grid md:grid-cols-2 gap-10">
                <Card firePos={firePos}>
                    <h2 className="text-2xl font-bold mb-3">About Me</h2>
                    <p>
                    I&apos;m a web developer focused on building clean, performant and
                    user-friendly applications.
                    </p>
                    <p className="text-sm text-gray-300 mt-2">Based in Prizren, Kosovo.</p>
                </Card>

                <Card firePos={firePos}>
                    <h2 className="text-2xl font-bold mb-3">Education</h2>
                    <ul className="space-y-2 text-sm leading-snug">
                    <li className="font-medium">
                        BSc in Computer Science, University of Prizren &quot;Ukshin Hoti&quot;
                    </li>
                    <li>2018 – 2021 · Software Design</li>
                    <li>
                        Coursework: Software Development, Algorithms & Data Structures,
                        Database Administration, Network Design
                    </li>
                    </ul>
                </Card>
                </div>
            </div>
        </section>
    );
}