import { useCallback, useState } from 'react'

export interface Disclosure {
  isOpen: boolean
  toggle: () => void
}

/** One open/closed flag for the folded-away menu below the design's 992px turn-over. */
export function useDisclosure(): Disclosure {
  const [isOpen, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen((current) => !current)
  }, [])

  return { isOpen, toggle }
}
