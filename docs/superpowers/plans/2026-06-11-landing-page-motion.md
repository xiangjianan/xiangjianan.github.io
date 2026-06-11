# Landing Page Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add restrained product-style animation to the existing portfolio landing page.

**Architecture:** Keep animation CSS-first and reuse the existing `useScrollReveal` hook. Add small JSX markers only where repeated elements need stagger timing.

**Tech Stack:** React 19, Vite, TypeScript, CSS, Vitest.

---

## File Structure

- Modify: `client/src/pages/Home.motion.test.ts` for source-level motion coverage.
- Modify: `client/src/pages/Home.tsx` to add stagger markers to repeated reveal elements.
- Modify: `client/src/index.css` to add ambient grid drift, stagger reveal delays, and reduced-motion cleanup.

### Task 1: Motion Coverage

**Files:**
- Modify: `client/src/pages/Home.motion.test.ts`

- [ ] **Step 1: Add failing tests for restrained motion requirements**

```ts
it("adds restrained stagger and ambient background motion hooks", () => {
  expect(homeSource).toContain("data-reveal-index");
  expect(cssSource).toContain("@keyframes gridLineDrift");
  expect(cssSource).toContain("animation: gridLineDrift");
  expect(cssSource).toContain(".reveal-on-scroll[data-reveal-index");
});
```

- [ ] **Step 2: Run the motion test and verify it fails**

Run: `pnpm vitest run client/src/pages/Home.motion.test.ts`

Expected: FAIL because `data-reveal-index` and `gridLineDrift` are not implemented yet.

### Task 2: Implement Stagger Hooks

**Files:**
- Modify: `client/src/pages/Home.tsx`

- [ ] **Step 1: Add `data-reveal-index` to repeated reveal items**

Add the attribute to feature cards, project cards, tech groups, and other repeated elements that already use `reveal-on-scroll`.

- [ ] **Step 2: Keep the markup semantic**

Do not alter section order, headings, links, or visible copy.

### Task 3: Implement CSS Motion

**Files:**
- Modify: `client/src/index.css`

- [ ] **Step 1: Add ambient grid drift**

Create `@keyframes gridLineDrift` and apply it to `.page-grid span` with long, staggered durations.

- [ ] **Step 2: Add reveal stagger delays**

Add delay rules for `.reveal-on-scroll[data-reveal-index="1"]` through `"5"` using short delays between 70ms and 350ms.

- [ ] **Step 3: Tighten reduced-motion behavior**

Ensure `.page-grid span`, `.showcase-shell`, `.hero-badge`, `.section-mark`, and `.skill-track span` do not retain visible transforms or infinite motion under `prefers-reduced-motion: reduce`.

### Task 4: Verify

**Files:**
- No new files.

- [ ] **Step 1: Run focused motion test**

Run: `pnpm vitest run client/src/pages/Home.motion.test.ts`

Expected: PASS.

- [ ] **Step 2: Run full tests and type check**

Run: `pnpm test`

Expected: PASS.

Run: `pnpm check`

Expected: PASS.

- [ ] **Step 3: Browser check**

Run the Vite dev server, inspect the page at desktop and mobile widths, and confirm no text overlap or horizontal overflow.
