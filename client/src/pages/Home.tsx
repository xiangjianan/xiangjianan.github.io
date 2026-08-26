/* ============================================================
   Home.tsx — Minimal, works-first landing
   - Stripped-down: no narrative, no journey, no language list.
   - Big-type hero for first-open impact, then straight into the work.
   - Near-black base, one electric-violet accent, off-white type.
   - Featured: mini-desk + taptap. The rest in a compact grid.
   - All work links open in a new tab.
   ============================================================ */

import { ArrowDown, ArrowUpRight, Github, Mail, Star } from "lucide-react";

const COLORS = {
  bg: "#0a0a0b",
  text: "#f5f5f7",
  muted: "#8a8a93",
  accent: "#7c5cff",
  accentDim: "rgba(124, 92, 255, 0.16)",
  card: "rgba(255, 255, 255, 0.03)",
  cardHover: "rgba(255, 255, 255, 0.06)",
  border: "rgba(255, 255, 255, 0.09)",
};

const STATS = [
  { value: "449★", label: "lks stars" },
  { value: "19", label: "public repos" },
  { value: "944", label: "contributions / yr" },
];

const FEATURED = [
  {
    name: "mini-desk",
    emoji: "🖥️",
    desc: "Do less, do it well. A local-first personal workspace — notes, reminders, quick actions, screenshots, everyday tools.",
    meta: "TypeScript · local-first",
    demo: "https://minidesk.helloxjn.com",
    repo: "https://github.com/xiangjianan/mini-desk",
  },
  {
    name: "taptap",
    emoji: "🎯",
    desc: "「数一数噻」— a WeChat Mini Game. A number-finding puzzle built on Voronoi diagrams, playable in WeChat.",
    meta: "JavaScript · WeChat Mini Game",
    demo: "https://taptap.helloxjn.com",
    repo: "https://github.com/xiangjianan/taptap",
  },
];

const MORE = [
  { name: "lks", stars: 449, desc: "303 curated websites from LKs' Bilibili series", demo: "https://lkssite.vip", repo: "https://github.com/xiangjianan/lks" },
  { name: "time-traveler", desc: "LLM-driven historical time-travel adventure", repo: "https://github.com/xiangjianan/time-traveler" },
  { name: "primus", desc: "First-principles engine: any goal down to 'do it now'", demo: "https://primus.helloxjn.com", repo: "https://github.com/xiangjianan/primus" },
  { name: "ai-daily-news", desc: "Auto-aggregated daily AI news", demo: "https://xiangjianan.github.io/ai-daily-news/", repo: "https://github.com/xiangjianan/ai-daily-news" },
  { name: "jindou-blog", desc: "AI research & technical writing", demo: "https://aiblog.helloxjn.com", repo: "https://github.com/xiangjianan/jindou-blog" },
  { name: "workout-checkin", desc: "100-day fitness bet", demo: "https://workout.helloxjn.com", repo: "https://github.com/xiangjianan/workout-checkin" },
  { name: "lkszj", desc: "Creative-works submission platform", repo: "https://github.com/xiangjianan/lkszj" },
  { name: "scheduler", desc: "Python task scheduler + FastAPI", repo: "https://github.com/xiangjianan/scheduler" },
  { name: "mermaid", desc: "Pure-frontend Markdown Mermaid visualizer", repo: "https://github.com/xiangjianan/mermaid" },
  { name: "send-msg", desc: "LAN real-time broadcast (WebSocket + Express)", repo: "https://github.com/xiangjianan/send-msg" },
];

function TopBar() {
  return (
    <header
      className="fixed left-0 right-0 z-50"
      style={{ background: "rgba(10, 10, 11, 0.7)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: `1px solid ${COLORS.border}` }}
    >
      <div className="flex items-center justify-between" style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px" }}>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center" style={{ width: 30, height: 30, borderRadius: 8, background: COLORS.accent, color: "#fff", fontWeight: 800, fontFamily: "Rajdhani, sans-serif", fontSize: 15 }}>
            XJ
          </div>
          <span className="font-bold tracking-widest" style={{ fontFamily: "Rajdhani, sans-serif", color: COLORS.text, letterSpacing: "0.12em", fontSize: 14 }}>XIANGJIANAN</span>
        </div>
        <a
          href="https://github.com/xiangjianan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
          style={{ color: COLORS.muted, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textDecoration: "none", fontFamily: "Space Grotesk, sans-serif" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = COLORS.text)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = COLORS.muted)}
        >
          <Github size={15} /> GitHub
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center" style={{ minHeight: "calc(100vh - 60px)", padding: "120px 24px 60px" }}>
      <div className="text-sm tracking-[0.35em] mb-6" style={{ fontFamily: "JetBrains Mono, monospace", color: COLORS.accent, letterSpacing: "0.35em" }}>
        AI-NATIVE BUILDER · OPEN-SOURCE
      </div>

      <h1
        className="leading-none font-black"
        style={{ fontFamily: "Rajdhani, sans-serif", color: COLORS.text, fontSize: "clamp(4rem, 15vw, 10.5rem)", letterSpacing: "0.02em", margin: 0 }}
      >
        XIANGJIANAN
      </h1>

      <p className="mt-5 text-lg sm:text-xl font-light" style={{ color: COLORS.muted, fontFamily: "Space Grotesk, sans-serif", fontWeight: 300 }}>
        I build tools I actually use.
      </p>

      {/* Highlights */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {["mini-desk", "taptap", "lks · 449★"].map((chip, i) => (
          <span
            key={chip}
            className="inline-flex items-center gap-2 px-4 py-2"
            style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 999, color: i === 2 ? COLORS.accent : COLORS.text, fontSize: 13, fontFamily: "Space Grotesk, sans-serif" }}
          >
            {i === 2 && <Star size={12} fill={COLORS.accent} color={COLORS.accent} />}
            {chip}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-3 gap-0" style={{ borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}`, width: "min(680px, 100%)" }}>
        {STATS.map((s) => (
          <div key={s.label} className="py-5 px-3" style={{ borderRight: `1px solid ${COLORS.border}` }}>
            <div className="text-2xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif", color: COLORS.text }}>{s.value}</div>
            <div className="text-xs mt-1" style={{ fontFamily: "JetBrains Mono, monospace", color: COLORS.muted }}>{s.label}</div>
          </div>
        ))}
      </div>

      <a
        href="#work"
        className="mt-12 inline-flex items-center gap-2"
        style={{ color: COLORS.muted, fontSize: 12, letterSpacing: "0.2em", textDecoration: "none", fontFamily: "JetBrains Mono, monospace" }}
      >
        SEE THE WORK <ArrowDown size={14} style={{ animation: "float 2s ease-in-out infinite" }} />
      </a>

      <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
    </section>
  );
}

function FeaturedCard({ project }: { project: typeof FEATURED[0] }) {
  return (
    <div
      className="group relative overflow-hidden p-8"
      style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 20, transition: "all 0.25s ease" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = COLORS.cardHover; el.style.borderColor = COLORS.accent; el.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = COLORS.card; el.style.borderColor = COLORS.border; el.style.transform = ""; }}
    >
      <div className="flex items-start justify-between">
        <div className="text-4xl">{project.emoji}</div>
        <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: COLORS.muted }}>{project.meta}</span>
      </div>

      <h3 className="mt-5 text-2xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif", color: COLORS.text }}>
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: COLORS.muted, fontFamily: "Space Grotesk, sans-serif" }}>
        {project.desc}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold"
          style={{ background: COLORS.accent, color: "#fff", borderRadius: 10, fontSize: 13, textDecoration: "none", fontFamily: "Space Grotesk, sans-serif" }}
        >
          Live <ArrowUpRight size={14} />
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
          style={{ color: COLORS.text, fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: "Space Grotesk, sans-serif" }}
        >
          <Github size={15} /> Repo
        </a>
      </div>
    </div>
  );
}

function MoreCard({ project }: { project: (typeof MORE)[0] }) {
  return (
    <a
      href={project.demo || project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between p-6"
      style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, minHeight: 128, textDecoration: "none", transition: "all 0.2s ease" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = COLORS.accent; el.style.background = COLORS.cardHover; el.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = COLORS.border; el.style.background = COLORS.card; el.style.transform = ""; }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-bold" style={{ fontFamily: "Rajdhani, sans-serif", color: COLORS.text, fontSize: 18 }}>{project.name}</span>
        <span className="flex items-center gap-1.5" style={{ color: COLORS.accent }}>
          {typeof project.stars === "number" && (
            <span className="inline-flex items-center gap-1 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              <Star size={11} fill={COLORS.accent} color={COLORS.accent} /> {project.stars}
            </span>
          )}
          <ArrowUpRight size={14} />
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed" style={{ color: COLORS.muted, fontFamily: "Space Grotesk, sans-serif" }}>
        {project.desc}
      </p>
    </a>
  );
}

function Works() {
  return (
    <section id="work" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 90px" }}>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="text-xs tracking-[0.3em] mb-2" style={{ fontFamily: "JetBrains Mono, monospace", color: COLORS.accent }}>// WORK</div>
          <h2 className="text-4xl font-black" style={{ fontFamily: "Rajdhani, sans-serif", color: COLORS.text }}>Selected Work</h2>
        </div>
        <a
          href="https://github.com/xiangjianan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm"
          style={{ color: COLORS.muted, textDecoration: "none", fontFamily: "Space Grotesk, sans-serif" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = COLORS.text)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = COLORS.muted)}
        >
          View all on GitHub <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {FEATURED.map((p) => <FeaturedCard key={p.name} project={p} />)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MORE.map((p) => <MoreCard key={p.name} project={p} />)}
      </div>
    </section>
  );
}

function StackLine() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-8" style={{ borderTop: `1px solid ${COLORS.border}` }}>
      <span className="text-xs tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace", color: COLORS.muted }}>BUILT WITH</span>
      {["React", "TypeScript", "Node", "Python", "Tailwind", "Codex"].map((t) => (
        <span key={t} className="px-3 py-1 text-xs" style={{ border: `1px solid ${COLORS.border}`, borderRadius: 999, color: COLORS.text, fontFamily: "JetBrains Mono, monospace" }}>
          {t}
        </span>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: `1px solid ${COLORS.border}` }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: COLORS.muted }}>© {new Date().getFullYear()} xiangjianan · since 2020</span>
        <div className="flex items-center gap-5">
          <a href="https://github.com/xiangjianan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm" style={{ color: COLORS.muted, textDecoration: "none" }}>
            <Github size={15} /> github.com/xiangjianan
          </a>
          <a href="mailto:xiang9872@gmail.com" className="inline-flex items-center gap-1.5 text-sm" style={{ color: COLORS.muted, textDecoration: "none" }}>
            <Mail size={15} /> xiang9872@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: COLORS.bg, color: COLORS.text, fontFamily: "Space Grotesk, sans-serif" }}>
      <TopBar />
      <main className="flex-1">
        <Hero />
        <Works />
        <StackLine />
      </main>
      <Footer />
    </div>
  );
}
