import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export interface StickyHeader {
  /** The element that stays in the flow and holds the pinned row's height. */
  wrapperRef: RefObject<HTMLDivElement | null>
  /** The nav row itself, which is pinned once the page passes it. */
  rowRef: RefObject<HTMLDivElement | null>
  isSticky: boolean
  /** The row's height while pinned, so the pin causes no layout shift. */
  height: number
}

/**
 * The source's sticky port, kept as a real state change rather than a scroll
 * hack: the wrapper stays in the document flow, so its own offset is constant,
 * and once the window has scrolled past that offset the row is pinned to the top
 * and painted the brand blue. While pinned the wrapper keeps the row's height, so
 * nothing below the header jumps, exactly the way the source's own
 * `sticky-wrapper` does it.
 *
 * The listener is passive and is removed on unmount; a resize re-measures, since
 * the pinned row's height is breakpoint dependent.
 */
export function useStickyHeader(): StickyHeader {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const rowRef = useRef<HTMLDivElement | null>(null)
  const [isSticky, setIsSticky] = useState(false)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    // The wrapper and the row are mounted before this effect can run, so they are
    // read once here rather than re-read inside the scroll handler.
    const wrapper = wrapperRef.current as HTMLDivElement
    const row = rowRef.current as HTMLDivElement

    const update = () => {
      const top = wrapper.getBoundingClientRect().top + window.scrollY
      const pinned = window.scrollY >= top

      setIsSticky(pinned)
      setHeight(pinned ? row.offsetHeight : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return { wrapperRef, rowRef, isSticky, height }
}
