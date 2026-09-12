**English** | [简体中文](README.zh-CN.md)

<p align="center">
  <img src="https://img.shields.io/badge/🤖_100%25_AI_Developed-7C3AED?style=for-the-badge" alt="100% AI Developed" />
  <img src="https://img.shields.io/badge/✨_全程AI生成-00D4AA?style=for-the-badge" alt="全程AI生成" />
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
├── index.html              # 页面外壳（title/meta/favicon）
├── public/                 # favicon.svg、manifest.json、_redirects 等静态资产
└── src/
    ├── App.vue             # 页面布局 + 当前 section 追踪
    ├── styles/main.css     # 原设计样式，零改动
    ├── data/site.js        # 全部文案与链接 —— 改内容只动这里
    ├── directives/reveal.js                # v-reveal 入场动画
    ├── composables/useActiveSection.js     # 导航 aria-current 联动
    ├── components/         # TopBar / Hero / SectionHead / FeatureCard / IndexRow …
    └── __tests__/          # 组件测试
```

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run test      # 组件测试
npm run build     # 生产构建 → dist/
npm run preview   # 预览构建产物
```

## Deployment

After pushing to `master`, GitHub Actions (`.github/workflows/deploy.yml`)
automatically runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages.

## License

MIT
