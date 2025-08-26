import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Stars() {
  const starsRef = useRef(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const stars = starsRef.current.children;

    for (let star of stars) {
      const delay = Math.random() * 2;
      const durationX = 1 + Math.random() * 1.5;
      const durationY = 1 + Math.random() * 1.5;

      gsap.to(star, {
        x: `+=${Math.random() * 40 - 20}`, // move left/right randomly
        y: `+=${Math.random() * 40 - 20}`, // move up/down randomly
        repeat: -1,
        yoyo: true,
        duration: Math.max(durationX, durationY),
        delay,
        ease: "sine.inOut",
      });
    }
  }, []);

  const generateStars = () => {
    const starsArray = [];
    for (let i = 0; i < 300; i++) {
      const width = Math.random() * 8 + 6;
      const height = Math.random() * 8 + 6;
      const left = Math.random() * (100 - (width / window.innerWidth) * 100);
      const top = Math.random() * (100 - (height / window.innerHeight) * 100);

      starsArray.push(
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute text-yellow-300 opacity-80"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <polygon
            points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
            fill="currentColor"
          />
        </svg>
      );
    }
    return starsArray;
  };

  return (
    <div
      ref={starsRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-x-hidden"
    >
      {generateStars()}
    </div>
  );
}
