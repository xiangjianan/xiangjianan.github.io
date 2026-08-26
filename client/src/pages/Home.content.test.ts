import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("./Home.tsx", import.meta.url), "utf8");

const expectedProjectUrls = [
  "https://github.com/xiangjianan/lks",
  "https://github.com/xiangjianan/time-traveler",
  "https://github.com/xiangjianan/mini-desk",
  "https://github.com/xiangjianan/taptap",
  "https://github.com/xiangjianan/ai-daily-news",
  "https://github.com/xiangjianan/jindou-blog",
  "https://github.com/xiangjianan/primus",
  "https://github.com/xiangjianan/workout-checkin",
];

const expectedProjectDemoUrls = [
  "https://lkssite.vip",
  "https://minidesk.helloxjn.com",
  "https://taptap.helloxjn.com",
  "https://aiblog.helloxjn.com",
  "https://xiangjianan.github.io/ai-daily-news/",
  "https://primus.helloxjn.com",
  "https://workout.helloxjn.com",
];

const toolbeltRepoUrls = [
  "https://github.com/xiangjianan/lkszj",
  "https://github.com/xiangjianan/scheduler",
  "https://github.com/xiangjianan/mermaid",
  "https://github.com/xiangjianan/send-msg",
];

const deletedRepoNames = [
  "pixel-agent-app",
  "huarong-puzzle",
  "hermes-web-ui",
  "elden-code",
  "claude-code-analysis",
  "kongming-chess",
];

const deletedRepoUrls = [
  "https://github.com/xiangjianan/pixel-agent-app",
  "https://github.com/xiangjianan/huarong-puzzle",
  "https://github.com/xiangjianan/hermes-web-ui",
  "https://github.com/xiangjianan/elden-code",
  "https://github.com/xiangjianan/claude-code-analysis",
  "https://github.com/xiangjianan/kongming-chess",
];

const expectedStackPillars = ["Agentic Systems", "LLM & Generative AI", "Full-Stack Web", "Automation & Services"];

const expectedStackTags = [
  "Agent Orchestration", "Task Planning", "Tool Calling", "Multi-step Workflows", "AI Evals",
  "LLM APIs", "Prompt Engineering", "RAG", "Function Calling", "Streaming", "Codex / Claude",
  "React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express",
  "Python", "FastAPI", "Django", "Task Scheduling", "WebSocket", "Shell",
];

function extractSourceBetween(start: string, end: string) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex);
  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Unable to find source between ${start} and ${end}`);
  }

  return source.slice(startIndex, endIndex);
}

describe("Home page GitHub-backed content", () => {
  it("uses the latest profile numbers", () => {
    expect(source).toContain("followers: 119");
    expect(source).toContain("following: 2");
    expect(source).toContain("commits: 895");
    expect(source).toContain("yearlyContributions: 944");
    expect(source).toContain("repoCount: 19");
  });

  it("shows the requested open-source projects in order", () => {
    const projectUrls = Array.from(
      extractSourceBetween("const PROJECTS = [", "const TOOLBELT").matchAll(/url: "(https:\/\/github\.com\/xiangjianan\/[^"]+)"/g),
    ).map(([, url]) => url);

    expect(projectUrls).toEqual(expectedProjectUrls);
  });

  it("includes separate work-page links without whole-card overlays", () => {
    const projectDemoUrls = Array.from(source.matchAll(/demoUrl: "(https?:\/\/[^"]+)"/g)).map(([, url]) => url);

    for (const url of expectedProjectDemoUrls) {
      expect(projectDemoUrls).toContain(url);
    }
    expect(source).toContain('target="_blank"');
  });

  it("lists the additional toolbelt repositories", () => {
    for (const url of toolbeltRepoUrls) {
      expect(source).toContain(url);
    }
  });

  it("uses the current contact email", () => {
    expect(source).toContain("mailto:xiang9872@gmail.com");
    expect(source).toContain("xiang9872@gmail.com");
    expect(source).not.toContain("xiang9872@126.com");
  });

  it("does not reference deleted repositories", () => {
    for (const repo of deletedRepoNames) {
      expect(source).not.toContain(repo);
    }

    for (const url of deletedRepoUrls) {
      expect(source).not.toContain(url);
    }
  });

  it("frames the page around an identity story", () => {
    expect(source).toContain("IDENTITY ENGINE");
    expect(source).toContain("identity.manifest");
    expect(source).toContain("Who I");
    expect(source).toContain("pillars.of.identity");
    expect(source).toContain("Do less, do it well");
    expect(source).toContain("100% AI Built");
  });

  it("builds the toolkit around an AI-native stack, not a language list", () => {
    const stackSource = extractSourceBetween("const STACK_CATEGORIES =", "const AI_HIGHLIGHTS");
    const sectionSource = extractSourceBetween("function SkillsSection()", "function ContactSection()");

    expect(sectionSource).toContain("<SectionLabel>TOOLKIT</SectionLabel>");
    expect(sectionSource).toContain("ai.native.mode");
    expect(sectionSource).not.toContain("github.language.share");

    for (const pillar of expectedStackPillars) {
      expect(stackSource).toContain(pillar);
    }
    for (const tag of expectedStackTags) {
      expect(stackSource).toContain(`"${tag}"`);
    }
  });

  it("includes restrained animation scaffolding with reduced motion support", () => {
    expect(source).toContain("function Reveal(");
    expect(source).toContain("data-reveal");
    expect(source).toContain("IntersectionObserver");

    const cssSource = readFileSync(new URL("../index.css", import.meta.url), "utf8");
    expect(cssSource).toContain("@keyframes cyber-grid-drift");
    expect(cssSource).toContain("@media (prefers-reduced-motion: reduce)");
    expect(cssSource).toContain("[data-reveal]");
    expect(cssSource).toContain(".repo-link:hover");
  });
});
