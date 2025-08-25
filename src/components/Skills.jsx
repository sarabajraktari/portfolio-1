import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FireSVG from "../gsap/FireSVG";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef(null);
  const fireRef = useRef(null);
  const starsRef = useRef(null);
  const cardRefs = useRef([]);

  const skills = {
    Languages: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS"],
    Frameworks: ["Laravel", "Vue.js", "ReactJS", "Angular"],
    Tools: ["Git", "GitHub", "TailwindCSS", "Firebase", "Vuex"],
    Database: ["MySQL"],
    Testing: ["Mocha", "Postman"],
  };

  useEffect(() => {
    const skillsEl = skillsRef.current;
    const fireEl = fireRef.current;

    gsap.set(fireEl, { autoAlpha: 0 });

    // Mouse move fire
    const mouseMove = (e) => {
      const rect = skillsEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(fireEl, { x: x - 60, y: y - 60, duration: 0.2 });

      // Highlight cards based on distance
      cardRefs.current.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardY = cardRect.top + cardRect.height / 2 - rect.top;
        const distance = Math.hypot(x - cardX, y - cardY);

        const maxDistance = 200; // distance threshold
        const intensity = Math.max(0, 1 - distance / maxDistance); // 0 -> 1

        const baseOpacity = 0.4; // starting opacity
        const maxIncrease = 0.6; // how much it brightens
        gsap.to(card, {
          backgroundColor: `rgb(31 41 55 / ${baseOpacity + intensity * maxIncrease})`,
          duration: 0.2,
          overwrite: "auto",
        });

      });
    };

    const st = ScrollTrigger.create({
      trigger: skillsEl,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(fireEl, { autoAlpha: 1, duration: 0.5 });
        skillsEl.addEventListener("mousemove", mouseMove);
      },
      onLeaveBack: () => {
        gsap.to(fireEl, { autoAlpha: 0, duration: 0.5 });
        skillsEl.removeEventListener("mousemove", mouseMove);
      },
      onLeave: () => {
        gsap.to(fireEl, { autoAlpha: 0, duration: 0.5 });
        skillsEl.removeEventListener("mousemove", mouseMove);
      },
      onEnterBack: () => {
        gsap.to(fireEl, { autoAlpha: 1, duration: 0.5 });
        skillsEl.addEventListener("mousemove", mouseMove);
      },
    });

    // --- Stars Background ---
    const starsContainer = starsRef.current;
    const numStars = 100;
    starsContainer.innerHTML = "";

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "absolute bg-white rounded-full opacity-70";
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);

      gsap.to(star, {
        opacity: Math.random(),
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    // Inside your useEffect for Skills, after creating stars:
    for (let star of starsContainer.children) {
      const delay = Math.random() * 2;
      const duration = 2 + Math.random() * 2;
      const direction = Math.random() > 0.5 ? "+=20" : "-=20"; // small vertical drift

      gsap.to(star, {
        y: direction,
        repeat: -1,
        yoyo: true,
        duration,
        delay,
        ease: "sine.inOut",
      });
    }


    return () => {
      st.kill();
      skillsEl.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative w-full section bg-gray-900 py-20 overflow-hidden text-white"
    >
      {/* Stars Background */}
      <div
        ref={starsRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Fire SVG */}
      <div
        ref={fireRef}
        className="absolute w-32 h-32 pointer-events-none z-10"
      >
        <FireSVG />
      </div>
        {/* About Content */}
        <div className=" flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center my-10">About</h2>
          <div className="relative z-30 container grid md:grid-cols-2 gap-10">
            <div
              ref={(el) => (cardRefs.current[0] = el)} 
              className="p-6 rounded-xl shadow-lg"
              style={{  backgroundColor: "rgb(31 41 55 / 0.4)" }}
            >
              <h2 className="text-2xl font-bold mb-3">About Me</h2>
              <p>
                I&apos;m a web developer focused on building clean, performant and
                user-friendly applications.
              </p>
              <p className="text-sm text-gray-300 mt-2">Based in Prizren, Kosovo.</p>
            </div>

            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="p-6 rounded-xl shadow-lg"
              style={{  backgroundColor: "rgb(31 41 55 / 0.4)" }}
            >
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
            </div>
          </div>
        </div>
      {/* Skills Content */}
      <div className="container relative z-20">
        <h2 className="text-3xl font-bold text-center my-10">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              ref={(el) => (cardRefs.current[i + 2] = el)} 
              className="border-none rounded-2xl p-6 shadow-lg relative flex flex-col items-center text-white"
              style={{ backgroundColor: "rgb(31 41 55 / 0.4)" }} 
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
