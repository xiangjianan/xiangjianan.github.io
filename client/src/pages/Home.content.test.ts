import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("./Home.tsx", import.meta.url), "utf8");

const featuredUrls = [
  "https://minidesk.helloxjn.com",
  "https://github.com/xiangjianan/mini-desk",
  "https://taptap.helloxjn.com",
  "https://github.com/xiangjianan/taptap",
];

const moreUrls = [
  "https://github.com/xiangjianan/lks",
  "https://github.com/xiangjianan/time-traveler",
  "https://github.com/xiangjianan/primus",
  "https://github.com/xiangjianan/ai-daily-news",
  "https://github.com/xiangjianan/jindou-blog",
  "https://github.com/xiangjianan/workout-checkin",
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

describe("Home page — minimal, works-first landing", () => {
  it("opens all project links in a new tab", () => {
    const newTab = source.match(/target="_blank"/g) || [];
    expect(newTab.length).toBeGreaterThanOrEqual(4);
  });

  it("features mini-desk and taptap up front", () => {
    const featuredSource = source.slice(source.indexOf("const FEATURED"), source.indexOf("const MORE"));
    expect(featuredSource).toContain("mini-desk");
    expect(featuredSource).toContain("taptap");
    for (const url of featuredUrls) {
      expect(source).toContain(url);
    }
  });

  it("lists the full set of works by their GitHub URLs", () => {
    for (const url of moreUrls) {
      expect(source).toContain(url);
    }
    expect(source).toContain("Selected Work");
  });

  it("keeps the intro concise — no name banner or vanity numbers", () => {
    expect(source).toContain("I build tools I actually use.");
    expect(source).not.toContain("XIANGJIANAN");
    expect(source).not.toContain("449★");
    expect(source).not.toContain("public repos");
    expect(source).not.toContain("contributions / yr");
    expect(source).not.toContain("449");
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

  it("is minimal — no long narrative sections", () => {
    expect(source).not.toContain("identity.manifest");
    expect(source).not.toContain("IDENTITY ENGINE");
    expect(source).not.toContain("pillars.of.identity");
    expect(source).not.toContain("At A Glance");
    expect(source).not.toContain("github.language.share");
  });
});
