import { useEffect, useState } from 'react'

/**
 * Marks the band currently in view so the matching nav label can carry
 * `aria-current`. Absent IntersectionObserver (jsdom), nothing is marked.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.reduce<IntersectionObserverEntry | null>((best, entry) => {
          if (!entry.isIntersecting) {
            return best
          }
          return best === null || entry.intersectionRatio > best.intersectionRatio ? entry : best
        }, null)
        if (visible?.target.id) {
          setActive(visible.target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    for (const id of ids) {
      const node = document.getElementById(id)
      if (node) {
        observer.observe(node)
      }
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
