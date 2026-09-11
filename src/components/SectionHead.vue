<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  index: { type: String, required: true },
  label: { type: String, required: true },
  title: { type: String, required: true },
  headingId: { type: String, required: true },
  more: { type: Object, default: null },
})
</script>

<template>
  <div class="section-head" v-reveal>
    <div>
      <span class="label">{{ index }} — {{ label }}</span>
      <h2 :id="headingId">{{ title }}</h2>
    </div>
    <a v-if="more" class="section-more" :href="more.href" target="_blank" rel="noopener noreferrer">
      {{ more.text }}
      <AppIcon name="arrow-up-right" />
    </a>
  </div>
</template>
