import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data";
import { GitHubIcon } from "./ui";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300" />
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled ? "border-white/[0.08] bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl" : "border-transparent"
          }`}
        >
          <a href="#top" className="font-semibold tracking-tight text-white">
            <span className="text-gradient font-extrabold">KA</span>
            <span className="ml-2 hidden text-slate-400 sm:inline">/ portfolio</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={`relative isolate rounded-lg px-3 py-1.5 text-sm transition-colors ${active === l.id ? "text-white" : "text-slate-400 hover:text-white"}`}>
                  {active === l.id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={profile.cv} download className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-ink transition hover:bg-indigo-100">
              <Download className="size-3.5" /> <span className="hidden sm:inline">Download</span> CV
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
              <GitHubIcon />
            </a>
            <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
