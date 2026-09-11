<script setup>
import SectionHead from './SectionHead.vue'
import { STACK } from '../data/site'
</script>

<template>
  <section id="stack" aria-labelledby="stack-title">
    <div class="container">
      <SectionHead index="02" label="Stack" title="What I build with" heading-id="stack-title" />

      <div class="stack-grid">
        <div v-for="col in STACK" :key="col.title" class="stack-col" v-reveal="col.delay">
          <h3>{{ col.title }}</h3>
          <p><template v-for="(item, i) in col.items" :key="item"><span v-if="i > 0">/</span>{{ item }}</template></p>
        </div>
      </div>
    </div>
  </section>
</template>
