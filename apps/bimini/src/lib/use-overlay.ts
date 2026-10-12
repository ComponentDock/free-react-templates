import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { CLOSE_REVEAL_MS, SHEET_STATE_CLASS } from './site'

export interface Overlay {
  /** True while the sheet is drawn over the page. */
  isOpen: boolean
  /** True once the close control has settled in — the design's own 900ms after the sheet opens. */
  isCloseVisible: boolean
  /** Opens the sheet, or closes it when it is already up. */
  toggle: () => void
  /** Takes the sheet down — every path that ends with it hidden runs through here. */
  close: () => void
  /** The sheet itself, so a press inside it is never read as a press past it. */
  sheetRef: RefObject<HTMLElement | null>
  /** The burger, which is the one surface a press past the sheet has to forgive. */
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The sheet's own state: one flag, the `body` class the design's page lock hangs off, and **four**
 * ways back down — the close control, `Escape`, a press past the sheet, and the burger itself. The
 * design only ships the first two (its close is delayed and its outside-press handler is disabled),
 * so the press-past-the-sheet path and the focus handling around it are documented deltas.
 *
 * The design's own 900ms delay before the close control appears is reproduced rather than shortened:
 * the X arrives on the sheet's own timing while `Escape` and a press past the sheet work from the
 * first frame, so nothing is gated behind the wait. The wait is started by the press that opens the
 * sheet and cleared by the press that takes it down, so no render is ever spent catching up with the
 * open state.
 */
export function useOverlay(): Overlay {
  const [isOpen, setIsOpen] = useState(false)
  const [isCloseVisible, setIsCloseVisible] = useState(false)
  const sheetRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const revealRef = useRef<number | null>(null)

  const clearReveal = useCallback(() => {
    if (revealRef.current !== null) {
      window.clearTimeout(revealRef.current)
      revealRef.current = null
    }
  }, [])

  const open = useCallback(() => {
    clearReveal()
    setIsOpen(true)
    setIsCloseVisible(false)

    revealRef.current = window.setTimeout(() => {
      revealRef.current = null
      setIsCloseVisible(true)
    }, CLOSE_REVEAL_MS)
  }, [clearReveal])

  const close = useCallback(() => {
    clearReveal()
    setIsOpen(false)
    setIsCloseVisible(false)
  }, [clearReveal])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()

      return
    }

    open()
  }, [close, isOpen, open])

  // A sheet taken down by the page going away leaves nothing behind it.
  useEffect(() => clearReveal, [clearReveal])

  useEffect(() => {
    document.body.classList.toggle(SHEET_STATE_CLASS, isOpen)

    return () => {
      document.body.classList.remove(SHEET_STATE_CLASS)
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

      if (forgives(sheetRef.current) || forgives(toggleRef.current)) {
        return
      }

      close()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePress)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePress)
    }
  }, [isOpen, close])

  useEffect(() => {
    if (isOpen) {
      sheetRef.current?.focus()

      return
    }

    // Coming back down, focus is handed to the control that opened the sheet — but only when it was
    // inside the sheet to begin with, so the first render never steals it.
    if (sheetRef.current?.contains(document.activeElement)) {
      toggleRef.current?.focus()
    }
  }, [isOpen])

  return { isOpen, isCloseVisible, toggle, close, sheetRef, toggleRef }
}
