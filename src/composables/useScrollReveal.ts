import { ref, onMounted } from 'vue'

export function useScrollReveal() {
  const revealedElements = ref<Set<string>>(new Set())

  const observe = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealedElements.value.add(id)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.15 })

    observer.observe(el)
  }

  const isRevealed = (id: string) => revealedElements.value.has(id)

  return {
    observe,
    isRevealed
  }
}
