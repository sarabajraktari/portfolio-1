import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
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
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden text-center text-white md:text-left">

      {/* Hero content */}
      <div className="relative z-10 container grid min-h-[calc(100vh-72px)] items-center gap-16 py-20 lg:grid-cols-[1fr_300px]">
        <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
          Sara Bajraktari · Web Developer
        </p>
        <h1
          ref={titleRef}
          className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl"
        >
          I build fast, thoughtful websites that are easy to maintain.
        </h1>
        <div ref={subtitleRef}>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I specialize in custom WordPress development, clean PHP architecture, and front-end experiences that feel effortless to use.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a href="#projects" className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-200">View my work</a>
            <a href="/Sara-Bajraktari-CV.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 bg-slate-900/50 px-6 py-3 font-semibold text-white transition hover:border-slate-400 hover:bg-slate-800">Download CV</a>
          </div>
        </div>
        </div>
        <aside className="hidden border-l border-white/10 pl-10 lg:block">
          <p className="mb-8 text-sm leading-6 text-slate-400">Currently building reliable digital products from Prizren, Kosovo.</p>
          <dl className="space-y-7">
            <div><dt className="text-3xl font-bold text-white">3+ years</dt><dd className="mt-1 text-sm text-slate-500">Professional experience</dd></div>
            <div><dt className="text-3xl font-bold text-white">30%</dt><dd className="mt-1 text-sm text-slate-500">Core Web Vitals improvement</dd></div>
          </dl>
          <div className="mt-10 flex gap-5 text-sm font-medium text-slate-300">
            <a className="hover:text-amber-300" href="https://github.com/sarabajraktari" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="hover:text-amber-300" href="https://www.linkedin.com/in/sarabajraktari9/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
