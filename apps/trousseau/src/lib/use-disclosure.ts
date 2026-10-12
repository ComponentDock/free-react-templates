import { useCallback, useState } from 'react'

export interface Disclosure {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

/**
 * One open/closed flag for a dropdown, the folded-away menu and the search row. `open` is
 * idempotent rather than a toggle, because a hover and a click are two signals for the same
 * surface: a toggle would close the panel the pointer had just opened.
 */
export function useDisclosure(): Disclosure {
  const [isOpen, setOpen] = useState(false)

  const open = useCallback(() => {
    setOpen(true)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  const toggle = useCallback(() => {
    setOpen((current) => !current)
  }, [])

  return { isOpen, open, close, toggle }
}
