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
 * Keeps a second-level flyout inside the viewport: the surface is measured as it
 * is opened, and if its right edge would fall outside the window it opens to the
 * left of its row instead of to the right. The measurement is driven by the event
 * that opens the surface rather than by an effect, so nothing is read before it is
 * laid out. The measured element keeps its layout box while it is
 * `visibility: hidden`, so it can be measured before it is shown.
 */
export function useViewportFlip<T extends HTMLElement>(): ViewportFlip<T> {
  const ref = useRef<T | null>(null)
  const [flipped, setFlipped] = useState(false)

  const measure = useCallback(() => {
    const surface = ref.current as T

    setFlipped(surface.getBoundingClientRect().right > window.innerWidth)
  }, [])

  return { ref, flipped, measure }
}
