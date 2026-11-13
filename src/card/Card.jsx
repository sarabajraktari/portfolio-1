import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Card = ({ children, className = "", firePos, href, ...props }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !firePos) return;

    const updateHighlight = () => {
      const rect = cardRef.current.getBoundingClientRect();
      const cardX = rect.left + rect.width / 2;
      const cardY = rect.top + rect.height / 2;

      const flameX = firePos.current.x;
      const flameY = firePos.current.y;

      const distance = Math.hypot(cardX - flameX, cardY - flameY);
      const maxDistance = 200;

      const intensity = Math.max(0, 1 - distance / maxDistance);
      const baseOpacity = 0.4;
      const maxIncrease = 0.6;

      gsap.to(cardRef.current, {
        backgroundColor: `rgba(31,41,55,${baseOpacity + intensity * maxIncrease})`,
        duration: 0.1,
        overwrite: "auto",
      });
    };

    let animationFrame;
    const loop = () => {
      updateHighlight();
      animationFrame = requestAnimationFrame(loop);
    };
    loop();

    return () => cancelAnimationFrame(animationFrame);
  }, [firePos]);

  // Conditionally render <a> if href exists, otherwise <div>
  if (href) {
    return (
      <a
        ref={cardRef}
        href={href}
        className={`group relative flex flex-col rounded-3xl border border-white/10 p-6 text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 ${className}`}
        style={{ backgroundColor: "rgba(15,23,42,0.72)" }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col rounded-3xl border border-white/10 p-6 text-white shadow-xl shadow-black/10 ${className}`}
      style={{ backgroundColor: "rgba(15,23,42,0.72)" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
