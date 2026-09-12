**English** | [简体中文](README.zh-CN.md)

<p align="center">
  <img src="https://img.shields.io/badge/🤖_100%25_AI_Developed-7C3AED?style=for-the-badge" alt="100% AI Developed" />
  <img src="https://img.shields.io/badge/✨_100%25_AI_Generated-00D4AA?style=for-the-badge" alt="100% AI Generated" />
</p>

> **💡 This repo was developed 100% independently by AI — from requirements analysis and coding to testing and debugging, AI led the entire process with no human-written code.**

# xiangjianan.github.io

Personal homepage — a minimalist gallery-editorial design in white and ink ([live site](https://xiangjianan.github.io/)).
The design mockup came from an OpenDesign single-file artifact; this repo is its production-grade Vue 3 implementation, with visuals/layout/interactions 1:1.

## Tech Stack

- **Vue 3** (`<script setup>`) + **Vite 7**
- The original design stylesheet preserved verbatim (`src/styles/main.css`, all design tokens in `:root`)
- **Vitest** + **@vue/test-utils** component tests

## Structure

```
├── index.html              # page shell (title/meta/favicon)
├── public/                 # static assets: favicon.svg, manifest.json, _redirects, etc.
└── src/
    ├── App.vue             # page layout + active-section tracking
    ├── styles/main.css     # original styles, untouched
    ├── data/site.js        # all copy & links — edit content only here
    ├── directives/reveal.js                # v-reveal entrance animation
    ├── composables/useActiveSection.js     # nav aria-current sync
    ├── components/         # TopBar / Hero / SectionHead / FeatureCard / IndexRow …
    └── __tests__/          # component tests
```

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run test      # component tests
npm run build     # production build → dist/
npm run preview   # preview the build output
```

## Deployment

After pushing to `master`, GitHub Actions (`.github/workflows/deploy.yml`)
automatically runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages.

## License

MIT
