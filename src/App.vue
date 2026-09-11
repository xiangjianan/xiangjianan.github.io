<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import TopBar from './components/TopBar.vue'
import HeroSection from './components/HeroSection.vue'
import WorkSection from './components/WorkSection.vue'
import StackSection from './components/StackSection.vue'
import WritingSection from './components/WritingSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { NAV_ITEMS } from './data/site'
import { useActiveSection } from './composables/useActiveSection'

const sectionIds = NAV_ITEMS.map((item) => item.id)
const { activeSection, start, stop } = useActiveSection(sectionIds)

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <TopBar :active="activeSection" />
  <main id="top">
    <HeroSection />
    <WorkSection />
    <StackSection />
    <WritingSection />
  </main>
  <SiteFooter />
</template>
