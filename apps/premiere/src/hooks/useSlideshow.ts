import { useEffect, useState } from 'react'

/** The photo layer cross-fades every 7 seconds, over a 1s opacity transition. */
const SLIDE_INTERVAL_MS = 7000

/** The design skips its cross-fade for visitors who prefer reduced motion. */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Cycle through `count` photos every `intervalMs`, returning the active index.
 * A single-photo layer and reduced-motion visitors never start a timer.
 */
export function useSlideshow(count: number, intervalMs: number = SLIDE_INTERVAL_MS): number {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (count < 2 || prefersReducedMotion()) return

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % count)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [count, intervalMs])

  return active
}
