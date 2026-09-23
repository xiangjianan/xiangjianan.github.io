import snapshot from './repositories.json'

export const GITHUB_URL = 'https://github.com/xiangjianan'
export const REPOSITORIES_URL = `${GITHUB_URL}?tab=repositories`
export const EMAIL = 'xiang9872@gmail.com'
export const NAV_ITEMS = [{ id: 'work', label: 'Work' }, { id: 'explore', label: 'Projects' }]
export const CATEGORIES = [
  { id: 'all', label: 'All' }, { id: 'tools', label: 'Tools' },
  { id: 'games', label: 'Games' }, { id: 'ai', label: 'AI & Automation' },
  { id: 'curation', label: 'Curation' }, { id: 'engineering', label: 'Engineering' },
]
export const REPOSITORIES = snapshot.repositories
export const CHECKED_AT = snapshot.checkedAt
export const FEATURED = [
  { name: 'Mini Desk', title: 'A little room for your everyday.', tag: 'Everyday tools', desc: 'Screenshots, notes, reminders, and quick actions, together on a quiet workspace. No sign-in. Your data stays local.', liveUrl: 'https://minidesk.online', repoUrl: `${GITHUB_URL}/mini-desk`, detail: 'Vue · TypeScript · Local-first', delay: 0 },
  { name: 'jindou-blog', title: 'Notes from exploring AI.', tag: 'Research & writing', desc: 'AI research, technical explainers, and practical notes. A place to collect ideas and make complex topics easier to understand.', liveUrl: 'https://aiblog.helloxjn.com/', repoUrl: `${GITHUB_URL}/jindou-blog`, detail: 'AI research · Explainers · Notes', delay: 60 },
  { name: 'daily-digest', title: 'A day of output, in one place.', tag: 'AI & Automation', desc: 'Daily outputs from automated tasks, collected into a digest made for mobile reading. Catch up on what ran and what it produced.', liveUrl: 'https://xiangjianan.github.io/daily-digest/', repoUrl: `${GITHUB_URL}/daily-digest`, detail: 'Daily summaries · Mobile-first · PWA', delay: 120 },
]
export const SELECTED_NAMES = ['daily-creative-tools', 'daily-original-games', 'taptap', 'primus', 'fm', 'time-traveler', 'lks', 'ai-daily-news', 'scheduler']
