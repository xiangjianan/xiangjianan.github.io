// Entrance choreography — sections rise as they scroll into view.
// Mirrors the original artifact: IntersectionObserver with a bottom root margin,
// unobserve after reveal, and immediate reveal for reduced-motion users or
// environments without IntersectionObserver.
//
// Usage: `v-reveal` or `v-reveal="80"` (stagger delay in ms).

function prefersReducedMotion() {
  return typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const delay = Number(binding.value) || 0
    if (delay > 0) el.style.setProperty('--d', `${delay}ms`)

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          el.classList.add('in')
          obs.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    observer.observe(el)
    el.__revealObserver = observer
  },

  unmounted(el) {
    if (el.__revealObserver) {
      el.__revealObserver.disconnect()
      delete el.__revealObserver
    }
  },
}
