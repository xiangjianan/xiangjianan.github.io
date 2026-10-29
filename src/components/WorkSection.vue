<script setup>
import { t } from '../data/locale'
import FeatureCard from './FeatureCard.vue'
import { FEATURED } from '../data/site'
</script>
<template>
  <section id="work" aria-labelledby="work-title">
    <div class="container">
      <div class="section-head" v-reveal><h2 id="work-title">{{ t('A few things to explore', '一些值得看看的作品') }}</h2><span class="label">{{ t('SELECTED', '精选') }}</span></div>
      <div class="featured"><FeatureCard v-for="feature in FEATURED" :key="feature.name" :feature="feature" /></div>
    </div>
  </section>
</template>
