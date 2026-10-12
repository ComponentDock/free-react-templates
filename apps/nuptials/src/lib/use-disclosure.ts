import { useCallback, useState } from 'react'

export interface Disclosure {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

/** One open/closed flag — the folded-away menu, and each of the reservation's two pickers. */
export function useDisclosure(): Disclosure {
  const [isOpen, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen((current) => !current)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  return { isOpen, toggle, close }
}
