<script setup>
const GITHUB_PATH = 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z'

const STROKE_PATHS = {
  'arrow-up-right': 'M4 12 12 4M6 4h6v6',
  'arrow-down': 'M8 3v10M3.5 8.5 8 13l4.5-4.5',
}

defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 13 },
})
</script>

<template>
  <svg v-if="name === 'github'" class="icon" :width="size" :height="size" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path :d="GITHUB_PATH" />
  </svg>

  <svg v-else-if="name === 'mail'" class="icon" :width="size" :height="size" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="3.5" width="12" height="9" rx="1" />
    <path d="m2.5 4.5 5.5 4 5.5-4" />
  </svg>

  <svg v-else class="icon" :width="size" :height="size" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path :d="STROKE_PATHS[name]" />
  </svg>
</template>
