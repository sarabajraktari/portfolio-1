import Card from "../card/Card";

export default function Skills({firePos}) {
  const skills = {
    Languages: ["PHP", "Wordpress", "JavaScript", "TypeScript", "HTML", "CSS"],
    Frameworks: ["Laravel", "Vue.js", "ReactJS", "Angular", 'Alpine.js'],
    Tools: ["Git", "GitHub", "TailwindCSS", "Firebase", "Vuex", 'ACF'],
    Database: ["MySQL"],
    Testing: ["Mocha", "Postman"],
  };

  return (
    <section
      id="skills"
      className="relative w-full section py-20 overflow-hidden text-white">

      {/* Skills Grid */}
      <div className="container relative z-20">
        <h2 className="text-3xl font-bold text-center my-10">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card firePos={firePos} className="items-center" key={category}>
              <h3 className="text-xl font-semibold mb-3">{category}</h3>
              <ul className="flex flex-wrap gap-2 justify-center mt-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 rounded-full bg-gray-700 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
