import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    // Animate hero text
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
    );

    // Animate stars
    const stars = starsRef.current.children;
    for (let star of stars) {
      const delay = Math.random() * 2;
      gsap.to(star, {
        y: "+=50",
        repeat: -1,
        yoyo: true,
        duration: 2 + Math.random() * 2,
        delay,
      });
    }
  }, []);

  return (
    <section className="relative section text-white text-center overflow-hidden h-screen bg-gray-900">
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container flex flex-col justify-center items-center h-full">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          Hi, I'm Sara Bajraktari 👋
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl mb-8 text-gray-200">
          Web Developer | PHP · React · Vue.js · WordPress
        </p>
      </div>
    </section>
  );
}
