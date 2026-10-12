import { useState } from 'react'

/** The card after this one, wrapping round at the end of the run. */
export function nextIndex(index: number, count: number): number {
  return index + 1 >= count ? 0 : index + 1
}

/** The card before this one, wrapping round at the start of the run. */
export function prevIndex(index: number, count: number): number {
  return index - 1 < 0 ? count - 1 : index - 1
}

export interface CarouselControls {
  index: number
  next: () => void
  prev: () => void
  goTo: (index: number) => void
}

/**
 * Which card of the running order is in view. The design hands this to a carousel plugin that
 * moves on its own; here nothing moves unless the reader asks, so the controls are the only
 * drivers and both ends wrap round.
 */
export function useCarousel(count: number): CarouselControls {
  const [index, setIndex] = useState(0)

  return {
    index,
    next: () => {
      setIndex((current) => nextIndex(current, count))
    },
    prev: () => {
      setIndex((current) => prevIndex(current, count))
    },
    goTo: (target: number) => {
      setIndex(target)
    },
  }
}
