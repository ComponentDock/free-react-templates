import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { prefersReducedMotion, REDUCE_QUERY } from './scroll'

/** Reads the media query once on mount and follows it if the reader changes it. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(prefersReducedMotion)

  useEffect(() => {
    const query = window.matchMedia(REDUCE_QUERY)
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * Reveal-on-scroll: one IntersectionObserver per element, disconnected after it
 * fires. In jsdom (and any browser without the API) the element is simply
 * visible — a page must never be stuck at `opacity: 0` because a listener is
 * missing.
 */
export function useReveal(): { ref: RefObject<HTMLDivElement | null>; visible: boolean } {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced || typeof IntersectionObserver === 'undefined') {
      return
    }
    const node = ref.current
    if (!node) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return { ref, visible: reduced || typeof IntersectionObserver === 'undefined' || shown }
}

/** Three steps of the carousel's own arithmetic, kept pure so it can be tested. */
export function perViewFor(width: number): number {
  if (width >= 1024) {
    return 3
  }
  return width >= 640 ? 2 : 1
}

export function maxIndexFor(count: number, perView: number): number {
  return Math.max(0, count - perView)
}
