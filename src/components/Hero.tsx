import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile, stats } from "../data";
import { ease, GitHubIcon } from "./ui";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="text-gradient whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  // Big soft glow that lazily follows the cursor.
  const mx = useMotionValue(50), my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 }), sy = useSpring(my, { stiffness: 40, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(99,102,241,0.18), transparent 60%)`;

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 28, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } } };

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs text-emerald-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Open to internships & opportunities
        </motion.div>

        <motion.h1 variants={item} className="mt-7 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Hi, I'm {profile.name} 
          <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_1s_2]">👋</span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 text-2xl font-semibold text-slate-200 sm:text-4xl">
          <RotatingRole />
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          I build full-stack web apps with <span className="text-slate-200">ASP.NET Core</span>, <span className="text-slate-200">React / Next.js</span> and{" "}
          <span className="text-slate-200">PostgreSQL</span> — and train neural networks with <span className="text-slate-200">PyTorch</span> on the side.
        </motion.p>

        <motion.div variants={item} className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin className="size-4" /> {profile.location}
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-indigo-500/40">
            View my work <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#cv" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.07]">
            <Download className="size-4" /> My CV
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.07]">
            <GitHubIcon /> GitHub
          </a>
        </motion.div>

        <motion.dl variants={item} className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/[0.06] pt-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value}>
              <dt className="text-3xl font-bold tracking-tight text-white">{s.value}</dt>
              <dd className="mt-1 text-sm leading-snug text-slate-500">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-2 text-slate-500 sm:block"
      >
        <ArrowDown className="size-4" />
      </motion.a>
    </section>
  );
}
