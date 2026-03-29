/* ============================================================
   Home.tsx — J-Cyberpunk / Akira-Wave Design
   - Full landing page: Nav, Hero, About, Projects, Skills, Contact
   - Neon orange (oklch 0.72 0.22 42) + Electric cyan (oklch 0.82 0.18 195)
   - Rajdhani headings, Space Grotesk body, JetBrains Mono code
   - Mouse-follow glow, glitch text, diagonal cuts, clip-corner cards
   - 100% AI Built badge featured prominently
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import {
  Github, ExternalLink, Star, GitFork, MapPin, Users,
  Code2, Zap, Terminal, ChevronDown, Globe, Cpu, Sparkles, Bot, Mail
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const GITHUB_USER = {
  name: "xiangjianan",
  username: "xiangjianan",
  avatar: "https://avatars.githubusercontent.com/xiangjianan",
  bio: "Full-Stack Developer · Open Source Enthusiast · Creator",
  location: "UTC+8",
  followers: 118,
  following: 3,
  contributions: 272,
  github: "https://github.com/xiangjianan",
};

const PROJECTS = [
  {
    id: "lks",
    name: "lks",
    emoji: "📚",
    desc: "LKs Website Collection — A curated list of 303 high-quality websites, compiled from the popular Bilibili series by UP主 LKs.",
    lang: "CSS",
    stars: 442,
    forks: 69,
    url: "https://github.com/xiangjianan/lks",
    featured: true,
    color: "cyan",
  },
  {
    id: "lkszj",
    name: "lkszj",
    emoji: "🎨",
    desc: "\"Create Beauty\" Submission Platform — An online creative works submission site supporting multiple original content types.",
    lang: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/xiangjianan/lkszj",
    featured: false,
    color: "orange",
  },
  {
    id: "ai-daily-news",
    name: "ai-daily-news",
    emoji: "🤖",
    desc: "AI Daily News — Automatically aggregates AI technology news every day to keep you up to date with the latest in artificial intelligence.",
    lang: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/ai-daily-news",
    featured: false,
    color: "violet",
  },
  {
    id: "lks-api",
    name: "lks-api",
    emoji: "🔧",
    desc: "LKs Backend API Service — A high-performance data interface built with Django REST Framework powering the LKs website collection.",
    lang: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/lks-api",
    featured: false,
    color: "cyan",
  },
  {
    id: "game-find100",
    name: "game-find100",
    emoji: "🎯",
    desc: "Number Challenge — A puzzle mini-game where you click numbers in sequence, testing your visual acuity and reaction speed.",
    lang: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/game-find100",
    featured: false,
    color: "orange",
  },
  {
    id: "game-wechat-find100",
    name: "game-wechat-find100",
    emoji: "💬",
    desc: "WeChat Mini Game — A number-finding puzzle game based on Voronoi diagrams, built as a WeChat Mini Program.",
    lang: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/xiangjianan/game-wechat-find100",
    featured: false,
    color: "cyan",
  },
  {
    id: "kongming-chess",
    name: "kongming-chess",
    emoji: "♟️",
    desc: "Peg Solitaire — A web-based implementation of the classic peg solitaire board game, challenging your logical thinking.",
    lang: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/kongming-chess",
    featured: false,
    color: "violet",
  },
];

const SKILLS = [
  { name: "JavaScript / TypeScript", level: 88, category: "Frontend" },
  { name: "React / Vue", level: 82, category: "Frontend" },
  { name: "HTML / CSS", level: 92, category: "Frontend" },
  { name: "Python / Django", level: 78, category: "Backend" },
  { name: "Node.js / Express", level: 75, category: "Backend" },
  { name: "Git / GitHub", level: 90, category: "Tools" },
];

const LANG_COLORS: Record<string, string> = {
  CSS: "#563d7c",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  Python: "#3572A5",
  TypeScript: "#2b7489",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function GlitchTitle({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {text}
    </span>
  );
}

function CyberTag({ children, variant = "cyan" }: { children: React.ReactNode; variant?: "cyan" | "orange" | "violet" }) {
  const style =
    variant === "orange"
      ? { borderColor: "oklch(0.72 0.22 42 / 40%)", color: "oklch(0.72 0.22 42)", background: "oklch(0.72 0.22 42 / 8%)" }
      : variant === "violet"
      ? { borderColor: "oklch(0.58 0.28 290 / 40%)", color: "oklch(0.75 0.2 290)", background: "oklch(0.58 0.28 290 / 8%)" }
      : {};
  return (
    <span className="cyber-tag" style={style}>
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "oklch(0.82 0.18 195 / 70%)" }}>
        // {children}
      </span>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, oklch(0.82 0.18 195 / 30%), transparent)" }} />
    </div>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string | number; label: string; icon: React.ElementType }) {
  return (
    <div className="cyber-card clip-corner p-4 text-center">
      <Icon size={18} className="mx-auto mb-2" style={{ color: "oklch(0.82 0.18 195)" }} />
      <div className="text-2xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.72 0.22 42)" }}>
        {value}
      </div>
      <div className="text-xs mt-1" style={{ color: "oklch(0.6 0.04 220)", fontFamily: "JetBrains Mono, monospace" }}>
        {label}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const colorMap = {
    cyan:   { border: "oklch(0.82 0.18 195 / 40%)", glow: "oklch(0.82 0.18 195 / 15%)", text: "oklch(0.82 0.18 195)" },
    orange: { border: "oklch(0.72 0.22 42 / 40%)",  glow: "oklch(0.72 0.22 42 / 15%)",  text: "oklch(0.72 0.22 42)"  },
    violet: { border: "oklch(0.58 0.28 290 / 40%)", glow: "oklch(0.58 0.28 290 / 15%)", text: "oklch(0.75 0.2 290)"  },
  };
  const c = colorMap[project.color as keyof typeof colorMap];

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group" style={{ textDecoration: "none" }}>
      <div
        className="clip-corner h-full p-5 transition-all duration-300 relative overflow-hidden"
        style={{ background: "oklch(0.11 0.022 265 / 80%)", backdropFilter: "blur(12px)", border: `1px solid ${c.border}` }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = `0 0 24px ${c.glow}, 0 8px 32px oklch(0 0 0 / 40%)`;
          el.style.transform = "translateY(-6px)";
          el.style.borderColor = c.text;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = "";
          el.style.transform = "";
          el.style.borderColor = c.border;
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${c.text}, transparent)` }} />
        <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: "24px solid transparent", borderTop: `24px solid ${c.text}`, opacity: 0.4 }} />
        </div>

        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{project.emoji}</span>
            <h3 className="text-base font-bold tracking-wide" style={{ fontFamily: "Rajdhani, sans-serif", color: c.text }}>
              {project.name}
            </h3>
          </div>
          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: c.text }} />
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.04 220)" }}>
          {project.desc}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: LANG_COLORS[project.lang] || "#888" }} />
            <span className="text-xs" style={{ color: "oklch(0.6 0.04 220)", fontFamily: "JetBrains Mono, monospace" }}>
              {project.lang}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {project.stars > 0 && (
              <span className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.72 0.22 42)" }}>
                <Star size={11} fill="currentColor" /> {project.stars}
              </span>
            )}
            {project.forks > 0 && (
              <span className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.6 0.04 220)" }}>
                <GitFork size={11} /> {project.forks}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

function SkillBar({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(skill.level), index * 100); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, index]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: "oklch(0.85 0.01 220)" }}>{skill.name}</span>
        <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.82 0.18 195)" }}>{skill.level}%</span>
      </div>
      <div className="cyber-progress rounded-none">
        <div className="cyber-progress-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

// ─── Mouse glow ───────────────────────────────────────────────────────────────

function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current) { ref.current.style.left = `${e.clientX}px`; ref.current.style.top = `${e.clientY}px`; }
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <div ref={ref} className="fixed pointer-events-none z-0" style={{
      width: "600px", height: "600px", borderRadius: "50%",
      background: "radial-gradient(circle, oklch(0.82 0.18 195 / 4%) 0%, transparent 70%)",
      transform: "translate(-50%, -50%)", transition: "left 0.1s ease, top 0.1s ease",
    }} />
  );
}

// ─── Background ───────────────────────────────────────────────────────────────

function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 20% 50%, oklch(0.58 0.28 290 / 6%) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, oklch(0.82 0.18 195 / 5%) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, oklch(0.72 0.22 42 / 4%) 0%, transparent 50%)",
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(oklch(0.82 0.18 195 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.18 195 / 4%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
    </div>
  );
}

// ─── AI Built Banner ──────────────────────────────────────────────────────────

function AIBuiltBanner() {
  return (
    <div
      id="ai-banner"
      className="relative overflow-hidden py-2"
      style={{
        background: "oklch(0.07 0.018 265)",
        borderBottom: "1px solid oklch(0.82 0.18 195 / 15%)",
      }}
    >
      {/* Scrolling ticker — two identical copies side by side so the loop is seamless */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 28s linear infinite",
            willChange: "transform",
          }}
        >
          {/* Render two identical sets so the second seamlessly follows the first */}
          {[0, 1].map((set) => (
            <div key={set} style={{ display: "flex", alignItems: "center" }}>
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "0 24px",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Bot size={11} style={{ color: "oklch(0.72 0.22 42)", flexShrink: 0 }} />
                  <span style={{ color: "oklch(0.72 0.22 42)" }}>100% AI BUILT</span>
                  <span style={{ color: "oklch(0.5 0.04 220)" }}>·</span>
                  <Cpu size={11} style={{ color: "oklch(0.82 0.18 195)", flexShrink: 0 }} />
                  <span style={{ color: "oklch(0.82 0.18 195)" }}>DESIGNED BY MANUS & OPENCLAW</span>
                  <span style={{ color: "oklch(0.5 0.04 220)" }}>·</span>
                  <Sparkles size={11} style={{ color: "oklch(0.75 0.2 290)", flexShrink: 0 }} />
                  <span style={{ color: "oklch(0.75 0.2 290)" }}>ZERO HUMAN CODE</span>
                  <span style={{ color: "oklch(0.5 0.04 220)" }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [bannerHeight, setBannerHeight] = useState(0);

  // Measure the banner height so the navbar can sit directly below it initially
  useEffect(() => {
    const banner = document.getElementById("ai-banner");
    if (banner) setBannerHeight(banner.offsetHeight);
    const ro = new ResizeObserver(() => {
      if (banner) setBannerHeight(banner.offsetHeight);
    });
    if (banner) ro.observe(banner);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => {
      // Once user scrolls past the banner, snap navbar to top=0
      setScrolled(window.scrollY > bannerHeight);
      const ids = ["hero", "about", "projects", "skills", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className="fixed left-0 right-0 z-50"
      style={{
        top: scrolled ? 0 : bannerHeight,
        transition: "top 0.3s ease, background 0.3s ease",
        background: scrolled ? "oklch(0.07 0.018 265 / 97%)" : "oklch(0.07 0.018 265 / 85%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid oklch(0.82 0.18 195 / 15%)",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 40%)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <div className="w-8 h-8 clip-corner flex items-center justify-center text-xs font-bold"
            style={{ background: "oklch(0.72 0.22 42)", color: "oklch(0.07 0.018 265)", fontFamily: "Rajdhani, sans-serif" }}>
            XJ
          </div>
          <span className="font-bold tracking-widest text-sm hidden sm:block"
            style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.85 0.01 220)" }}>
            XIANGJIANAN
          </span>
        </button>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Nav links — hidden on mobile to prevent overflow */}
          <div className="hidden md:flex items-center gap-5">
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`nav-link ${active === item.id ? "active" : ""}`}>
                {item.label}
              </button>
            ))}
          </div>
          <a href="https://github.com/xiangjianan" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 clip-corner transition-all duration-300"
            style={{ border: "1px solid oklch(0.82 0.18 195 / 40%)", color: "oklch(0.82 0.18 195)", fontFamily: "Rajdhani, sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "oklch(0.82 0.18 195 / 10%)"; el.style.boxShadow = "0 0 12px oklch(0.82 0.18 195 / 30%)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = ""; el.style.boxShadow = ""; }}
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  const [lineIndex, setLineIndex] = useState(0);
  const [bootDone, setBootDone] = useState(false);

  const bootLines = [
    "> INITIALIZING SYSTEM...",
    "> LOADING USER PROFILE: xiangjianan",
    "> CONNECTING TO GITHUB API...",
    "> AI BUILD VERIFIED — 100% AUTONOMOUS",
    "> SYSTEM READY.",
  ];

  useEffect(() => {
    if (lineIndex < bootLines.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 380);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setBootDone(true), 300);
      return () => clearTimeout(t);
    }
  }, [lineIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "80px" }}>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663477683331/4sx3vvAvTnDT8BfZNUWKkp/hero-bg-QTc3JRDXbPjeqHMuV3dbNJ.webp)`,
        backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.25,
      }} />
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(to right, oklch(0.07 0.018 265) 30%, oklch(0.07 0.018 265 / 60%) 60%, oklch(0.07 0.018 265 / 20%) 100%), linear-gradient(to top, oklch(0.07 0.018 265) 0%, transparent 40%)",
      }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Boot terminal */}
            <div className="mb-8 p-3 clip-corner" style={{
              background: "oklch(0.07 0.018 265 / 80%)", border: "1px solid oklch(0.82 0.18 195 / 20%)",
              fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: "oklch(0.82 0.18 195 / 70%)", minHeight: "100px",
            }}>
              {bootLines.slice(0, lineIndex).map((line, i) => (
                <div key={i} style={{ opacity: i < lineIndex - 1 ? 0.5 : 1, color: line.includes("AI BUILD") ? "oklch(0.72 0.22 42)" : undefined }}>
                  {line}
                </div>
              ))}
              {!bootDone && <span style={{ animation: "blink 1s infinite" }}>█</span>}
            </div>

            {/* Title */}
            <div style={{ opacity: bootDone ? 1 : 0, transform: bootDone ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
              <div className="text-sm tracking-[0.4em] uppercase mb-2" style={{ color: "oklch(0.72 0.22 42)", fontFamily: "JetBrains Mono, monospace" }}>
                // FULL-STACK DEVELOPER
              </div>
              <h1 className="font-black leading-none mb-1" style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", color: "oklch(0.92 0.01 220)", letterSpacing: "0.05em" }}>
                <GlitchTitle text="XIANG" />
              </h1>
              <h1 className="font-black leading-none" style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "0.05em" }}>
                <span className="neon-cyan">JIANAN</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base mb-6 max-w-md leading-relaxed mt-4" style={{ color: "oklch(0.65 0.04 220)", opacity: bootDone ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
              Full-stack developer passionate about building useful open-source projects —
              from website collections to AI news aggregators, creating value through code.
            </p>

            {/* AI Built badge */}
            <div className="mb-6" style={{ opacity: bootDone ? 1 : 0, transition: "opacity 0.6s ease 0.25s" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 clip-corner" style={{
                background: "linear-gradient(135deg, oklch(0.72 0.22 42 / 12%), oklch(0.82 0.18 195 / 12%))",
                border: "1px solid oklch(0.72 0.22 42 / 50%)",
                boxShadow: "0 0 20px oklch(0.72 0.22 42 / 15%), 0 0 40px oklch(0.82 0.18 195 / 8%)",
              }}>
                <Bot size={14} style={{ color: "oklch(0.72 0.22 42)" }} />
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: "oklch(0.72 0.22 42)", letterSpacing: "0.15em" }}>
                  100% AI BUILT
                </span>
                <span style={{ color: "oklch(0.5 0.04 220)", fontSize: "0.65rem", fontFamily: "JetBrains Mono, monospace" }}>·</span>
                <Cpu size={12} style={{ color: "oklch(0.82 0.18 195)" }} />
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: "oklch(0.82 0.18 195)", letterSpacing: "0.1em" }}>
                  POWERED BY MANUS & OPENCLAW
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8" style={{ opacity: bootDone ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}>
              <CyberTag>JavaScript</CyberTag>
              <CyberTag variant="orange">Python</CyberTag>
              <CyberTag variant="violet">Django</CyberTag>
              <CyberTag>React</CyberTag>
              <CyberTag variant="orange">CSS</CyberTag>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4" style={{ opacity: bootDone ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}>
              <a href="https://github.com/xiangjianan" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 clip-corner font-bold tracking-widest text-sm transition-all duration-300"
                style={{ background: "oklch(0.72 0.22 42)", color: "oklch(0.07 0.018 265)", fontFamily: "Rajdhani, sans-serif", textTransform: "uppercase" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 0 20px oklch(0.72 0.22 42 / 50%)"; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = ""; el.style.transform = ""; }}
              >
                <Github size={16} /> View GitHub
              </a>
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 clip-corner font-bold tracking-widest text-sm transition-all duration-300"
                style={{ border: "1px solid oklch(0.82 0.18 195 / 50%)", color: "oklch(0.82 0.18 195)", fontFamily: "Rajdhani, sans-serif", textTransform: "uppercase" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "oklch(0.82 0.18 195 / 10%)"; el.style.boxShadow = "0 0 16px oklch(0.82 0.18 195 / 30%)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = ""; el.style.boxShadow = ""; }}
              >
                <Code2 size={16} /> Browse Projects
              </button>
            </div>
          </div>

          {/* Right: Avatar + stats */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            <div className="relative animate-float">
              <div className="absolute -inset-4 rounded-full" style={{ border: "1px solid oklch(0.82 0.18 195 / 20%)", animation: "rotate-slow 20s linear infinite" }}>
                {[0, 90, 180, 270].map((deg) => (
                  <div key={deg} className="absolute w-2 h-2" style={{ top: "50%", left: "50%", transform: `rotate(${deg}deg) translateX(calc(50% + 12px)) translateY(-50%)` }}>
                    <div className="w-1 h-1 rounded-full" style={{ background: "oklch(0.82 0.18 195)" }} />
                  </div>
                ))}
              </div>
              <div className="relative w-48 h-48 overflow-hidden" style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                border: "2px solid oklch(0.82 0.18 195 / 40%)",
                boxShadow: "0 0 30px oklch(0.82 0.18 195 / 20%), 0 0 60px oklch(0.72 0.22 42 / 10%)",
              }}>
                <img src={GITHUB_USER.avatar} alt={GITHUB_USER.name} className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=XJ&background=0d1b2a&color=00d4ff&size=200"; }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.82 0.18 195 / 5%) 50%, transparent 100%)", animation: "scan-line 3s linear infinite" }} />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 clip-corner text-xs" style={{
                background: "oklch(0.07 0.018 265)", border: "1px solid oklch(0.72 0.22 42 / 60%)", color: "oklch(0.72 0.22 42)", fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap",
              }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5" style={{ background: "oklch(0.72 0.22 42)", boxShadow: "0 0 6px oklch(0.72 0.22 42)" }} />
                ONLINE · UTC+8
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              <StatCard value={GITHUB_USER.followers} label="FOLLOWERS" icon={Users} />
              <StatCard value={GITHUB_USER.contributions} label="COMMITS" icon={Zap} />
              <StatCard value="11" label="REPOS" icon={Code2} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.82 0.18 195)" }}>SCROLL</span>
          <ChevronDown size={16} style={{ color: "oklch(0.82 0.18 195)", animation: "float 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="container">
        <SectionLabel>ABOUT ME</SectionLabel>
        <h2 className="text-4xl font-black mb-12" style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.92 0.01 220)" }}>
          About <span className="neon-orange">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="cyber-card clip-corner p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={16} style={{ color: "oklch(0.82 0.18 195)" }} />
                <span className="text-xs tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.82 0.18 195 / 70%)" }}>user.profile</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.7 0.04 220)" }}>
                I'm <span className="neon-cyan font-semibold">xiangjianan</span>, a full-stack developer who loves open source.
                I focus on building practical and fun web applications — from website recommendation collections
                to AI news aggregators, every project is an exploration of technology's boundaries.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.7 0.04 220)" }}>
                Over the past year, I've made <span className="neon-orange font-semibold">272 commits</span> on GitHub,
                created <span className="neon-orange font-semibold">11 repositories</span>, and my
                <span className="neon-cyan font-semibold"> lks project</span> has earned 442 stars —
                making it my most popular open-source work.
              </p>
            </div>

            {/* AI Built card */}
            <div className="clip-corner p-6 relative overflow-hidden" style={{
              background: "linear-gradient(135deg, oklch(0.11 0.022 265 / 90%), oklch(0.13 0.03 265 / 80%))",
              border: "1px solid oklch(0.72 0.22 42 / 35%)",
              boxShadow: "0 0 30px oklch(0.72 0.22 42 / 8%)",
            }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 42 / 70%), transparent)" }} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 clip-corner flex items-center justify-center" style={{ background: "oklch(0.72 0.22 42 / 15%)", border: "1px solid oklch(0.72 0.22 42 / 40%)" }}>
                  <Bot size={16} style={{ color: "oklch(0.72 0.22 42)" }} />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-widest" style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.72 0.22 42)", textTransform: "uppercase" }}>
                    100% AI Built
                  </div>
                  <div className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.5 0.04 220)" }}>
                    Designed & Developed by MANUS & OpenClaw
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.04 220)" }}>
                This entire website — every line of code, every design decision, every animation —
                was autonomously created by <span style={{ color: "oklch(0.82 0.18 195)" }}>MANUS & OpenClaw</span> without
                any human-written code. From fetching GitHub data to crafting the cyberpunk aesthetic,
                it's a testament to what AI can build end-to-end.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <CyberTag variant="orange">React 19</CyberTag>
                <CyberTag>Tailwind CSS 4</CyberTag>
                <CyberTag variant="violet">Framer Motion</CyberTag>
                <CyberTag variant="orange">TypeScript</CyberTag>
                <CyberTag>MANUS</CyberTag>
                <CyberTag variant="violet">OpenClaw</CyberTag>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "LOCATION", value: "UTC+8", icon: MapPin },
                { label: "GITHUB", value: "@xiangjianan", icon: Github },
                { label: "FOCUS", value: "Web Development", icon: Code2 },
                { label: "STATUS", value: "Open to Collab", icon: Zap },
              ].map((item) => (
                <div key={item.label} className="clip-corner p-4 flex items-center gap-3"
                  style={{ background: "oklch(0.11 0.022 265 / 60%)", border: "1px solid oklch(0.82 0.18 195 / 15%)" }}>
                  <item.icon size={16} style={{ color: "oklch(0.82 0.18 195)", flexShrink: 0 }} />
                  <div>
                    <div className="text-xs" style={{ color: "oklch(0.5 0.04 220)", fontFamily: "JetBrains Mono, monospace" }}>{item.label}</div>
                    <div className="text-sm font-medium" style={{ color: "oklch(0.85 0.01 220)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Activity */}
          <div className="lg:col-span-2">
            <div className="cyber-card clip-corner p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Zap size={16} style={{ color: "oklch(0.72 0.22 42)" }} />
                <span className="text-xs tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.72 0.22 42 / 70%)" }}>recent.activity</span>
              </div>
              <div className="space-y-4">
                {[
                  { repo: "kongming-chess", lang: "HTML", time: "Mar 2026" },
                  { repo: "skill-map", lang: "JavaScript", time: "Mar 2026" },
                  { repo: "ai-daily-news", lang: "HTML", time: "Mar 2026" },
                  { repo: "lks-api", lang: "Python", time: "Mar 2026" },
                  { repo: "game-wechat-find100", lang: "JavaScript", time: "Mar 2026" },
                  { repo: "game-find100", lang: "JavaScript", time: "Mar 2026" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "oklch(0.82 0.18 195)", boxShadow: "0 0 6px oklch(0.82 0.18 195)" }} />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium truncate block" style={{ color: "oklch(0.82 0.18 195)", fontFamily: "JetBrains Mono, monospace" }}>{item.repo}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full" style={{ background: LANG_COLORS[item.lang] || "#888" }} />
                      <span className="text-xs" style={{ color: "oklch(0.5 0.04 220)", fontFamily: "JetBrains Mono, monospace" }}>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 text-center" style={{ borderTop: "1px solid oklch(0.82 0.18 195 / 15%)" }}>
                <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.5 0.04 220)" }}>
                  272 contributions in the last year
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.18 195 / 30%), oklch(0.72 0.22 42 / 30%), transparent)" }} />
      <div className="container">
        <SectionLabel>PROJECTS</SectionLabel>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-black" style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.92 0.01 220)" }}>
            Open Source <span className="neon-cyan">Projects</span>
          </h2>
          <a href="https://github.com/xiangjianan?tab=repositories" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: "oklch(0.82 0.18 195 / 60%)", fontFamily: "JetBrains Mono, monospace" }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "oklch(0.82 0.18 195)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "oklch(0.82 0.18 195 / 60%)"}>
            View All <ExternalLink size={12} />
          </a>
        </div>

        {/* Featured */}
        <div className="mb-6">
          <a href={PROJECTS[0].url} target="_blank" rel="noopener noreferrer" className="block group" style={{ textDecoration: "none" }}>
            <div className="relative overflow-hidden p-8 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, oklch(0.11 0.022 265 / 90%) 0%, oklch(0.14 0.025 265 / 80%) 100%)",
                backdropFilter: "blur(12px)", border: "1px solid oklch(0.82 0.18 195 / 30%)",
                clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "oklch(0.82 0.18 195 / 60%)"; el.style.boxShadow = "0 0 40px oklch(0.82 0.18 195 / 15%)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "oklch(0.82 0.18 195 / 30%)"; el.style.boxShadow = ""; }}
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663477683331/4sx3vvAvTnDT8BfZNUWKkp/project-card-bg-RbRrV9YYN8YY7KQLzuQx6n.webp)`, backgroundSize: "cover" }} />
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.18 195 / 80%), transparent)" }} />
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0" style={{ borderLeft: "32px solid transparent", borderTop: "32px solid oklch(0.82 0.18 195 / 50%)" }} />
              </div>
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{PROJECTS[0].emoji}</span>
                    <div>
                      <div className="text-xs tracking-widest mb-1" style={{ color: "oklch(0.72 0.22 42)", fontFamily: "JetBrains Mono, monospace" }}>FEATURED PROJECT</div>
                      <h3 className="text-2xl font-black tracking-wide neon-cyan" style={{ fontFamily: "Rajdhani, sans-serif" }}>{PROJECTS[0].name}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.7 0.04 220)" }}>{PROJECTS[0].desc}</p>
                  <div className="flex items-center gap-4">
                    <CyberTag>CSS</CyberTag>
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: "oklch(0.72 0.22 42)" }}><Star size={14} fill="currentColor" /> {PROJECTS[0].stars} Stars</span>
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: "oklch(0.6 0.04 220)" }}><GitFork size={14} /> {PROJECTS[0].forks} Forks</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 clip-corner text-sm font-bold tracking-widest transition-all duration-300 flex-shrink-0"
                  style={{ border: "1px solid oklch(0.82 0.18 195 / 50%)", color: "oklch(0.82 0.18 195)", fontFamily: "Rajdhani, sans-serif", textTransform: "uppercase" }}>
                  <ExternalLink size={14} /> View Project
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.slice(1).map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────

function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 42 / 30%), oklch(0.82 0.18 195 / 30%), transparent)" }} />
      <div className="container">
        <SectionLabel>SKILLS</SectionLabel>
        <h2 className="text-4xl font-black mb-12" style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.92 0.01 220)" }}>
          Tech <span className="neon-orange">Stack</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="cyber-card clip-corner p-6">
              <div className="flex items-center gap-2 mb-6">
                <Code2 size={16} style={{ color: "oklch(0.72 0.22 42)" }} />
                <span className="text-xs tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.72 0.22 42 / 70%)" }}>skill.matrix</span>
              </div>
              {SKILLS.map((s, i) => <SkillBar key={s.name} skill={s} index={i} />)}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { category: "Frontend", icon: Globe, color: "cyan", items: ["HTML5 / CSS3", "JavaScript ES2024", "TypeScript", "React", "Vue.js", "Tailwind CSS"] },
              { category: "Backend", icon: Terminal, color: "orange", items: ["Python", "Django REST Framework", "Node.js", "Express.js"] },
              { category: "Tools & Others", icon: Zap, color: "violet", items: ["Git / GitHub", "VS Code", "Linux", "RESTful API"] },
            ].map((cat) => {
              const colorMap = {
                cyan:   { border: "oklch(0.82 0.18 195 / 25%)", icon: "oklch(0.82 0.18 195)", tag: "cyan" as const },
                orange: { border: "oklch(0.72 0.22 42 / 25%)",  icon: "oklch(0.72 0.22 42)",  tag: "orange" as const },
                violet: { border: "oklch(0.58 0.28 290 / 25%)", icon: "oklch(0.75 0.2 290)",  tag: "violet" as const },
              };
              const c = colorMap[cat.color as keyof typeof colorMap];
              return (
                <div key={cat.category} className="clip-corner p-5" style={{ background: "oklch(0.11 0.022 265 / 60%)", border: `1px solid ${c.border}` }}>
                  <div className="flex items-center gap-2 mb-4">
                    <cat.icon size={15} style={{ color: c.icon }} />
                    <span className="text-sm font-bold tracking-widest" style={{ fontFamily: "Rajdhani, sans-serif", color: c.icon, textTransform: "uppercase" }}>{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => <CyberTag key={item} variant={c.tag}>{item}</CyberTag>)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 pb-32">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.18 195 / 30%), transparent)" }} />
      <div className="container">
        <SectionLabel>CONTACT</SectionLabel>
        <h2 className="text-4xl font-black mb-4" style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.92 0.01 220)" }}>
          Establish <span className="neon-cyan">Connection</span>
        </h2>
        <p className="text-sm mb-12 max-w-lg" style={{ color: "oklch(0.6 0.04 220)" }}>
          Have an interesting project to collaborate on, or just want to say hello?
          Feel free to reach out via GitHub or Email.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {[
            {
              href: "https://github.com/xiangjianan",
              icon: Github,
              label: "GitHub",
              sub: "@xiangjianan",
              border: "oklch(0.82 0.18 195 / 25%)",
              hoverBorder: "oklch(0.82 0.18 195 / 60%)",
              hoverGlow: "oklch(0.82 0.18 195 / 15%)",
              iconColor: "oklch(0.82 0.18 195)",
            },
            {
              href: "mailto:xiang9872@126.com",
              icon: Mail,
              label: "Email",
              sub: "xiang9872@126.com",
              border: "oklch(0.8 0.15 150 / 25%)",
              hoverBorder: "oklch(0.8 0.15 150 / 60%)",
              hoverGlow: "oklch(0.8 0.15 150 / 15%)",
              iconColor: "oklch(0.8 0.15 150)",
            },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block" style={{ textDecoration: "none" }}>
              <div className="clip-corner p-6 transition-all duration-300"
                style={{ background: "oklch(0.11 0.022 265 / 80%)", border: `1px solid ${item.border}` }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = item.hoverBorder; el.style.boxShadow = `0 0 20px ${item.hoverGlow}`; el.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = item.border; el.style.boxShadow = ""; el.style.transform = ""; }}
              >
                <item.icon size={24} className="mb-3" style={{ color: item.iconColor }} />
                <div className="text-base font-bold mb-1" style={{ fontFamily: "Rajdhani, sans-serif", color: "oklch(0.85 0.01 220)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</div>
                <div className="text-sm" style={{ color: "oklch(0.6 0.04 220)", fontFamily: "JetBrains Mono, monospace" }}>{item.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative py-8" style={{ borderTop: "1px solid oklch(0.82 0.18 195 / 10%)" }}>
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 clip-corner flex items-center justify-center text-xs font-bold"
            style={{ background: "oklch(0.72 0.22 42)", color: "oklch(0.07 0.018 265)", fontFamily: "Rajdhani, sans-serif" }}>
            XJ
          </div>
          <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.5 0.04 220)" }}>xiangjianan</span>
        </div>

        {/* AI Built footer badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 clip-corner"
          style={{ border: "1px solid oklch(0.72 0.22 42 / 30%)", background: "oklch(0.72 0.22 42 / 5%)" }}>
          <Bot size={11} style={{ color: "oklch(0.72 0.22 42)" }} />
          <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "oklch(0.72 0.22 42 / 80%)", letterSpacing: "0.1em" }}>
            100% AI BUILT · MANUS & OPENCLAW · {new Date().getFullYear()}
          </span>
        </div>

        <a href="https://github.com/xiangjianan" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs transition-colors"
          style={{ color: "oklch(0.5 0.04 220)", fontFamily: "JetBrains Mono, monospace" }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "oklch(0.82 0.18 195)"}
          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "oklch(0.5 0.04 220)"}>
          <Github size={12} /> github.com/xiangjianan
        </a>
      </div>
    </footer>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: "oklch(0.07 0.018 265)" }}>
      <CyberBackground />
      <MouseGlow />
      <AIBuiltBanner />
      <Navbar />
      <main className="flex-1" style={{ paddingTop: 0 }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
