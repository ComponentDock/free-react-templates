import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

/** The width at which the bar stops being a row and becomes a panel. */
const DESKTOP_QUERY = '(min-width: 861px)'

interface DisclosureMenu {
  readonly open: boolean
  readonly toggle: () => void
  readonly close: () => void
  readonly barRef: RefObject<HTMLElement | null>
  readonly buttonRef: RefObject<HTMLButtonElement | null>
}

/**
 * The page's only navigation state. Four things close the panel: the button, a
 * link inside it, Escape (which also returns focus to the button) and any press
 * outside the bar. Crossing to 861 px closes it too — the stylesheet's
 * breakpoint is 860, so the two thresholds differ by one on purpose.
 */
export function useDisclosureMenu(): DisclosureMenu {
  const [open, setOpen] = useState(false)
  const barRef = useRef<HTMLElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const toggle = useCallback(() => setOpen((value) => !value), [])
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const query = window.matchMedia(DESKTOP_QUERY)
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    const onPointerDown = (event: MouseEvent) => {
      if (barRef.current?.contains(event.target as Node)) return
      setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [open])

  return { open, toggle, close, barRef, buttonRef }
}
