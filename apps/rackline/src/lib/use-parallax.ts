import { useEffect, useState } from 'react'
import { prefersReducedMotion } from './prefers-reduced-motion'

/**
 * Scroll parallax offset in pixels for the photo bands: the band's background
 * drifts slightly against the page as it scrolls past (the reference behaviour
 * the original page drives through its parallax plugin). Returns `0` — and
 * never attaches a listener — when the visitor reduces motion, so the band sits
 * perfectly still.
 */
export function useParallax(ratio = 0.2): number {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const onScroll = () => {
      setOffset(Math.round(window.scrollY * ratio))
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [ratio])

  return offset
}
