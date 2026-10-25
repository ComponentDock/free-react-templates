import { useEffect, useState } from 'react'

/** 3 slides per view at ≥1024 px, 2 at ≥640 px, 1 below — the measured counts. */
export function perViewFor(width: number): number {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

/** How many testimonial slides the current viewport shows. */
export function usePerView(): number {
  const [perView, setPerView] = useState(() => perViewFor(window.innerWidth))

  useEffect(() => {
    const onResize = () => setPerView(perViewFor(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return perView
}
