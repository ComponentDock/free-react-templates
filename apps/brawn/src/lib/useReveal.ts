import { useEffect, useRef, useState } from 'react'

/** Read once at mount: the preference is a load-time setting, not a live one. */
export function prefersReducedMotion(): boolean {
  if (typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Fade-and-rise reveal for one container.
 *
 * The reference hides its animated cards until a scroll handler fires, which
 * leaves the content invisible when the script never runs. Here the content is
 * visible by default and only the *animation* is conditional: no observer API
 * or a reduced-motion preference both resolve to `visible`.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  const [plain] = useState(prefersReducedMotion)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined
    }
    const node = ref.current!
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setSeen(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible: seen || plain || typeof IntersectionObserver === 'undefined' }
}
