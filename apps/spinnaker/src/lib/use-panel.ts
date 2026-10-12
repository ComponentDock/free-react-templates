import { useCallback, useEffect, useState } from 'react'

/**
 * The width at which the folding panel puts itself away. Below 992px the bar's wide list is hidden
 * and the panel is the only presentation of its rows; from 992px up the list carries every
 * destination, so the panel's state is dropped rather than left open behind the rows the design
 * shows instead.
 */
export const PANEL_RESET_QUERY = '(min-width: 992px)'

export interface Panel {
  /** True while the folding panel is expanded. */
  isOpen: boolean
  /** Expands the panel, or folds it away when it is already out. */
  toggle: () => void
  /** Folds it away — used when a destination inside it is activated. */
  close: () => void
}

/**
 * The folding panel as one open flag plus the two paths that shut it: `Escape`, and the viewport
 * passing the width where the bar's own list takes over. Nothing is mounted inside it while it is
 * shut, so a folded panel holds no focusable copies of the bar's rows.
 */
export function usePanel(): Panel {
  const [isOpen, setIsOpen] = useState(false)

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

  useEffect(() => {
    const query = window.matchMedia(PANEL_RESET_QUERY)

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

  return { isOpen, toggle, close }
}
