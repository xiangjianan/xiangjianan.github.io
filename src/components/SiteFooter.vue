<script setup>
import AppIcon from './AppIcon.vue'
import { EMAIL, GITHUB_URL } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container footer-inner">
      <span class="footer-note">© {{ year }} xiangjianan</span>
      <div class="footer-links">
        <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer">
          <AppIcon name="github" :size="14" />
          github.com/xiangjianan
        </a>
        <a :href="`mailto:${EMAIL}`">
          <AppIcon name="mail" :size="14" />
          {{ EMAIL }}
        </a>
        <a href="#top">Top ↑</a>
      </div>
    </div>
  </footer>
</template>
