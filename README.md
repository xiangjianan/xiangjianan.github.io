<p align="center">
  <img src="https://img.shields.io/badge/🤖_100%25_AI_Developed-7C3AED?style=for-the-badge" alt="100% AI Developed" />
  <img src="https://img.shields.io/badge/✨_全程AI生成-00D4AA?style=for-the-badge" alt="全程AI生成" />
</p>

> **💡 本仓库 100% 由 AI 独立完成开发，从需求分析、代码编写到测试调试，全程由 AI 主导完成，无任何人工编写代码。**

# xiangjianan.github.io

个人主页 — 白底墨色的 gallery-editorial 极简设计（[线上](https://xiangjianan.github.io/)）。
设计稿出自 OpenDesign 单文件 artifact，本仓库是它的 Vue 3 工程化实现，视觉/布局/交互 1:1。

## 技术栈

- **Vue 3**（`<script setup>`）+ **Vite 7**
- 原设计样式表逐字保留（`src/styles/main.css`，design tokens 全在 `:root`）
- **Vitest** + **@vue/test-utils** 组件测试

## 结构

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

## 本地开发

```bash
npm install
npm run dev       # http://localhost:5173
npm run test      # 组件测试
npm run build     # 生产构建 → dist/
npm run preview   # 预览构建产物
```

## 部署

push 到 `master` 后由 GitHub Actions（`.github/workflows/deploy.yml`）
自动 `npm ci && npm run build` 并部署 `dist/` 到 GitHub Pages。

## License

MIT
