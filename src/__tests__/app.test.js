import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import TopBar from '../components/TopBar.vue'
import IndexRow from '../components/IndexRow.vue'
import { reveal } from '../directives/reveal'
import { FEATURED, PROJECTS, STACK, WRITING } from '../data/site'

const mountApp = () => mount(App, { global: { directives: { reveal } } })

describe('App', () => {
  it('renders the top bar, hero, all sections and the footer', () => {
    const wrapper = mountApp()

    expect(wrapper.find('.topbar .brand').text()).toBe('xiangjianan')
    expect(wrapper.find('.hero h1').text()).toBe('I build tools I actually use.')
    expect(wrapper.find('.hero h1 em').exists()).toBe(true)
    expect(wrapper.find('.hero-index').text()).toBe('mini-desk/taptap/primus')

    expect(wrapper.findAll('.feature')).toHaveLength(FEATURED.length)
    expect(wrapper.find('#work').findAll('.index-row')).toHaveLength(PROJECTS.length)
    expect(wrapper.find('#stack .stack-grid .stack-col').exists()).toBe(true)
    expect(wrapper.findAll('.stack-col')).toHaveLength(STACK.length)
    expect(wrapper.find('#writing').findAll('.index-row')).toHaveLength(WRITING.length)

    expect(wrapper.find('.footer-note').text()).toContain(String(new Date().getFullYear()))
    expect(wrapper.findAll('.footer-links a')).toHaveLength(3)
  })

  it('exposes every nav section id used by the active-section tracker', () => {
    const wrapper = mountApp()
    const sectionIds = wrapper.findAll('main section').map((s) => s.attributes('id'))
    expect(sectionIds).toEqual(['work', 'stack', 'writing'])
  })

  it('renders reveal elements visible when IntersectionObserver is unavailable (fallback)', () => {
    const wrapper = mountApp()
    const revealed = wrapper.findAll('.reveal')
    expect(revealed.length).toBeGreaterThan(0)
    revealed.forEach((el) => expect(el.classes()).toContain('in'))
  })
})

describe('TopBar', () => {
  it('marks only the active section with aria-current', () => {
    const active = mount(TopBar, { props: { active: 'stack' } }).find('[aria-current="true"]')
    expect(active.text()).toBe('Stack')
  })

  it('marks nothing active when active is empty', () => {
    const wrapper = mount(TopBar, { props: { active: '' } })
    expect(wrapper.find('[aria-current="true"]').exists()).toBe(false)
  })
})

describe('IndexRow', () => {
  const withReveal = (props) => mount(IndexRow, {
    props,
    global: { directives: { reveal } },
  })

  it('shows desc for work rows', () => {
    const wrapper = withReveal({ num: '03', name: 'lks', href: 'https://lkssite.vip', desc: '303 curated websites' })
    expect(wrapper.find('.row-desc').text()).toBe('303 curated websites')
    expect(wrapper.find('.row-meta').exists()).toBe(false)
    expect(wrapper.attributes('href')).toBe('https://lkssite.vip')
  })

  it('shows meta instead of desc for writing rows', () => {
    const wrapper = withReveal({ num: '01', name: 'AI Notes', href: 'https://aiblog.helloxjn.com', meta: 'aiblog.helloxjn.com' })
    expect(wrapper.find('.row-meta').text()).toBe('aiblog.helloxjn.com')
    expect(wrapper.find('.row-desc').exists()).toBe(false)
  })
})

describe('site data', () => {
  it('gives every external entry a name and an https link', () => {
    ;[...FEATURED, ...PROJECTS, ...WRITING].forEach((entry) => {
      expect(entry.name).toBeTruthy()
      expect(entry.href ?? entry.liveUrl).toMatch(/^https:\/\//)
      if (entry.repoUrl) expect(entry.repoUrl).toMatch(/^https:\/\//)
    })
  })
})
