import { useEffect, useState } from 'react'

/** How many quote cards are visible at once: one on phones, two at md, three at lg. */
export type PerView = 1 | 2 | 3

export function perViewFor(width: number): PerView {
  if (width >= 1024) {
    return 3
  }
  if (width >= 768) {
    return 2
  }
  return 1
}

/** Reads the breakpoint once and again on every resize. */
export function usePerView(): PerView {
  const [perView, setPerView] = useState<PerView>(() => perViewFor(window.innerWidth))

  useEffect(() => {
    const onResize = () => setPerView(perViewFor(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return perView
}
