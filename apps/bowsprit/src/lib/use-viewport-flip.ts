import { useCallback, useRef, useState } from 'react'
import type { RefObject } from 'react'

export interface ViewportFlip<T extends HTMLElement> {
  /** The surface to measure. */
  ref: RefObject<T | null>
  /** True when the surface would run past the right edge and must open leftwards. */
  flipped: boolean
  /** Measures the surface against the window — call it from the event that opens it. */
  measure: () => void
}

/**
 * Keeps the dropdown surface inside the window: it is measured as it is opened,
 * and if its right edge would fall outside the viewport the surface is pinned to
 * its row's right edge (`right: 0`) instead of hanging off to the right. The
 * measurement is driven by the event that opens the surface rather than by an
 * effect, so nothing is read before it is laid out; the measured element keeps its
 * box while it is invisible, so there is a box to measure. A row that has no
 * floating surface to measure (the narrow bar's in-flow one) simply never flips.
 */
export function useViewportFlip<T extends HTMLElement>(): ViewportFlip<T> {
  const ref = useRef<T | null>(null)
  const [flipped, setFlipped] = useState(false)

  const measure = useCallback(() => {
    const surface = ref.current

    if (surface) {
      setFlipped(surface.getBoundingClientRect().right > window.innerWidth)
    }
  }, [])

  return { ref, flipped, measure }
}
