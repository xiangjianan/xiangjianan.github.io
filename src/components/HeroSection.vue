<script setup>
import AppIcon from './AppIcon.vue'
import { HERO } from '../data/site'
</script>

<template>
  <div class="hero">
    <div class="container">
      <p class="hero-eyebrow label" v-reveal>{{ HERO.eyebrow }}</p>
      <h1 v-reveal="60">I build tools <em>I actually</em> use.</h1>
      <p class="hero-index" v-reveal="140"><template v-for="(item, i) in HERO.index" :key="item"><span v-if="i > 0">/</span>{{ item }}</template></p>
      <a class="hero-cue" v-reveal="220" :href="HERO.cue.href">
        {{ HERO.cue.label }}
        <AppIcon name="arrow-down" />
      </a>
    </div>
  </div>
</template>
