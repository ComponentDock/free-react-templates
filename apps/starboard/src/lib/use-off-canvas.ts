import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export interface OffCanvas {
  isOpen: boolean
  close: () => void
  toggle: () => void
  /** The 300px sidebar, so a press outside it can be told apart from one inside. */
  panelRef: RefObject<HTMLElement | null>
  /** The hamburger, so pressing it does not count as an outside press. */
  toggleRef: RefObject<HTMLButtonElement | null>
  /** The sidebar's close glyph, so focus can be moved into the panel on open. */
  closeRef: RefObject<HTMLButtonElement | null>
}

/**
 * One open/closed flag for the hamburger and the sidebar it drives, plus the
 * reference's three close paths — the close glyph (an `onClose` call), a pointer
 * press outside both the panel and the toggle (which is also the veil), and
 * `Escape`. The document is scroll-locked while the panel is open, focus is moved
 * into the panel on open and handed back to the hamburger on close, and the
 * reference's own "close again above 768px" resize handler is deliberately not
 * reproduced — this sidebar is the only navigation at every width, so a desktop
 * resize must not dismiss it.
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

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mouseup', handlePointerUp)
    document.body.style.overflow = 'hidden'
    closeButton.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mouseup', handlePointerUp)
      document.body.style.overflow = ''
      trigger.focus()
    }
  }, [isOpen, close])

  return { isOpen, close, toggle, panelRef, toggleRef, closeRef }
}
