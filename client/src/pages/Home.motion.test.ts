import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const homeSource = readFileSync(new URL("./Home.tsx", import.meta.url), "utf8");
const cssSource = readFileSync(new URL("../index.css", import.meta.url), "utf8");

describe("Home page motion system", () => {
  it("wires scroll reveal markers into the landing sections", () => {
    expect(homeSource).toContain("useScrollReveal");
    expect(homeSource).toContain("reveal-on-scroll");
    expect(homeSource).toContain("is-visible");
  });

  it("defines product-style motion with reduced-motion protection", () => {
    expect(cssSource).toContain("@keyframes gradientSweep");
    expect(cssSource).toContain("@keyframes skillFill");
    expect(cssSource).toContain("@keyframes heroFloat");
    expect(cssSource).toContain("@media (prefers-reduced-motion: reduce)");
  });

  it("adds restrained stagger and ambient background motion hooks", () => {
    expect(homeSource).toContain("data-reveal-index");
    expect(cssSource).toContain("@keyframes gridLineDrift");
    expect(cssSource).toContain("animation: gridLineDrift");
    expect(cssSource).toContain(".reveal-on-scroll[data-reveal-index");
  });
});
