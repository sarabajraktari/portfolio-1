import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Courses from "./components/Courses.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import FireSVG from "./gsap/FireSVG";
import Stars from "./gsap/Stars.jsx";

export default function App() {
  const fireRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cardRefs = useRef([]);


  useEffect(() => {
    const fireEl = fireRef.current;
    if (!fireEl) return;

    gsap.set(fireEl, { autoAlpha: 1 });
    const isMobile = window.innerWidth < 768;

    const mouseMove = (e) => {
      if (isMobile) return;

      const offsetX = 60;
      const offsetY = 20;

      const x = e.clientX + offsetX;
      const y = e.clientY + offsetY;

      // Move flame with offset
      gsap.to(fireEl, { x: x - fireEl.offsetWidth / 2, y: y - fireEl.offsetHeight / 2, duration: 0.2 });

      // Update mouse position for cards
      mousePos.current = { x, y };

      // Update cards background based on distance
      if (cardRefs.current) {
        cardRefs.current.forEach((card) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardX = rect.left + rect.width / 2;
          const cardY = rect.top + rect.height / 2;

          const distance = Math.hypot(x - cardX, y - cardY);
          const maxDistance = 200;
          const intensity = Math.max(0, 1 - distance / maxDistance);
          const baseOpacity = 0.4;
          const maxIncrease = 0.6;

          gsap.to(card, {
            backgroundColor: `rgba(31,41,55,${baseOpacity + intensity * maxIncrease})`,
            duration: 0.2,
          });
        });
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", mouseMove);
    }

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);


  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      {/* Stars */}
      <Stars />

      {/* Global Flame */}
      <div
        ref={fireRef}
        className="fixed right-4 bottom-4 w-20 h-20 sm:w-20 sm:h-20 md:w-32 md:h-32 pointer-events-none z-50
             md:right-auto md:bottom-auto"
      >
        <FireSVG />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About firePos={mousePos} />
          <Skills firePos={mousePos} />
          <Experience firePos={mousePos} />
          <Projects firePos={mousePos} />
          <Courses firePos={mousePos} />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
