import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './motion'

/**
 * Reveal-on-scroll for one element. Under `prefers-reduced-motion`, or in any
 * environment without an IntersectionObserver, the content is shown straight
 * away — the page never depends on an animation to become readable.
 */
export function useReveal<T extends HTMLElement>() {
  const [seen, setSeen] = useState(false)
  const ref = useRef<T | null>(null)
  const reduced = prefersReducedMotion()
  const supported = typeof IntersectionObserver !== 'undefined'

  useEffect(() => {
    if (reduced || !supported) {
      return
    }
    const element = ref.current as T
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSeen(true)
            observer.disconnect()
            return
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [reduced, supported])

  return { ref, shown: reduced || !supported || seen }
}
