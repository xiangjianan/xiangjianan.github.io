import { useEffect, useMemo, useState } from "react";
import type { ElementType, ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  GitFork,
  Github,
  Globe,
  Layers3,
  Mail,
  MapPin,
  Play,
  Rocket,
  Sparkles,
  Star,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

const GITHUB_USER = {
  name: "xiangjianan",
  username: "xiangjianan",
  avatar: "https://avatars.githubusercontent.com/xiangjianan",
  bio: "Full-Stack Developer · Open Source Enthusiast · Creator",
  location: "UTC+8",
  followers: 119,
  following: 2,
  commits: 895,
  yearlyContributions: 944,
  repoCount: 14,
  github: "https://github.com/xiangjianan",
};

const PROJECTS = [
  {
    id: "lks",
    name: "lks",
    desc: "LKs Website Collection - A curated list of 303 high-quality websites, compiled from the popular Bilibili series by LKs.",
    lang: "CSS",
    stars: 446,
    forks: 69,
    url: "https://github.com/xiangjianan/lks",
    featured: true,
    color: "peach",
  },
  {
    id: "mini-desk",
    name: "mini-desk",
    desc: "Mini Desk - A local-first personal workspace for notes, reminders, quick actions, screenshots, and everyday tools.",
    lang: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/mini-desk",
    featured: false,
    color: "violet",
  },
  {
    id: "game-wechat-find100",
    name: "game-wechat-find100",
    desc: "WeChat Mini Game - A number-finding puzzle game based on Voronoi diagrams, built as a WeChat Mini Program.",
    lang: "JavaScript",
    stars: 2,
    forks: 1,
    url: "https://github.com/xiangjianan/game-wechat-find100",
    featured: false,
    color: "mint",
  },
  {
    id: "jindou-blog",
    name: "jindou-blog",
    desc: "Jindou Blog - AI notes covering AI research, explainers, and technical writing.",
    lang: "MDX",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/jindou-blog",
    featured: false,
    color: "peach",
  },
  {
    id: "ai-daily-news",
    name: "ai-daily-news",
    desc: "AI Daily News - Automatically aggregates AI technology news every day to keep you up to date with the latest in artificial intelligence.",
    lang: "HTML",
    stars: 1,
    forks: 0,
    url: "https://github.com/xiangjianan/ai-daily-news",
    featured: false,
    color: "violet",
  },
  {
    id: "send-msg",
    name: "send-msg",
    desc: "Send Msg - A LAN real-time message broadcasting service built with WebSocket and Express.",
    lang: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/send-msg",
    featured: false,
    color: "mint",
  },
  {
    id: "lks-api",
    name: "lks-api",
    desc: "LKs Backend API Service - A Django REST Framework data interface powering the LKs website collection.",
    lang: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/xiangjianan/lks-api",
    featured: false,
    color: "peach",
  },
];

const SKILLS = [
  { name: "TypeScript", level: 32, category: "GitHub" },
  { name: "HTML / CSS", level: 24, category: "GitHub" },
  { name: "MDX / Astro", level: 17, category: "GitHub" },
  { name: "JavaScript", level: 16, category: "GitHub" },
  { name: "Vue", level: 10, category: "GitHub" },
  { name: "Python / Django", level: 1, category: "GitHub" },
];

const LANG_COLORS: Record<string, string> = {
  CSS: "#7c5cff",
  JavaScript: "#f7df1e",
  HTML: "#ff7a59",
  MDX: "#fcb32c",
  Python: "#5ca8ff",
  TypeScript: "#4fb5ff",
  Vue: "#41b883",
};

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

function SectionHeader({
  icon: Icon,
  title,
  intro,
}: {
  icon: ElementType;
  title: string;
  intro: string;
}) {
  return (
    <div className="section-header reveal-on-scroll">
      <div className="section-mark" aria-hidden="true">
        <Icon size={22} />
      </div>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

function GradientButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a className={secondary ? "button button-secondary" : "button button-primary"} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function StatPill({ value, label, icon: Icon }: { value: string | number; label: string; icon: ElementType }) {
  return (
    <div className="stat-pill">
      <Icon size={16} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = ["hero", ...NAV_ITEMS.map((item) => item.id)];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <a className="brand" href="#hero" onClick={(event) => {
        event.preventDefault();
        scrollToSection("hero");
      }}>
        <span className="brand-mark">
          <Rocket size={18} />
        </span>
        <span>xiangjianan</span>
      </a>

      <nav className="nav-pill" aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={active === item.id ? "active" : ""}
            type="button"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <a className="nav-action" href={GITHUB_USER.github} target="_blank" rel="noopener noreferrer">
        <Github size={16} />
        <span>GitHub</span>
      </a>
    </header>
  );
}

function HeroShowcase() {
  const recentActivity = [
    { repo: "lks", lang: "CSS", time: "Jun 2026", done: true },
    { repo: "mini-desk", lang: "TypeScript", time: "Jun 2026", done: true },
    { repo: "ai-daily-news", lang: "HTML", time: "Jun 2026", done: true },
    { repo: "xiangjianan.github.io", lang: "TypeScript", time: "May 2026", done: false },
  ];

  return (
    <div className="showcase-shell" aria-label="GitHub activity preview">
      <aside className="showcase-sidebar">
        <div className="showcase-profile">
          <img src={GITHUB_USER.avatar} alt={GITHUB_USER.name} />
          <div>
            <strong>{GITHUB_USER.username}</strong>
            <span>{GITHUB_USER.bio}</span>
          </div>
        </div>
        {["Home", "Projects", "Activity", "Tooling"].map((item, index) => (
          <div key={item} className={index === 1 ? "sidebar-row active" : "sidebar-row"}>
            {index === 0 && <Globe size={16} />}
            {index === 1 && <Layers3 size={16} />}
            {index === 2 && <Zap size={16} />}
            {index === 3 && <Terminal size={16} />}
            <span>{item}</span>
          </div>
        ))}
      </aside>

      <div className="showcase-main">
        <div className="showcase-hero-card">
          <div>
            <span>Featured repository</span>
            <h3>{PROJECTS[0].name}</h3>
            <p>{PROJECTS[0].desc}</p>
          </div>
          <a href={PROJECTS[0].url} target="_blank" rel="noopener noreferrer" aria-label="Open featured project">
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="course-panel">
          <div className="course-topline">
            <span>Current focus</span>
            <strong>Open source systems</strong>
          </div>
          {recentActivity.map((item) => (
            <div className={item.done ? "activity-row complete" : "activity-row"} key={item.repo}>
              <span className="activity-status">
                {item.done ? <CheckCircle2 size={16} /> : <Play size={16} />}
              </span>
              <div>
                <strong>{item.repo}</strong>
                <span>{item.lang} / {item.time}</span>
              </div>
              <span className="language-dot" style={{ background: LANG_COLORS[item.lang] || "#9c8fb5" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-copy">
        <div className="hero-badge">
          <Sparkles size={15} />
          <span>100% AI BUILT</span>
          <small>MANUS + OPENCLAW</small>
        </div>
        <h1>
          xiangjianan
        </h1>
        <p>
          Builds useful open-source web systems: practical web products, curated knowledge systems,
          AI automation, and small tools that turn everyday workflows into cleaner software.
        </p>
        <div className="hero-actions">
          <GradientButton href={GITHUB_USER.github}>
            <Github size={18} />
            View GitHub
          </GradientButton>
          <a className="button button-secondary" href="#projects" onClick={(event) => {
            event.preventDefault();
            scrollToSection("projects");
          }}>
            Browse Projects
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="hero-stats" aria-label="GitHub profile stats">
          <StatPill value={GITHUB_USER.followers} label="Followers" icon={Users} />
          <StatPill value={GITHUB_USER.commits} label="Commits" icon={Zap} />
          <StatPill value={GITHUB_USER.repoCount} label="Repos" icon={Code2} />
        </div>
      </div>

      <HeroShowcase />
    </section>
  );
}

function AboutSection() {
  const recentActivity = {
    label: "recent.activity",
    items: [
      { repo: "lks", lang: "CSS", time: "Jun 2026" },
      { repo: "mini-desk", lang: "TypeScript", time: "Jun 2026" },
      { repo: "ai-daily-news", lang: "HTML", time: "Jun 2026" },
      { repo: "xiangjianan.github.io", lang: "TypeScript", time: "May 2026" },
      { repo: "jindou-blog", lang: "MDX", time: "May 2026" },
      { repo: "game-wechat-find100", lang: "JavaScript", time: "May 2026" },
    ],
  };

  return (
    <section className="page-section about-section" id="about">
      <div className="container">
        <SectionHeader
          icon={Cpu}
          title="A product-minded builder"
          intro="The site now reads less like a terminal demo and more like a focused product landing page for open-source work."
        />

        <div className="about-grid">
          <article className="about-copy surface-card reveal-on-scroll" data-reveal-index="0">
            <div className="mini-label">profile.summary</div>
            <h3>Clean systems, practical output, open source by default.</h3>
            <p>
              I am <strong>xiangjianan</strong>, a full-stack developer working across React, TypeScript,
              Python, Django, content systems, and small automation products. My work tends to start with a
              real everyday need, then become a reusable tool or public reference.
            </p>
            <p>
              The strongest signal is <strong>{PROJECTS[0].name}</strong>, a curated website collection with
              {PROJECTS[0].stars} stars and {PROJECTS[0].forks} forks. The rest of the portfolio spans local-first
              workspaces, AI news aggregation, backend APIs, real-time messaging, and lightweight games.
            </p>
          </article>

          <article className="activity-card surface-card reveal-on-scroll" data-reveal-index="1">
            <div className="mini-label">{recentActivity.label}</div>
            <div className="activity-list">
              {recentActivity.items.map((item) => (
                <div className="compact-activity" key={item.repo}>
                  <span className="language-dot" style={{ background: LANG_COLORS[item.lang] || "#9c8fb5" }} />
                  <strong>{item.repo}</strong>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
            <div className="contribution-note">
              <strong>{GITHUB_USER.yearlyContributions}</strong>
              <span>contributions in the last year</span>
            </div>
          </article>
        </div>

        <div className="feature-strip">
          {[
            {
              icon: Layers3,
              title: "Curated knowledge",
              text: "Website collections, AI notes, and research-style project indexes designed for scanning.",
            },
            {
              icon: Bot,
              title: "Automation loops",
              text: "News aggregation, local utilities, APIs, and small services that reduce repetitive work.",
            },
            {
              icon: MapPin,
              title: "UTC+8 builder",
              text: "Based around async collaboration, public repos, fast iteration, and practical shipping.",
            },
          ].map((item, index) => (
            <article className="feature-item reveal-on-scroll" data-reveal-index={index} key={item.title}>
              <item.icon size={22} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, revealIndex }: { project: typeof PROJECTS[number]; revealIndex: number }) {
  return (
    <a
      className="project-card surface-card reveal-on-scroll"
      data-reveal-index={revealIndex}
      data-tone={project.color}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card-top">
        <span>{project.lang}</span>
        <ExternalLink size={17} />
      </div>
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
      <div className="project-meta">
        <span>
          <span className="language-dot" style={{ background: LANG_COLORS[project.lang] || "#9c8fb5" }} />
          {project.lang}
        </span>
        {project.stars > 0 && (
          <span>
            <Star size={14} fill="currentColor" />
            {project.stars}
          </span>
        )}
        {project.forks > 0 && (
          <span>
            <GitFork size={14} />
            {project.forks}
          </span>
        )}
      </div>
    </a>
  );
}

function ProjectsSection() {
  const featured = PROJECTS[0];

  return (
    <section className="page-section projects-section" id="projects">
      <div className="container">
        <SectionHeader
          icon={Rocket}
          title="Open-source projects"
          intro="A portfolio section with the same strong CTA rhythm as the reference site, but grounded in real GitHub work."
        />

        <a className="featured-project reveal-on-scroll" data-reveal-index="0" href={featured.url} target="_blank" rel="noopener noreferrer">
          <div className="featured-project-copy">
            <div className="mini-label">featured.project</div>
            <h3>{featured.name}</h3>
            <p>{featured.desc}</p>
            <div className="featured-stats">
              <span><Star size={16} fill="currentColor" /> {featured.stars} stars</span>
              <span><GitFork size={16} /> {featured.forks} forks</span>
              <span><span className="language-dot" style={{ background: LANG_COLORS[featured.lang] }} /> {featured.lang}</span>
            </div>
          </div>
          <div className="featured-project-visual" aria-hidden="true">
            <div className="visual-browser-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="visual-list">
              {["Design systems", "AI products", "Inspiration", "Tools"].map((item, index) => (
                <div className="visual-row" key={item}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{item}</span>
                  <ArrowRight size={15} />
                </div>
              ))}
            </div>
          </div>
        </a>

        <div className="project-grid">
          {PROJECTS.slice(1).map((project, index) => (
            <ProjectCard key={project.id} project={project} revealIndex={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const techGroups = [
    {
      category: "Frontend & Web",
      icon: Globe,
      items: ["TypeScript", "JavaScript", "HTML5 / CSS3", "Vue", "Astro", "MDX"],
    },
    {
      category: "Backend & Services",
      icon: Terminal,
      items: ["Python", "Django REST Framework", "Node.js", "Express", "WebSocket", "Shell"],
    },
    {
      category: "Apps & Tooling",
      icon: Zap,
      items: ["React", "Vite", "Tailwind CSS", "WeChat Mini Program", "Git / GitHub", "RESTful API"],
    },
  ];

  return (
    <section className="page-section skills-section" id="skills">
      <div className="container">
        <SectionHeader
          icon={Code2}
          title="Technical range"
          intro="The skill section keeps the GitHub language mix, but swaps neon meters for clear product-style competency rows."
        />

        <div className="skills-layout">
          <article className="surface-card skill-mix-card reveal-on-scroll" data-reveal-index="0">
            <div className="mini-label">github.language.mix</div>
            <div className="skill-bars">
              {SKILLS.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div>
                    <strong>{skill.name}</strong>
                    <span>{skill.category}</span>
                  </div>
                  <div className="skill-track" aria-label={`${skill.name} ${skill.level}%`}>
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                  <em>{skill.level}%</em>
                </div>
              ))}
            </div>
          </article>

          <div className="tech-groups">
            {techGroups.map((group, index) => (
              <article className="tech-group surface-card reveal-on-scroll" data-reveal-index={index + 1} key={group.category}>
                <div className="tech-heading">
                  <group.icon size={19} />
                  <h3>{group.category}</h3>
                </div>
                <div className="tag-cloud">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="page-section contact-section" id="contact">
      <div className="container contact-container reveal-on-scroll" data-reveal-index="0">
        <div className="contact-copy">
          <div className="section-mark" aria-hidden="true">
            <Mail size={22} />
          </div>
          <h2>Build the next useful thing.</h2>
          <p>
            Have an interesting collaboration, repo, or product idea? The fastest path is GitHub,
            and email works when the context needs more room.
          </p>
        </div>
        <div className="contact-actions">
          <GradientButton href={GITHUB_USER.github}>
            <Github size={18} />
            github.com/{GITHUB_USER.username}
          </GradientButton>
          <GradientButton href="mailto:xiang9872@126.com" secondary>
            <Mail size={18} />
            xiang9872@126.com
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>xiangjianan</span>
        <span>100% AI BUILT · MANUS & OPENCLAW · {new Date().getFullYear()}</span>
        <a href={GITHUB_USER.github} target="_blank" rel="noopener noreferrer">
          <Github size={14} />
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  useScrollReveal();

  const backgroundLines = useMemo(
    () => Array.from({ length: 9 }, (_, index) => <span key={index} style={{ left: `${12 + index * 10}%` }} />),
    [],
  );

  return (
    <div className="landing-page">
      <div className="page-grid" aria-hidden="true">
        {backgroundLines}
      </div>
      <Navbar />
      <main>
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
