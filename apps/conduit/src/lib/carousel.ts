import { useEffect, useState } from 'react'

export type PerView = 1 | 2 | 3

/**
 * The review carousel shows one, two or three cards depending on width. At three
 * per view with three cards the maximum index is 0, so the reference hides both
 * arrows and renders no dots at all — that is geometry, not styling.
 */
export function perView(width: number): PerView {
  if (width >= 1024) {
    return 3
  }
  return width >= 640 ? 2 : 1
}

export interface CarouselGeometry {
  perView: PerView
  maxIndex: number
  dots: number
}

export function carouselGeometry(slides: number, width: number): CarouselGeometry {
  const view = perView(width)
  const maxIndex = Math.max(0, slides - view)
  return { perView: view, maxIndex, dots: maxIndex > 0 ? maxIndex + 1 : 0 }
}

export interface CarouselState extends CarouselGeometry {
  index: number
  next: () => void
  previous: () => void
  goTo: (index: number) => void
  /** One slide width, as a percentage of the track. */
  offset: number
}

export function useCarousel(slides: number): CarouselState {
  const [geometry, setGeometry] = useState<CarouselGeometry>(() =>
    carouselGeometry(slides, window.innerWidth),
  )
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const update = () => {
      const next = carouselGeometry(slides, window.innerWidth)
      setGeometry(next)
      setIndex((current) => Math.min(current, next.maxIndex))
    }
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [slides])

  const goTo = (target: number) => {
    setIndex(Math.min(Math.max(target, 0), geometry.maxIndex))
  }

  return {
    ...geometry,
    index,
    next: () => goTo(index + 1),
    previous: () => goTo(index - 1),
    goTo,
    offset: index * (100 / geometry.perView),
  }
}
