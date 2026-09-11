// All page content in one place — edit copy here, not in components.
// `delay` is the staggered-entrance offset in ms (matches the original artifact).

export const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'writing', label: 'Writing' },
]

export const GITHUB_URL = 'https://github.com/xiangjianan'
export const REPOSITORIES_URL = 'https://github.com/xiangjianan?tab=repositories'
export const EMAIL = 'xiang9872@gmail.com'

export const HERO = {
  eyebrow: 'AI-Native Builder · Open-Source',
  index: ['mini-desk', 'taptap', 'primus'],
  cue: { label: 'Work', href: '#work' },
}

export const FEATURED = [
  {
    num: '01',
    tag: 'TypeScript · local-first',
    name: 'mini-desk',
    desc: 'Do less, do it well. A local-first personal workspace — notes, reminders, quick actions, screenshots, everyday tools.',
    liveUrl: 'https://minidesk.helloxjn.com',
    repoUrl: 'https://github.com/xiangjianan/mini-desk',
    delay: 0,
  },
  {
    num: '02',
    tag: 'JavaScript · WeChat Mini Game',
    name: 'taptap',
    desc: '「数一数噻」— a WeChat Mini Game. A number-finding puzzle built on Voronoi diagrams, playable in WeChat.',
    liveUrl: 'https://taptap.helloxjn.com',
    repoUrl: 'https://github.com/xiangjianan/taptap',
    delay: 80,
  },
]

export const PROJECTS = [
  { num: '03', name: 'lks', desc: "303 curated websites from LKs' Bilibili series", href: 'https://lkssite.vip' },
  { num: '04', name: 'time-traveler', desc: 'LLM-driven historical time-travel adventure', href: 'https://github.com/xiangjianan/time-traveler' },
  { num: '05', name: 'primus', desc: 'First-principles engine: any goal down to ‘do it now’', href: 'https://primus.helloxjn.com' },
  { num: '06', name: 'ai-daily-news', desc: 'Auto-aggregated daily AI news', href: 'https://xiangjianan.github.io/ai-daily-news/' },
  { num: '07', name: 'jindou-blog', desc: 'AI research & technical writing', href: 'https://aiblog.helloxjn.com' },
  { num: '08', name: 'workout-checkin', desc: '100-day fitness bet', href: 'https://workout.helloxjn.com' },
]

export const STACK = [
  {
    title: 'Agent · LLM',
    items: ['Agent Orchestration', 'LLM', 'RAG', 'Prompt Engineering', 'Tool Calling', 'Function Calling'],
    delay: 0,
  },
  {
    title: 'Web',
    items: ['React', 'TypeScript', 'Node', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
    delay: 70,
  },
  {
    title: 'Services · Data',
    items: ['Python', 'FastAPI', 'Django', 'WebSocket', 'Shell'],
    delay: 140,
  },
]

export const WRITING = [
  { num: '01', name: 'AI Notes', meta: 'aiblog.helloxjn.com', href: 'https://aiblog.helloxjn.com' },
  { num: '02', name: 'jindou-blog', meta: 'MDX', href: 'https://github.com/xiangjianan/jindou-blog' },
]
