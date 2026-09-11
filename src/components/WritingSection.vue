<script setup>
import SectionHead from './SectionHead.vue'
import IndexRow from './IndexRow.vue'
import { WRITING } from '../data/site'
</script>

<template>
  <section id="writing" aria-labelledby="writing-title" class="writing">
    <div class="container">
      <SectionHead index="03" label="Writing" title="Notes & writing" heading-id="writing-title" />

      <ul class="index">
        <li v-for="entry in WRITING" :key="entry.name">
          <IndexRow v-bind="entry" />
        </li>
      </ul>
    </div>
  </section>
</template>
