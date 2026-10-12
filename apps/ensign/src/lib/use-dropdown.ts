import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, RefObject } from 'react'
import { focusNode } from './focus'
import { PANEL_WIDTH } from './styles'

/**
 * The viewport guard the design applies to the disclosure's placement: when the panel's
 * 160px would run past the viewport's right edge from its trigger's left edge, the panel
 * hangs from the trigger's right edge instead so it never leaves the window.
 */
function overflowsViewport(node: HTMLElement): boolean {
  return node.getBoundingClientRect().right + PANEL_WIDTH > window.innerWidth
}

export interface Dropdown {
  /** True while the panel is out. */
  isOpen: boolean
  /** True when the panel is hanging from its trigger's right edge. */
  flip: boolean
  /** The row, so a press inside it can be told apart from one outside it. */
  rowRef: RefObject<HTMLLIElement | null>
  /** The trigger, where focus goes back when the panel is dismissed. */
  triggerRef: RefObject<HTMLAnchorElement | null>
  /** Shows the panel, measuring its placement first. */
  open: (node: HTMLElement) => void
  /** Toggles the panel — the design's own click path. */
  toggle: (node: HTMLElement) => void
  /** Hides the panel. */
  close: () => void
  /** Hands one of the panel's rows to the hook, and lands focus on it where asked. */
  registerItem: (node: HTMLAnchorElement | null, index: number) => void
  /** `ArrowDown` on the trigger opens the panel and lands on its first row. */
  onTriggerKeyDown: (event: KeyboardEvent<HTMLAnchorElement>) => void
  /** Steps between the panel's rows, and dismisses the panel on `Escape`. */
  onItemKeyDown: (event: KeyboardEvent<HTMLAnchorElement>, index: number) => void
}

/**
 * One disclosure's own state, the paths that drive it and the placement it settles on.
 * The panel is opened by two signals — a pointer resting on the row and a click on its
 * trigger, exactly as the design binds both — and closed by a pointer leaving the row, a
 * press anywhere outside it, `Escape`, and activating one of its own rows. Every
 * instance owns its own state, so two disclosures could never interfere; the row is the
 * single listening surface, which is what keeps a pointer moving into the panel from
 * counting as a pointer leaving the row.
 */
export function useDropdown(count: number): Dropdown {
  const [isOpen, setIsOpen] = useState(false)
  const [flip, setFlip] = useState(false)
  const rowRef = useRef<HTMLLIElement | null>(null)
  const triggerRef = useRef<HTMLAnchorElement | null>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])
  /** The row the panel's next commit should land focus on, where one was asked for. */
  const focusRequest = useRef<number | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setFlip(false)
    focusRequest.current = null
  }, [])

  const open = useCallback((node: HTMLElement) => {
    setFlip(overflowsViewport(node))
    setIsOpen(true)
  }, [])

  const toggle = useCallback(
    (node: HTMLElement) => {
      if (isOpen) {
        close()
        return
      }

      open(node)
    },
    [isOpen, close, open],
  )

  const focusItem = useCallback((index: number) => {
    // Remembered either way: the key that opens the panel asks for its first row in the
    // same commit the rows mount in, so `registerItem` is what honours that request.
    focusRequest.current = index
    focusNode(itemRefs.current[index])
  }, [])

  const registerItem = useCallback((node: HTMLAnchorElement | null, index: number) => {
    itemRefs.current[index] = node

    if (node && focusRequest.current === index) {
      focusRequest.current = null
      focusNode(node)
    }
  }, [])

  const onTriggerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        open(event.currentTarget)
        focusItem(0)
      }
    },
    [open, focusItem],
  )

  const onItemKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
      const { key } = event

      if (key === 'ArrowDown' || key === 'ArrowUp') {
        event.preventDefault()
        focusItem((index + (key === 'ArrowDown' ? 1 : -1) + count) % count)
        return
      }

      if (key === 'Escape') {
        event.preventDefault()
        close()
        focusNode(triggerRef.current)
      }
    },
    [count, focusItem, close],
  )

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const row = rowRef.current as HTMLLIElement

    const handlePointerDown = (event: MouseEvent) => {
      if (!row.contains(event.target as Node)) {
        close()
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [isOpen, close])

  return {
    isOpen,
    flip,
    rowRef,
    triggerRef,
    open,
    toggle,
    close,
    registerItem,
    onTriggerKeyDown,
    onItemKeyDown,
  }
}
