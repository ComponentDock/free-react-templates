import { useEffect, useState } from 'react'

/**
 * True once the page has scrolled past `threshold` px. One passive listener records the answer, so
 * the back-to-top control can appear on the design's own cue and disappear again at the top.
 */
export function useScrolledPast(threshold: number): boolean {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setPast(window.scrollY > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return past
}
