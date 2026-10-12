import { useEffect, useState } from 'react'

/** The distance past which the design's bar leaves the hero and pins itself to the top. */
const SCROLL_THRESHOLD = 60

/**
 * True once the page has scrolled past the hero's top. The design handles this with a scroll
 * behaviour bundle (`awake` / `sleep`); here it is one passive listener that records whether the
 * page is past the threshold, so the bar can trade its transparent-over-the-photograph state for the
 * pinned, tinted one.
 */
export function useScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrolled
}
