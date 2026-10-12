import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export interface DropdownState {
  /** True while the wide panel hangs under the bar, or the folded one stands open in the panel. */
  isOpen: boolean
  /** Opens it — what a hover or an `ArrowDown` on the trigger asks for. */
  open: () => void
  /** Shuts it — what a chosen destination, a click outside or `Escape` asks for. */
  close: () => void
  /** Opens it, or shuts it when it is already out. */
  toggle: () => void
  /**
   * The row the trigger and its panel both live in. Anything pressed outside this box is an outside
   * press, and shuts the panel.
   */
  rootRef: RefObject<HTMLLIElement | null>
  /** The trigger itself, which `Escape` hands focus back to once the panel is shut. */
  triggerRef: RefObject<HTMLButtonElement | null>
}

/**
 * The wide panel as one open flag and its three closing paths: a press anywhere outside the row,
 * `Escape`, and a chosen destination. The design's own script binds hover, click, an outside press
 * and `Escape`; `Escape` returning focus to the trigger is what keeps the panel walkable from a
 * keyboard. Nothing is mounted inside the panel while it is shut, so a shut panel holds no
 * focusable destinations.
 */
export function useDropdown(): DropdownState {
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
