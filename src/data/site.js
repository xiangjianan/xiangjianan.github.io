import snapshot from './repositories.json'
import { isChinese, t, descriptions } from './locale'

export const GITHUB_URL = 'https://github.com/xiangjianan'
export const REPOSITORIES_URL = `${GITHUB_URL}?tab=repositories`
export const EMAIL = 'xiang9872@gmail.com'
export const NAV_ITEMS = [{ id: 'work', label: t('Work', '精选') }, { id: 'explore', label: t('Projects', '项目') }]
export const CATEGORIES = [
  { id: 'all', label: t('All', '全部') }, { id: 'tools', label: t('Tools', '工具') },
  { id: 'games', label: t('Games', '游戏') }, { id: 'ai', label: t('AI & Automation', 'AI 与自动化') },
  { id: 'curation', label: t('Curation', '收藏') }, { id: 'engineering', label: t('Engineering', '工程') },
]
export const REPOSITORIES = snapshot.repositories.map(p => ({ ...p, desc: isChinese ? (descriptions[p.name] || p.desc) : p.desc }))
export const CHECKED_AT = snapshot.checkedAt
export const FEATURED = [
  { name: 'minidesk', title: t('A little room for your everyday.', '给日常留一方小天地。'), tag: t('Everyday tools', '日常工具'), desc: t('A quiet place for screenshots, notes, reminders, and quick actions. No sign-in; your data stays local.', '一个安静的空间，放置截图、笔记、提醒和快捷操作。无需登录，数据保存在本地。'), liveUrl: 'https://minidesk.online', repoUrl: `${GITHUB_URL}/minidesk`, detail: 'Vue · TypeScript · Local-first', delay: 0 },
  { name: 'jindou-blog', title: t('A place to follow a question.', '顺着问题，慢慢探索。'), tag: t('Research & writing', '研究与写作'), desc: t('Notes on AI, research, and technology: a place to gather what I’m learning and make sense of it along the way.', '记录关于 AI、研究与技术的探索，把学习中的想法慢慢整理清楚。'), liveUrl: 'https://jindou-blog.pages.dev', repoUrl: `${GITHUB_URL}/jindou-blog`, detail: 'AI research · Explainers · Notes', delay: 60 },
  { name: 'loom', title: t('A conversation with many perspectives.', '让不同的想法一起对话。'), tag: t('AI & Automation', 'AI 与自动化'), desc: t('Chat with multiple AI models in parallel and highlight responses to guide the conversation.', '同时与多个 AI 模型对话，通过高亮回答引导接下来的交流。'), liveUrl: 'https://xiangjianan.github.io/loom/', repoUrl: `${GITHUB_URL}/loom`, detail: t('Multiple models · Conversation', '多模型 · 对话'), delay: 120 },
]
