<script setup>
defineProps({ feature: { type: Object, required: true } })
</script>
<template>
  <article class="feature" v-reveal="feature.delay">
    <span class="label">{{ feature.tag }}</span>
    <h3>{{ feature.name }}</h3>
    <h4>{{ feature.title }}</h4>
    <p>{{ feature.desc }}</p>
    <span class="feature-detail">{{ feature.detail }}</span>
    <div class="feature-actions">
      <a class="action-live text-action" :href="feature.liveUrl" :aria-label="`Open ${feature.name}`" title="Visit site" target="_blank" rel="noopener noreferrer">Visit</a>
      <a class="action-repo text-action" :href="feature.repoUrl" :aria-label="`View ${feature.name} source code`" title="Source on GitHub" target="_blank" rel="noopener noreferrer">Source</a>
    </div>
  </article>
</template>
