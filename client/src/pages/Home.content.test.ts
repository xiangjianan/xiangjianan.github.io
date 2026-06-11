import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("./Home.tsx", import.meta.url), "utf8");

const expectedProjectUrls = [
  "https://github.com/xiangjianan/lks",
  "https://github.com/xiangjianan/mini-desk",
  "https://github.com/xiangjianan/game-wechat-find100",
  "https://github.com/xiangjianan/jindou-blog",
  "https://github.com/xiangjianan/ai-daily-news",
  "https://github.com/xiangjianan/send-msg",
  "https://github.com/xiangjianan/lks-api",
];

const expectedRecentRepos = [
  "lks",
  "mini-desk",
  "ai-daily-news",
  "xiangjianan.github.io",
  "jindou-blog",
  "game-wechat-find100",
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

const expectedSkillNames = ["TypeScript", "HTML / CSS", "MDX / Astro", "JavaScript", "Vue", "Python / Django"];

const expectedTechTags = [
  "TypeScript",
  "JavaScript",
  "HTML5 / CSS3",
  "Vue",
  "Astro",
  "MDX",
  "Python",
  "Django REST Framework",
  "Node.js",
  "Express",
  "WebSocket",
  "Shell",
  "React",
  "WeChat Mini Program",
  "Vite",
  "Tailwind CSS",
  "Git / GitHub",
  "RESTful API",
];

const removedTechTags = ["Dart", "Flutter", "Flame"];

function extractProjectsSource() {
  const match = source.match(/const PROJECTS = \[([\s\S]*?)\];\n\nconst SKILLS/);
  if (!match) {
    throw new Error("PROJECTS array not found");
  }

  return match[1];
}

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
    expect(source).toContain("repoCount: 14");
  });

  it("shows the requested open-source projects in order", () => {
    const projectUrls = Array.from(extractProjectsSource().matchAll(/url: "(https:\/\/github\.com\/xiangjianan\/[^"]+)"/g)).map(
      ([, url]) => url,
    );

    expect(projectUrls).toEqual(expectedProjectUrls);
  });

  it("does not reference deleted repositories", () => {
    for (const repo of deletedRepoNames) {
      expect(source).not.toContain(repo);
    }

    for (const url of deletedRepoUrls) {
      expect(source).not.toContain(url);
    }
  });

  it("shows recent activity by latest updated source repositories", () => {
    const recentActivitySource = extractSourceBetween("recent.activity", "GITHUB_USER.yearlyContributions");
    const repoNames = Array.from(recentActivitySource.matchAll(/repo: "([^"]+)"/g)).map(([, repo]) => repo);

    expect(repoNames).toEqual(expectedRecentRepos);
  });

  it("uses the current GitHub-backed tech stack", () => {
    const skillsSource = extractSourceBetween("const SKILLS =", "const LANG_COLORS");
    const skillsSectionSource = extractSourceBetween("function SkillsSection()", "function ContactSection()");

    for (const skillName of expectedSkillNames) {
      expect(skillsSource).toContain(`name: "${skillName}"`);
    }

    expect(skillsSectionSource).toContain("github.language.mix");
    for (const tag of expectedTechTags) {
      expect(skillsSectionSource).toContain(`"${tag}"`);
    }

    for (const tag of removedTechTags) {
      expect(skillsSectionSource).not.toContain(`"${tag}"`);
    }
  });

  it("includes restrained animation scaffolding with reduced motion support", () => {
    expect(source).toContain("function Reveal(");
    expect(source).toContain('data-reveal');
    expect(source).toContain("IntersectionObserver");

    const cssSource = readFileSync(new URL("../index.css", import.meta.url), "utf8");
    expect(cssSource).toContain("@keyframes cyber-grid-drift");
    expect(cssSource).toContain("@media (prefers-reduced-motion: reduce)");
    expect(cssSource).toContain("[data-reveal]");
  });
});
