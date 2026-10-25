import { useEffect, useState } from 'react'

export interface ScrollMetrics {
  /** 0–100, the scroll-progress bar width. */
  progress: number
  /** Past 50 px the header takes its shadow. */
  shadow: boolean
  /** Past 80 px the header leaves the hero and pins itself. */
  stuck: boolean
  /** Past 300 px the back-to-top disc becomes clickable. */
  top: boolean
}

export const REDUCE_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Two thresholds on one header, and both are observable: the shadow appears at
 * 50 px and the pin at 80 px. They are separate numbers in the design, so they
 * stay separate here.
 */
export function scrollMetrics(scrollY: number, scrollHeight: number, innerHeight: number): ScrollMetrics {
  const max = scrollHeight - innerHeight
  return {
    progress: max > 0 ? Math.min(100, (scrollY / max) * 100) : 0,
    shadow: scrollY > 50,
    stuck: scrollY > 80,
    top: scrollY > 300,
  }
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCE_QUERY).matches
}

export function scrollToTop(): void {
  const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth'
  window.scrollTo({ top: 0, behavior })
}

/** One scroll listener feeds the header state, the progress bar and the disc. */
export function useScrollMetrics(): ScrollMetrics {
  const [metrics, setMetrics] = useState<ScrollMetrics>(() => scrollMetrics(0, 0, 0))

  useEffect(() => {
    const update = () => {
      setMetrics(scrollMetrics(window.scrollY, document.documentElement.scrollHeight, window.innerHeight))
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return metrics
}
