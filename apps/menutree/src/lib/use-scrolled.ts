import { useEffect, useState } from 'react'

/**
 * True once the page has scrolled past the band's top edge. Drives the header's
 * transparent → solid white switch (and the palette swap that comes with it).
 */
export function useScrolled(threshold: number): boolean {
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
