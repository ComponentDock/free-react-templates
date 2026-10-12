import { useState } from 'react'

export interface DisclosureControls {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

/**
 * The open/closed flag behind a disclosure — the header's folded-away menu and the full-screen
 * search sheet each hold one. It carries no behaviour of its own: the caller decides what opening
 * and closing mean (moving focus, wiping a field, clearing an error).
 */
export function useDisclosure(initial: boolean): DisclosureControls {
  const [isOpen, setIsOpen] = useState(initial)

  return {
    isOpen,
    open: () => {
      setIsOpen(true)
    },
    close: () => {
      setIsOpen(false)
    },
    toggle: () => {
      setIsOpen((open) => !open)
    },
  }
}
