<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  feature: { type: Object, required: true },
})
</script>

<template>
  <article class="feature" v-reveal="feature.delay">
    <div class="feature-top">
      <span class="feature-num">{{ feature.num }}</span>
      <span class="label">{{ feature.tag }}</span>
    </div>
    <h3>{{ feature.name }}</h3>
    <p>{{ feature.desc }}</p>
    <div class="feature-actions">
      <a class="action-live" :href="feature.liveUrl" target="_blank" rel="noopener noreferrer">
        Live
        <AppIcon name="arrow-up-right" />
      </a>
      <a class="action-repo" :href="feature.repoUrl" target="_blank" rel="noopener noreferrer">Repo ↗</a>
    </div>
  </article>
</template>
