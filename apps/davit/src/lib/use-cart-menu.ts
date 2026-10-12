import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export interface CartMenuState {
  /** True while the bill list hangs open under the cart link. */
  isOpen: boolean
  /** Opens it — what a hover or an `ArrowDown` on the link asks for. */
  open: () => void
  /** Shuts it — what a chosen bill item, a click outside or `Escape` asks for. */
  close: () => void
  /** Opens it, or shuts it when it is already out. */
  toggle: () => void
  /**
   * The item the link and its list both live in. Anything pressed outside this box is an
   * outside press, and shuts the list.
   */
  rootRef: RefObject<HTMLLIElement | null>
  /** The link itself, which `Escape` hands focus back to once the list is shut. */
  triggerRef: RefObject<HTMLButtonElement | null>
}

/**
 * The bill list behind the cart link as one open flag and its three closing paths: a press
 * anywhere outside the item, `Escape`, and a chosen destination. The design's own script
 * binds hover, click, an outside press and `Escape`; `Escape` returning focus to the link is
 * what keeps the list walkable from a keyboard. Nothing is mounted inside the list while it
 * is shut, so a shut list holds no focusable destinations.
 */
export function useCartMenu(): CartMenuState {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

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
        triggerRef.current!.focus()
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current!.contains(event.target as Node)) {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen, close])

  return { isOpen, open, close, toggle, rootRef, triggerRef }
}
