import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, RefObject } from 'react'

/** The width at which the row's list is always on screen and the hamburger is not. */
export const DESKTOP_QUERY = '(min-width: 768px)'

export interface NavCollapse {
  /** True while the narrow bar's list is expanded. */
  isOpen: boolean
  /** True once the viewport is wide enough for the row's always-visible presentation. */
  isDesktop: boolean
  toggle: () => void
  close: () => void
  /** Called when the opening height transition ends, to hand the box back to `auto`. */
  settle: () => void
  /** The hamburger, so focus can go back to it when the list closes. */
  toggleRef: RefObject<HTMLButtonElement | null>
  /** The expanding region, so its content height can be measured. */
  regionRef: RefObject<HTMLDivElement | null>
  /** The inline height that drives the 350ms opening transition (absent at rest). */
  regionStyle: CSSProperties | undefined
}

/**
 * The narrow bar's expanding list, as one open/closed flag plus the height that
 * animates it. The region is measured as it opens (a `0.35s ease` height from 0 to
 * its content height) and handed back to `auto` when the transition ends, so
 * nothing stays clipped after the animation and no stale height survives a close.
 *
 * Three paths close it: the toggle itself, `Escape` anywhere on the page, and the
 * viewport reaching 768px — from there the row is on screen regardless of the flag,
 * so leaving it set would leave the row in an open state nobody asked for. Every
 * close hands focus back to the hamburger.
 *
 * When the box cannot be measured (no layout at all, as in jsdom) the inline height
 * is dropped rather than pinned to 0, so the list is simply present.
 */
export function useNavCollapse(): NavCollapse {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches)
  const [height, setHeight] = useState<number | null>(null)
  const [pending, setPending] = useState(false)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const regionRef = useRef<HTMLDivElement | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setPending(false)
    setHeight(null)
    const toggle = toggleRef.current as HTMLButtonElement

    toggle.focus()
  }, [])

  const settle = useCallback(() => {
    setHeight(null)
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()
      return
    }

    setPending(true)
    setIsOpen(true)
  }, [isOpen, close])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const region = regionRef.current
    const measured = region ? region.scrollHeight : 0

    setHeight(measured > 0 ? measured : null)
    setPending(false)
  }, [isOpen])

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)

      if (event.matches) {
        close()
      }
    }

    query.addEventListener('change', handleChange)

    return () => {
      query.removeEventListener('change', handleChange)
    }
  }, [close])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, close])

  const regionStyle: CSSProperties | undefined = !isOpen
    ? undefined
    : pending
      ? { height: 0 }
      : height === null
        ? undefined
        : { height: `${height}px` }

  return { isOpen, isDesktop, toggle, close, settle, toggleRef, regionRef, regionStyle }
}
