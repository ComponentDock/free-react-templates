import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { focusNode } from './focus'

/**
 * The width at which the drawer's state is dropped. The source tests
 * `window.innerWidth > 768` inside a resize handler; the same hand-over is
 * expressed here as a media query so it fires once, when the viewport arrives at
 * 768px — a page *at* 768px keeps its state, exactly as the source's strict
 * comparison does.
 */
export const DRAWER_RESET_QUERY = '(min-width: 768px)'

export interface Drawer {
  /** True while the panel is out. */
  isOpen: boolean
  /** Opens the panel, or closes it when it is already out. */
  toggle: () => void
  /** Folds the panel away and hands focus back to whatever opened it. */
  close: () => void
  /** The hamburger, so focus can go back to it when the panel closes. */
  toggleRef: RefObject<HTMLButtonElement | null>
  /** The panel, so a press inside it can be told apart from one outside it. */
  panelRef: RefObject<HTMLDivElement | null>
  /** The panel's own close control, where focus lands as the panel opens. */
  closeRef: RefObject<HTMLButtonElement | null>
}

/**
 * The drawer as one open flag plus the three paths that close it: `Escape`, a press
 * outside the panel, and the viewport reaching the drawer's hand-over width (from
 * where the wide row carries the same destinations). Focus moves onto the panel's own
 * close control as it opens and back to the opener when it closes, so a keyboard user
 * is never left behind a panel that just slid away.
 *
 * A press on the hamburger itself is deliberately ignored by the outside-press path:
 * that press is the toggle's own, and treating it as "outside" would close the panel
 * on the way in.
 */
export function useDrawer(): Drawer {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    focusNode(toggleRef.current)
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()
      return
    }

    setIsOpen(true)
  }, [isOpen, close])

  useEffect(() => {
    if (isOpen) {
      focusNode(closeRef.current)
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

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      const panel = panelRef.current

      if (panel?.contains(target) || toggleRef.current?.contains(target)) {
        return
      }

      close()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePointerDown)
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

  return { isOpen, toggle, close, toggleRef, panelRef, closeRef }
}
