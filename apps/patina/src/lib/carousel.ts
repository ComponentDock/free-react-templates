import { useEffect, useState } from 'react'

export type PerView = 1 | 2 | 3

/** Three cards at lg, two at sm, one on a phone. */
export function perView(width: number): PerView {
  if (width >= 1024) {
    return 3
  }
  return width >= 640 ? 2 : 1
}

export interface CarouselGeometry {
  /** Columns actually occupied — never more than there are slides. */
  perView: number
  maxIndex: number
  dots: number
}

/**
 * The view is the smaller of the breakpoint's column count and the number of
 * slides. That is what keeps a two-card carousel honest: at three and two
 * columns there is nowhere to move, so no arrows and no dots are rendered, and
 * the pair is centred rather than pinned left beside an empty third column.
 */
export function carouselGeometry(slides: number, width: number): CarouselGeometry {
  const view = Math.max(1, Math.min(perView(width), slides))
  const maxIndex = Math.max(0, slides - view)
  return { perView: view, maxIndex, dots: maxIndex > 0 ? maxIndex + 1 : 0 }
}

export interface CarouselState extends CarouselGeometry {
  index: number
  next: () => void
  previous: () => void
  goTo: (index: number) => void
  /** Offset as a percentage of the track. */
  offset: number
}

export function useCarousel(slides: number): CarouselState {
  const [geometry, setGeometry] = useState<CarouselGeometry>(() => carouselGeometry(slides, window.innerWidth))
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
