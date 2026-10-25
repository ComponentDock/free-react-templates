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
 * A blob is only moved while it is near the viewport: past 200 px either side
 * the transform is parked at zero, so off-screen sections cost nothing.
 */
export function parallaxOffset(
  scrollY: number,
  factor: number,
  rectTop: number,
  rectBottom: number,
  viewportHeight: number,
): number {
  if (rectTop > viewportHeight + 200 || rectBottom < -200) {
    return 0
  }
  return scrollY * factor
}

/**
 * The hero's two blobs drift at different rates; the factors are the design's.
 * The element owns its ref, so the hook only answers with a number.
 */
export function useParallax(elementRef: RefObject<HTMLDivElement | null>, factor: number): number {
  const [offset, setOffset] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      return
    }
    const update = () => {
      const node = elementRef.current
      if (!node) {
        return
      }
      const rect = node.getBoundingClientRect()
      setOffset(parallaxOffset(window.scrollY, factor, rect.top, rect.bottom, window.innerHeight))
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [elementRef, factor, reduced])

  return offset
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

/**
 * The four band labels light up while their band crosses the middle 10 % of the
 * viewport. Missing targets are skipped, so a nav label may point at a band the
 * page does not have without throwing.
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) {
          setActive(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    ids.forEach((id) => {
      const node = document.getElementById(id)
      if (node) {
        observer.observe(node)
      }
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}
