import { ref } from 'vue'

// Tracks which section sits in the reading band (middle of the viewport)
// to drive aria-current on the top nav. Same observer tuning as the
// original artifact: rootMargin '-40% 0px -55% 0px'.
export function useActiveSection(sectionIds) {
  const activeSection = ref('')
  let observer = null

  function start() {
    if (!('IntersectionObserver' in window)) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeSection.value = entry.target.id
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el))
  }

  function stop() {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  return { activeSection, start, stop }
}
