import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { reveal } from '../directives/reveal'
import { REPOSITORIES, NAV_ITEMS } from '../data/site'
const mountApp = () => mount(App, { global: { directives: { reveal } } })

describe('portfolio navigation and discovery', () => {
  it('has a destination for every navigation item and visible reveal fallback', () => {
    const wrapper = mountApp()
    NAV_ITEMS.forEach(item => expect(wrapper.find(`section#${item.id}`).exists()).toBe(true))
    wrapper.findAll('.reveal').forEach(el => expect(el.classes()).toContain('in'))
  })
  it('shows all repositories in order and filters them by category', async () => {
    const wrapper = mountApp()
    expect(wrapper.findAll('.project-name').map(el => el.text())).toEqual(REPOSITORIES.map(p => p.name))
    expect(REPOSITORIES.slice(0, 9).map(p => p.name)).toEqual(['taptap', 'minidesk-ios', 'daily-games', 'time-traveler', 'fm', 'lks', 'daily-original-games', 'daily-creative-tools', 'ai-daily-news'])
    expect(REPOSITORIES.map(p => p.name)).not.toEqual(expect.arrayContaining(['minidesk', 'jindou-blog', 'loom']))
    expect(REPOSITORIES.map(p => p.name)).toContain('daily-digest')
    expect(wrapper.findAll('.feature h3').map(el => el.text())).toEqual(['minidesk', 'jindou-blog', 'loom'])
    expect(wrapper.find('.show-all').exists()).toBe(false)
    const tools = wrapper.findAll('.filters button').find(b => b.text() === 'Tools')
    await tools.trigger('click')
    expect(tools.attributes('aria-pressed')).toBe('true')
    expect(wrapper.findAll('.project-row')).toHaveLength(REPOSITORIES.filter(p => p.category === 'tools').length)
    await wrapper.find('.filters button').trigger('click')
    expect(wrapper.findAll('.project-row')).toHaveLength(REPOSITORIES.length)
    const links = wrapper.findAll('#project-list a').map(a => a.attributes('href'))
    REPOSITORIES.forEach(p => expect(links).toContain(p.href))
    expect(new Set(REPOSITORIES.map(p => p.name)).size).toBe(REPOSITORIES.length)
  })
  it('labels preview and source actions clearly', async () => {
    const wrapper = mountApp()
    const projectWithPreview = wrapper.findAll('.project-row').find(row => row.text().includes('daily-creative-tools'))
    const traveler = wrapper.findAll('.project-row').find(row => row.text().includes('time-traveler'))
    const repositoryOnly = wrapper.findAll('.project-row').find(row => row.text().includes('scheduler'))

    expect(projectWithPreview.find('.project-preview').attributes('aria-label')).toBe('Preview daily-creative-tools')
    expect(projectWithPreview.find('.project-source').attributes('aria-label')).toBe('View daily-creative-tools source code')
    expect(traveler.find('.project-preview').attributes('href')).toBe('https://traveler.helloxjn.com/')
    expect(traveler.find('.project-source').attributes('href')).toBe('https://github.com/xiangjianan/time-traveler')
    expect(repositoryOnly.find('.project-preview').exists()).toBe(false)
    expect(repositoryOnly.find('.project-source').attributes('aria-label')).toBe('View scheduler source code')
  })
})
