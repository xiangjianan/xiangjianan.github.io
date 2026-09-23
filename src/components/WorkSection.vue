<script setup>
import FeatureCard from './FeatureCard.vue'
import { FEATURED } from '../data/site'
</script>
<template>
  <section id="work" aria-labelledby="work-title">
    <div class="container">
      <div class="section-head" v-reveal><h2 id="work-title">Selected work</h2><span class="label">FEATURED</span></div>
      <div class="featured"><FeatureCard v-for="feature in FEATURED" :key="feature.name" :feature="feature" /></div>
    </div>
  </section>
</template>
