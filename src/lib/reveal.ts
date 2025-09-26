export function initReveal() {
  if (typeof window === 'undefined') return
  const els = document.querySelectorAll('[data-reveal]')
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('is-visible')
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })
  els.forEach((el) => obs.observe(el))
}
