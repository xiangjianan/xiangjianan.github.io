/* ============================================================
   Home.tsx — Minimal, works-first landing (pure white)
   - Pure white base, near-black ink, thin 1px hairlines.
   - Editorial/premium feel: generous whitespace, restrained type.
   - Big-type hero for first-open impact, then straight into the work.
   - Featured: mini-desk + taptap. The rest in a compact grid.
   - All work links open in a new tab.
   ============================================================ */

import { ArrowDown, ArrowUpRight, Github, Mail, Star } from "lucide-react";

const C = {
  bg: "#ffffff",
  ink: "#0a0a0a",
  muted: "#8a8a8a",
  line: "#e8e8ea",
  card: "#ffffff",
  cardHover: "#fafafa",
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

const mono = { fontFamily: "JetBrains Mono, monospace" };
const sans = { fontFamily: "Space Grotesk, sans-serif" };

function TopBar() {
  return (
    <header
      className="fixed left-0 right-0 z-50"
      style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: `1px solid ${C.line}` }}
    >
      <div className="flex items-center justify-between" style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 28px" }}>
        <div className="flex items-center gap-3">
          <span className="font-medium" style={{ ...sans, color: C.ink, fontSize: 15, letterSpacing: "0.02em" }}>xiangjianan</span>
        </div>
        <a
          href="https://github.com/xiangjianan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
          style={{ ...mono, color: C.muted, fontSize: 12, letterSpacing: "0.06em", textDecoration: "none" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.ink)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
        >
          GitHub <ArrowUpRight size={13} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center" style={{ minHeight: "100vh", padding: "120px 24px 72px" }}>
      <div style={{ ...mono, color: C.muted, fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 32 }}>
        AI-Native Builder · Open-Source
      </div>

      <h1 style={{ ...sans, color: C.ink, fontSize: "clamp(3.5rem, 12vw, 8.5rem)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 0.95, margin: 0 }}>
        xiangjianan
      </h1>

      <p style={{ ...sans, color: C.muted, fontSize: 19, fontWeight: 300, marginTop: 24 }}>
        I build tools I actually use.
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: 36 }}>
        {["mini-desk", "taptap", "lks · 449★"].map((chip, i) => (
          <span
            key={chip}
            className="inline-flex items-center gap-2"
            style={{ border: `1px solid ${C.line}`, borderRadius: 999, padding: "8px 18px", color: C.ink, fontSize: 13, ...mono }}
          >
            {i === 2 && <Star size={12} fill={C.ink} color={C.ink} />}
            {chip}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, width: "min(640px, 100%)", marginTop: 48 }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: "22px 12px", borderRight: i < 2 ? `1px solid ${C.line}` : "none" }}>
            <div style={{ ...sans, color: C.ink, fontSize: 28, fontWeight: 600 }}>{s.value}</div>
            <div style={{ ...mono, color: C.muted, fontSize: 11, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <a href="#work" className="inline-flex items-center gap-2" style={{ ...mono, color: C.muted, fontSize: 12, letterSpacing: "0.2em", textDecoration: "none", marginTop: 44 }}>
        SEE THE WORK <ArrowDown size={14} style={{ animation: "float 2s ease-in-out infinite" }} />
      </a>

      <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
    </section>
  );
}

function FeaturedCard({ project }: { project: typeof FEATURED[0] }) {
  return (
    <div
      className="group relative p-10"
      style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 20, transition: "border-color 0.25s ease, transform 0.25s ease" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#d4d4d8"; el.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.line; el.style.transform = ""; }}
    >
      <div className="flex items-start justify-between">
        <div style={{ fontSize: 40 }}>{project.emoji}</div>
        <span style={{ ...mono, color: C.muted, fontSize: 11 }}>{project.meta}</span>
      </div>

      <h3 style={{ ...mono, color: C.ink, fontSize: 22, fontWeight: 500, marginTop: 28, marginBottom: 0 }}>{project.name}</h3>
      <p style={{ ...sans, color: C.muted, fontSize: 14, lineHeight: 1.6, marginTop: 10, maxWidth: 460 }}>{project.desc}</p>

      <div className="flex items-center gap-6" style={{ marginTop: 32 }}>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
          style={{ background: C.ink, color: "#fff", borderRadius: 999, padding: "10px 20px", fontSize: 13, fontWeight: 500, textDecoration: "none", ...sans }}
        >
          Live <ArrowUpRight size={14} />
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
          style={{ ...mono, color: C.muted, fontSize: 13, textDecoration: "none" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.ink)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
        >
          Repo <ArrowUpRight size={13} />
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
      style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, minHeight: 132, textDecoration: "none", transition: "border-color 0.2s ease, transform 0.2s ease" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#d4d4d8"; el.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.line; el.style.transform = ""; }}
    >
      <div className="flex items-start justify-between gap-3">
        <span style={{ ...mono, color: C.ink, fontSize: 15, fontWeight: 500 }}>{project.name}</span>
        <span className="inline-flex items-center gap-1.5" style={{ color: C.ink }}>
          {typeof project.stars === "number" && (
            <span className="inline-flex items-center gap-1" style={{ ...mono, fontSize: 12 }}>
              <Star size={11} fill={C.ink} color={C.ink} /> {project.stars}
            </span>
          )}
          <ArrowUpRight size={14} />
        </span>
      </div>
      <p style={{ ...sans, color: C.muted, fontSize: 12.5, lineHeight: 1.5, marginTop: 10 }}>{project.desc}</p>
    </a>
  );
}

function Works() {
  return (
    <section id="work" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 28px 110px" }}>
      <div className="mb-10 flex items-end justify-between" style={{ borderBottom: `1px solid ${C.line}`, paddingBottom: 20 }}>
        <div>
          <div style={{ ...mono, color: C.muted, fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8 }}>Work</div>
          <h2 style={{ ...sans, color: C.ink, fontSize: 36, fontWeight: 500, letterSpacing: "-0.01em", margin: 0 }}>Selected Work</h2>
        </div>
        <a
          href="https://github.com/xiangjianan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
          style={{ ...mono, color: C.muted, fontSize: 12, textDecoration: "none" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.ink)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
        >
          View all on GitHub <ArrowUpRight size={13} />
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
    <div className="flex flex-wrap items-center justify-center gap-3" style={{ borderTop: `1px solid ${C.line}`, padding: "36px 28px" }}>
      <span style={{ ...mono, color: C.muted, fontSize: 11, letterSpacing: "0.2em" }}>BUILT WITH</span>
      {["React", "TypeScript", "Node", "Python", "Tailwind", "Codex"].map((t) => (
        <span key={t} style={{ border: `1px solid ${C.line}`, borderRadius: 999, padding: "5px 14px", color: C.ink, fontSize: 12, ...mono }}>{t}</span>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.line}` }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ maxWidth: 1200, margin: "0 auto", padding: "28px" }}>
        <span style={{ ...mono, color: C.muted, fontSize: 12 }}>© {new Date().getFullYear()} xiangjianan · since 2020</span>
        <div className="flex items-center gap-6">
          <a href="https://github.com/xiangjianan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5" style={{ ...mono, color: C.muted, fontSize: 12, textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.ink)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}>
            <Github size={14} /> github.com/xiangjianan
          </a>
          <a href="mailto:xiang9872@gmail.com" className="inline-flex items-center gap-1.5" style={{ ...mono, color: C.muted, fontSize: 12, textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.ink)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}>
            <Mail size={14} /> xiang9872@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: C.bg, color: C.ink, ...sans }}>
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
