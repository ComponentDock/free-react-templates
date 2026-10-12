import { useEffect, useState, type CSSProperties } from 'react'

/**
 * The hero photograph drifts against the scroll: the design hands its background layer to a
 * parallax bundle that translates it by half the distance scrolled, so this is the same half-rate
 * transform, driven by a passive scroll listener and left off entirely when the visitor asks for
 * reduced motion (in which case the layer never moves and carries no transform at all).
 */
export function useParallax(enabled: boolean): CSSProperties | undefined {
  const [offset, setOffset] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (!enabled) {
      return
    }

    const onScroll = () => {
      setOffset(window.scrollY / 2)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [enabled])

  return offset === undefined ? {} : { transform: `translateY(${offset}px)` }
}
