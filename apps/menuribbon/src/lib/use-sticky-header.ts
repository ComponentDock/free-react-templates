import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export interface StickyHeader {
  /** The wrapper the header sits in — its offset is the pin threshold. */
  wrapperRef: RefObject<HTMLDivElement | null>
  isStuck: boolean
  /** The wrapper's measured width, so the pinned header keeps its original span. */
  headerWidth: number
}

/**
 * The reference's sticky behaviour expressed as a hook: the header is laid out in
 * normal flow, and once the page has been scrolled past the wrapper's own offset
 * it is pinned to the top of the viewport with the wrapper's width (the source
 * wraps every header in a `sticky-wrapper` div and patches the offsets in, which
 * is what this measures instead). Both the `scroll` and the `resize` listeners
 * re-measure, because the threshold moves when the layout does.
 */
export function useStickyHeader(): StickyHeader {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [isStuck, setIsStuck] = useState(false)
  const [headerWidth, setHeaderWidth] = useState(0)

  useEffect(() => {
    const sync = () => {
      const node = wrapperRef.current

      if (!node) {
        return
      }

      const offset = node.getBoundingClientRect().top + window.scrollY

      setHeaderWidth(node.offsetWidth)
      setIsStuck(window.scrollY > offset)
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)

    return () => {
      window.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  return { wrapperRef, isStuck, headerWidth }
}
