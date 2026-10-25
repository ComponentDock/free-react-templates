import { useEffect, useState } from 'react'

/** Height of the sticky header plus the breathing room the anchors keep. */
export const HEADER_OFFSET = 84

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export interface ScrollMetrics {
  top: number
  progress: number
}

/**
 * One scroll listener for the whole page: the progress bar and the header's
 * shadow both read the same numbers. `progress` is a percentage of the
 * scrollable remainder, so the bar is full exactly at the footer.
 */
export function useScrollMetrics(): ScrollMetrics {
  const [metrics, setMetrics] = useState<ScrollMetrics>({ top: 0, progress: 0 })

  useEffect(() => {
    const read = () => {
      const y = window.scrollY
      if (y <= 0) {
        setMetrics({ top: 0, progress: 0 })
        return
      }
      const max = document.documentElement.scrollHeight - window.innerHeight
      setMetrics({ top: y, progress: max > 0 ? Math.min(100, (y / max) * 100) : 0 })
    }
    read()
    window.addEventListener('scroll', read, { passive: true })
    return () => window.removeEventListener('scroll', read)
  }, [])

  return metrics
}
