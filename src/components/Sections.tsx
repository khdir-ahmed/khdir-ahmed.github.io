import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight, Award, BookOpen, Brain, Briefcase, Dumbbell, ExternalLink, GraduationCap,
  Languages, Mail, MailWarning, MapPin, Server, Sparkles, Trophy, Users, Utensils,
} from "lucide-react";
import { useState } from "react";
import {
  activities, certifications, education, experience, languages, profile, projects, skills,
  type Category, type Project,
} from "../data";
import { ease, GitHubIcon, GlowCard, Reveal, Section, Tag } from "./ui";

/* ---------------------------------- About --------------------------------- */

export function About() {
  const facts = [
    { icon: GraduationCap, label: "Studying", value: "CS @ IIT Sfax" },
    { icon: Briefcase, label: "Interned at", value: "Steros" },
    { icon: Sparkles, label: "Into", value: "AI & Data Science" },
    { icon: MapPin, label: "Based in", value: profile.location },
  ];
  return (
    <Section id="about" eyebrow="01 — About" title={<>Building useful software, <span className="text-gradient">end to end.</span></>}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-400">
          <p>{profile.summary}</p>
          <p>
            During my internship at <span className="text-slate-200">Steros</span> I worked on a real production platform — merging two codebases, rebuilding the
            front end in Next.js and shipping it in Docker. Outside of that I enjoy competitive programming (IEEEXtreme), building the{" "}
            <span className="text-slate-200">IEEE Computer Society</span> branch website, and training models like a CNN that reads handwriting at 99.6% accuracy.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <GlowCard className="h-full p-5">
                <f.icon className="size-5 text-indigo-300" />
                <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">{f.label}</p>
                <p className="mt-1 font-semibold text-white">{f.value}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Experience ------------------------------- */

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've worked">
      {experience.map((job) => (
        <div key={job.company} className="relative pl-8 sm:pl-12">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
            className="absolute left-[7px] top-2 bottom-0 w-px origin-top bg-gradient-to-b from-indigo-400 via-sky-400/40 to-transparent sm:left-[11px]"
          />
          <div className="absolute left-0 top-1.5 grid size-[15px] place-items-center rounded-full border border-indigo-400/60 bg-ink sm:size-6">
            <div className="size-1.5 rounded-full bg-indigo-300 sm:size-2" />
          </div>
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-semibold text-white">
                {job.role} <span className="text-indigo-300">@ {job.company}</span>
              </h3>
              <span className="font-mono text-sm text-slate-500">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{job.detail}</p>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {job.points.map((p, i) => (
              <Reveal key={i} delay={i * 0.06} y={12}>
                <li className="flex gap-3 text-slate-400">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-sky-400" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-6 flex flex-wrap gap-2">
            {job.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </Reveal>
        </div>
      ))}
    </Section>
  );
}

/* -------------------------------- Projects -------------------------------- */

const icons = { brain: Brain, spam: MailWarning, server: Server, utensils: Utensils, dumbbell: Dumbbell, book: BookOpen, users: Users };

function ProjectCard({ p }: { p: Project }) {
  const Icon = icons[p.icon];
  return (
    <GlowCard className="flex h-full flex-col">
      <div className={`relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-gradient-to-br ${p.accent}`}>
        {p.image ? (
          <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        ) : (
          <div className="grid size-full place-items-center">
            <div className="absolute inset-0 bg-grid opacity-60" />
            <Icon strokeWidth={1.25} className="relative size-16 text-white/70 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[-4deg]" />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-ink/70 px-2.5 py-1 font-mono text-[11px] text-slate-300 backdrop-blur">
          {p.category} · {p.year}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
        <ul className="mt-4 space-y-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-slate-300">
              <span className="text-indigo-300">▹</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <div className="mt-auto flex gap-2 pt-6">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-ink transition hover:bg-indigo-100">
              Live demo <ExternalLink className="size-3.5" />
            </a>
          )}
          {p.code && (
            <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.06]">
              <GitHubIcon className="size-3.5" /> Code
            </a>
          )}
          {!p.code && !p.demo && <span className="py-2 text-sm text-slate-500">Private / organisation project</span>}
        </div>
      </div>
    </GlowCard>
  );
}

export function Projects() {
  const filters: ("All" | Category)[] = ["All", "AI", "Web", "Desktop"];
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" eyebrow="03 — Projects" title={<>Things I've <span className="text-gradient">built</span></>}>
      <Reveal className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative isolate rounded-full px-4 py-1.5 text-sm transition-colors ${filter === f ? "text-ink" : "text-slate-400 hover:text-white"}`}
          >
            {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 -z-10 rounded-full bg-white" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            {f}
            <span className="ml-1.5 text-xs opacity-60">{f === "All" ? projects.length : projects.filter((p) => p.category === f).length}</span>
          </button>
        ))}
      </Reveal>
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <Reveal className="mt-10 text-center">
        <a href={profile.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white">
          More on GitHub <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}

/* --------------------------------- Skills --------------------------------- */

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="My toolbox">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 0.08}>
            <GlowCard className="h-full p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it, j) => (
                  <motion.span
                    key={it}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.15 + j * 0.03 }}
                    whileHover={{ y: -2 }}
                    className="cursor-default rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-indigo-400/40 hover:bg-indigo-400/10"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------- CV ----------------------------------- */

function Block({ icon: Icon, title, children, delay = 0 }: { icon: typeof Award; title: string; children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <GlowCard className="h-full p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-lg bg-indigo-400/10 text-indigo-300">
            <Icon className="size-4.5" />
          </div>
          <h3 className="font-semibold text-white">{title}</h3>
        </div>
        <div className="mt-5">{children}</div>
      </GlowCard>
    </Reveal>
  );
}

export function CV() {
  return (
    <Section id="cv" eyebrow="05 — Résumé" title="Education, activities & more">
      <div className="grid gap-4 lg:grid-cols-2">
        <Block icon={GraduationCap} title="Education">
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-slate-100">{e.title}</p>
                  <span className="font-mono text-xs text-slate-500">{e.period}</span>
                </div>
                <p className="text-sm text-slate-400">{e.place}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={Award} title="Certifications" delay={0.08}>
          <ul className="space-y-2.5">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-slate-300">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-300 to-cyan-300" />
                {c}
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={Trophy} title="Leadership & activities">
          <ul className="space-y-4">
            {activities.map((a) => (
              <li key={a.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-slate-100">{a.title}</p>
                  <span className="font-mono text-xs text-slate-500">{a.period}</span>
                </div>
                <p className="text-sm text-slate-400">{a.text}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={Languages} title="Languages" delay={0.08}>
          <ul className="space-y-5">
            {languages.map((l, i) => (
              <li key={l.name}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-100">{l.name}</span>
                  <span className="text-slate-500">{l.level}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease, delay: 0.2 + i * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </Section>
  );
}

/* --------------------------------- Contact -------------------------------- */

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-indigo-500/[0.12] via-panel to-cyan-500/[0.08] px-6 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-300/80">06 — Contact</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Let's build something <span className="text-gradient">together.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-slate-400">
                I'm looking for internships and projects in software engineering and AI. My inbox is always open — I'll get back to you quickly.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-ink shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5">
                  <Mail className="size-4" /> {profile.email}
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-slate-500 sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Tailwind CSS & Motion</p>
      </div>
    </footer>
  );
}
