import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

/** The width at which the bar stops being a row and becomes a menu. */
const DESKTOP_QUERY = '(min-width: 861px)'

interface MobileMenu {
  readonly open: boolean
  readonly toggle: () => void
  readonly close: () => void
  readonly headerRef: RefObject<HTMLElement | null>
  readonly buttonRef: RefObject<HTMLButtonElement | null>
}

/**
 * The page's only state. Four things close the panel: the button, a link inside
 * it, Escape (which also returns focus to the button) and any press outside the
 * bar. Crossing to 861 px closes it too.
 */
export function useMobileMenu(): MobileMenu {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
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
      if (headerRef.current?.contains(event.target as Node)) return
      setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [open])

  return { open, toggle, close, headerRef, buttonRef }
}
