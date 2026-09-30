<script setup>
import { computed, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { CATEGORIES, REPOSITORIES, SELECTED_NAMES, REPOSITORIES_URL, CHECKED_AT } from '../data/site'
const category = ref('all')
const expanded = ref(false)
const filtered = computed(() => category.value === 'all' ? REPOSITORIES : REPOSITORIES.filter(p => p.category === category.value))
const visible = computed(() => category.value === 'all' && !expanded.value ? SELECTED_NAMES.map(name => REPOSITORIES.find(p => p.name === name)).filter(Boolean) : filtered.value)
function select(id) { category.value = id; expanded.value = false }
</script>
<template>
  <section id="explore" aria-labelledby="explore-title">
    <div class="container">
      <div class="section-head" v-reveal><h2 id="explore-title">More ideas in the making.</h2><a class="section-more" :href="REPOSITORIES_URL" target="_blank" rel="noopener noreferrer">GitHub <AppIcon name="arrow-up-right" /></a></div>
      <p class="section-intro">Useful tools, playful experiments, and everything in between. Explore my public GitHub repositories.</p>
      <div class="filters" role="group" aria-label="Filter projects by category">
        <button v-for="item in CATEGORIES" :key="item.id" :aria-pressed="category === item.id" aria-controls="project-list" @click="select(item.id)">{{ item.label }}</button>
      </div>
      <p class="catalog-status" role="status">{{ category === 'all' && !expanded ? visible.length + ' selected projects · ' + REPOSITORIES.length + ' public repositories' : filtered.length + ' projects' }}</p>
      <ul id="project-list" class="project-list">
        <li v-for="project in visible" :key="project.name" class="project-row">
          <a class="project-main" :href="project.liveUrl || project.href" target="_blank" rel="noopener noreferrer"><span class="project-name">{{ project.name }}</span><span class="project-desc">{{ project.desc }}</span></a>
          <div class="project-actions">
            <a v-if="project.liveUrl" class="project-action project-preview text-action" :href="project.liveUrl" :aria-label="`Preview ${project.name}`" title="Visit site" target="_blank" rel="noopener noreferrer">Visit</a>
            <a class="project-action project-source text-action" :href="project.href" :aria-label="`View ${project.name} source code`" title="Source on GitHub" target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </li>
      </ul>
      <div class="catalog-footer">
        <button v-if="category === 'all'" class="show-all" @click="expanded = !expanded">{{ expanded ? 'Show selected projects −' : `Show all ${REPOSITORIES.length} public repositories +` }}</button>
        <span>Repository snapshot · {{ CHECKED_AT }}</span>
      </div>
    </div>
  </section>
</template>
