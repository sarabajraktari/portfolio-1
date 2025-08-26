import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FireSVG() {
  const sparkRef = useRef([]);
  const flameRef = useRef([]);

  useEffect(() => {
    // Animate sparks
    sparkRef.current.forEach((s) => {
      gsap.fromTo(
        s,
        { scale: 2, y: 40, transformOrigin: "center bottom" },
        {
          scale: 0,
          y: -60,
          duration: Math.random() * 0.3 + 0.2,
          repeat: -1,
          yoyo: false,
        }
      );
    });

    // Animate flames
    flameRef.current.forEach((f, idx) => {
      gsap.to(f, {
        scaleY: 1.1 + (idx ? 0.2 : 0),
        scaleX: idx ? 1 : 0.8,
        transformOrigin: "center bottom",
        duration: Math.random() * 0.4 + 0.2,
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <svg viewBox="0 -20 120 240" className="w-[5rem] h-[5rem] md:w-20 md:h-20 md:left-0 right-0 absolute inset-0 pointer-events-none">
      <defs>
        <linearGradient id="fire-gradient-basic" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#ffb200" offset="0.2" />
          <stop stopColor="#dc0000" offset="1" />
        </linearGradient>
        <linearGradient id="fire-gradient-red" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#ffb200" offset="0" />
          <stop stopColor="#dc0000" offset="0.9" />
        </linearGradient>
        <linearGradient id="fire-gradient-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#ffb200" offset="0.3" />
          <stop stopColor="#dc0000" offset="1" />
        </linearGradient>
      </defs>

      <g strokeWidth="0.5" strokeOpacity="0.5">
        {["M13 90c-8,-10 -6,-14 -5,-21 3,-3 0,-7 -2,-19 8,11 18,12 7,40l0 0z",
          "M36 45c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z",
          "M63 48c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z",
          "M83 80c-8,-10 -6,-14 -5,-21 3,-3 0,-7 -2,-19 8,11 18,12 7,40l0 0z",
          "M94 126c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z"
        ].map((d, idx) => (
          <path
            key={idx}
            ref={(el) => (sparkRef.current[idx] = el)}
            className="spark"
            fill="#ffd700"
            stroke="#ff0"
            d={d}
          />
        ))}

        {[
          ["M46 50c1,13 -15,26 -13,44 0,11 -4,-17 -2,-26 -1,-8 -3,-16 -9,-21 8,42 -28,33 -5,88 -4,-2 -8,-4 -12,-7 4,13 9,21 15,28 9,9 21,13 39,16 13,4 28,2 38,-6 10,-7 15,-19 12,-34 -3,6 -7,10 -13,12 3,-17 -14,-25 -7,-42 10,-20 3,-45 0,-32 -4,12 -11,21 -20,29 22,-70 -10,-53 -11,-88 -9,12 -14,23 -12,39z", "fire-gradient-basic"],
          ["M51 168c-55,-58 30,-62 -11,-121 11,39 -13,64 -21,76 -5,-15 -1,-21 5,-39 -38,42 -9,63 27,84l0 0z", "fire-gradient-yellow"],
          ["M55 168c-1,-14 -3,-25 15,-38 31,-22 16,-34 -3,-57 5,22 -4,40 -12,52 -5,8 -23,23 0,43z", "fire-gradient-yellow"],
          ["M63 172c9,-5 11,-20 12,-37 2,-17 7,-33 34,-36 -11,9 -20,20 -16,41 -1,31 -24,29 -30,32l0 0z", "fire-gradient-red"],
        ].map(([d, grad], idx) => (
          <path
            key={idx + 10}
            ref={(el) => (flameRef.current[idx] = el)}
            className="flame"
            fill={`url(#${grad})`}
            stroke="#ff0"
            strokeWidth={idx === 2 ? 0.5 : 1}
            d={d}
          />
        ))}
      </g>
    </svg>
  );
}
