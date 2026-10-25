import { useEffect, useState } from 'react'

export const SHADOW_AT = 50
export const TOP_AT = 300
export const REDUCE_QUERY = '(prefers-reduced-motion: reduce)'

export interface ScrollMetrics {
  /** 0–100, the scroll-progress bar width. */
  progress: number
  /** Past 50 px the header takes its shadow. */
  shadow: boolean
  /** Past 300 px the back-to-top disc becomes clickable. */
  top: boolean
}

/** One pure reading of the three scroll thresholds the page cares about. */
export function scrollMetrics(
  scrollY: number,
  scrollHeight: number,
  innerHeight: number,
): ScrollMetrics {
  const max = scrollHeight - innerHeight
  return {
    progress: max > 0 ? Math.min(100, (scrollY / max) * 100) : 0,
    shadow: scrollY > SHADOW_AT,
    top: scrollY > TOP_AT,
  }
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCE_QUERY).matches
}

export function scrollToTop(): void {
  const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth'
  window.scrollTo({ top: 0, behavior })
}

/**
 * One listener feeds the header shadow, the progress bar and the disc, so the
 * page never runs three scroll handlers over the same number.
 */
export function useScrollMetrics(): ScrollMetrics {
  const [metrics, setMetrics] = useState<ScrollMetrics>(() => scrollMetrics(0, 0, 0))

  useEffect(() => {
    const update = () => {
      setMetrics(
        scrollMetrics(window.scrollY, document.documentElement.scrollHeight, window.innerHeight),
      )
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return metrics
}
