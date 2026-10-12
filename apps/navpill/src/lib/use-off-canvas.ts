import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { PANEL_RESIZE_WIDTH } from './site'

export interface OffCanvas {
  isOpen: boolean
  close: () => void
  toggle: () => void
  /** The 300px drawer, so an outside pointer press can be told apart from an inside one. */
  panelRef: RefObject<HTMLElement | null>
  /** The hamburger, so pressing it does not count as an outside press. */
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * One open/closed flag for the header toggle and the panel it drives, plus the
 * reference's four close paths: the close glyph (an `onClose` call), a pointer
 * press outside both the panel and the toggle, `Escape`, and a viewport that
 * grows past 768px. The document is scroll-locked while the panel is open — a
 * deliberate addition over the reference, which lets the page scroll behind it.
 */
export function useOffCanvas(): OffCanvas {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

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

    // Both nodes are mounted whenever the panel can be open, so they are read once
    // here rather than re-read (and re-guarded) inside every handler.
    const panel = panelRef.current as HTMLElement
    const trigger = toggleRef.current as HTMLButtonElement

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
      if (window.innerWidth > PANEL_RESIZE_WIDTH) {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mouseup', handlePointerUp)
    window.addEventListener('resize', handleResize)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mouseup', handlePointerUp)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return { isOpen, close, toggle, panelRef, toggleRef }
}
