import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

/**
 * The width at which the rail stops behaving as a drawer. From 992px up the rail is in its own 20%
 * slot and never moves, so the drawer's state is dropped rather than left open behind a rail the
 * design pins in place anyway.
 */
export const DRAWER_RESET_QUERY = '(min-width: 992px)'

export interface Drawer {
  /** True while the rail is pulled back in over the content on a narrow viewport. */
  isOpen: boolean
  /** Pulls the drawer out, or pushes it back when it is already out. */
  toggle: () => void
  /** Pushes it back — used by every path that ends with the drawer hidden. */
  close: () => void
  /** The rail itself, so a press inside it is never read as a press outside. */
  railRef: RefObject<HTMLElement | null>
  /** The burger, which is the other surface a press has to be forgiven for. */
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The rail's off-canvas state on narrow viewports: one flag, the `body` class the design's own
 * push hangs off, and **four** ways back — a second press on the burger, `Escape`, a press outside
 * the rail and the burger, and a scroll. The width it resets at is watched as well, because a
 * window dragged past 992px has no drawer left to close. There is no backdrop and no scroll lock:
 * the drawer pushes the content aside instead of covering it.
 */
export function useDrawer(): Drawer {
  const [isOpen, setIsOpen] = useState(false)
  const railRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('offcanvas', isOpen)

    return () => {
      document.body.classList.remove('offcanvas')
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    const handlePress = (event: MouseEvent) => {
      const target = event.target as Node

      const forgives = (node: HTMLElement | null): boolean => node !== null && node.contains(target)

      if (forgives(railRef.current) || forgives(toggleRef.current)) {
        return
      }

      close()
    }

    const handleScroll = () => {
      close()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePress)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePress)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen, close])

  useEffect(() => {
    const query = window.matchMedia(DRAWER_RESET_QUERY)

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        close()
      }
    }

    query.addEventListener('change', handleChange)

    return () => {
      query.removeEventListener('change', handleChange)
    }
  }, [close])

  return { isOpen, toggle, close, railRef, toggleRef }
}
