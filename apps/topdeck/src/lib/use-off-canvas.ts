import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export interface OffCanvas {
  isOpen: boolean
  close: () => void
  toggle: () => void
  /** The 300px panel, so a press outside it can be told apart from one inside. */
  panelRef: RefObject<HTMLElement | null>
  /** The hamburger, so pressing it does not count as an outside press. */
  toggleRef: RefObject<HTMLButtonElement | null>
  /** The panel's close glyph, so focus can be moved into the panel on open. */
  closeRef: RefObject<HTMLButtonElement | null>
}

/** The width above which the source's own resize handler dismisses the panel. */
export const RESIZE_CLOSE_WIDTH = 768

/**
 * One open/closed flag for the hamburger and the panel it drives, plus the
 * source's four close paths — the close glyph (an `onClose` call), a pointer
 * press outside both the panel and the toggle (which is also the veil), `Escape`,
 * and the source's own `resize` handler that dismisses the panel once the
 * viewport is wider than 768px. The resize rule is kept deliberately: the panel
 * is only reachable below 992px, so a wider viewport collapses it back to the
 * page rather than leaving it open over the band.
 *
 * The document is scroll-locked while the panel is open, focus is moved into the
 * panel on open and handed back to the hamburger on close.
 */
export function useOffCanvas(): OffCanvas {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    // Every node below is mounted whenever the panel can be open, so they are read
    // once here (and kept in the closure) rather than re-read inside each handler.
    const panel = panelRef.current as HTMLElement
    const trigger = toggleRef.current as HTMLButtonElement
    const closeButton = closeRef.current as HTMLButtonElement

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    const handlePointerUp = (event: MouseEvent) => {
      const target = event.target as Node

      if (panel.contains(target)) {
        return
      }
      if (trigger.contains(target)) {
        return
      }

      close()
    }

    const handleResize = () => {
      if (window.innerWidth > RESIZE_CLOSE_WIDTH) {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mouseup', handlePointerUp)
    window.addEventListener('resize', handleResize)
    document.body.style.overflow = 'hidden'
    closeButton.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mouseup', handlePointerUp)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
      trigger.focus()
    }
  }, [isOpen, close])

  return { isOpen, close, toggle, panelRef, toggleRef, closeRef }
}
