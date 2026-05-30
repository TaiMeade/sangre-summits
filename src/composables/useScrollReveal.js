import { onBeforeUnmount, onMounted } from 'vue'

// Adds `.is-visible` to any element carrying the `.reveal` class once it
// scrolls into view, driving the fade-up animation defined in main.css.
// Respects prefers-reduced-motion (CSS handles the no-motion fallback).
export function useScrollReveal(options = {}) {
  const { rootMargin = '0px 0px -10% 0px', threshold = 0.12 } = options
  let observer = null

  onMounted(() => {
    const targets = document.querySelectorAll('.reveal:not(.is-visible)')

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything.
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin, threshold }
    )

    targets.forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
