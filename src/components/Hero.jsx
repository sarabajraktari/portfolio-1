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

    // Animate stars background
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
    <section className="relative section text-white text-center overflow-hidden h-screen">
      {/* SVG Gradient Background */}
      <svg className="absolute inset-0 w-full h-full z-0">
        <defs>
          <linearGradient
            id="grad1"
            x1="-154.32"
            y1="263.27"
            x2="-154.32"
            y2="374.3"
            gradientTransform="matrix(-1, 0, 0, 1.36, 231.36, -100.14)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.07" stopColor="#9c536b" />
            <stop offset="0.98" stopColor="#d98981" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
      </svg>

      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.9 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 container flex flex-col justify-center items-center h-full">
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
