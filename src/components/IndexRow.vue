<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  num: { type: String, required: true },
  name: { type: String, required: true },
  href: { type: String, required: true },
  desc: { type: String, default: '' },
  meta: { type: String, default: '' },
})
</script>

<template>
  <a class="index-row" :href="href" target="_blank" rel="noopener noreferrer" v-reveal>
    <span class="row-num">{{ num }}</span>
    <span class="row-name">{{ name }}</span>
    <span v-if="meta" class="row-meta">{{ meta }}</span>
    <span v-else class="row-desc">{{ desc }}</span>
    <AppIcon name="arrow-up-right" :size="14" class="row-arrow" />
  </a>
</template>
