<script setup>
import SectionHead from './SectionHead.vue'
import FeatureCard from './FeatureCard.vue'
import IndexRow from './IndexRow.vue'
import { FEATURED, PROJECTS, REPOSITORIES_URL } from '../data/site'
</script>

<template>
  <section id="work" aria-labelledby="work-title">
    <div class="container">
      <SectionHead
        index="01"
        label="Work"
        title="Selected Work"
        heading-id="work-title"
        :more="{ text: 'View all on GitHub', href: REPOSITORIES_URL }"
      />

      <div class="featured">
        <FeatureCard v-for="feature in FEATURED" :key="feature.name" :feature="feature" />
      </div>

      <ul class="index">
        <li v-for="project in PROJECTS" :key="project.name">
          <IndexRow v-bind="project" />
        </li>
      </ul>
    </div>
  </section>
</template>
