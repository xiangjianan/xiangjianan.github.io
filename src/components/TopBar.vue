<script setup>
import AppIcon from './AppIcon.vue'
import { GITHUB_URL, NAV_ITEMS } from '../data/site'

defineProps({
  active: { type: String, default: '' },
})
</script>

<template>
  <header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="#top">xiangjianan</a>
      <nav class="topnav" aria-label="Sections">
        <a
          v-for="item in NAV_ITEMS"
          :key="item.id"
          :href="`#${item.id}`"
          :aria-current="active === item.id ? 'true' : 'false'"
        >{{ item.label }}</a>
        <a class="gh" :href="GITHUB_URL" target="_blank" rel="noopener noreferrer">
          <AppIcon name="github" :size="15" />
          GitHub
        </a>
      </nav>
    </div>
  </header>
</template>
