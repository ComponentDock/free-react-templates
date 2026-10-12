import { useEffect, useState } from 'react'

/**
 * True once the page has scrolled past `threshold` pixels. Drives the header's
 * transparent → solid `#010E21` switch and the appearance of the back-to-top
 * circle.
 */
export function useScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
