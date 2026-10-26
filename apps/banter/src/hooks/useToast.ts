import { useCallback, useEffect, useRef, useState } from 'react'

/** How long an announcement lives. */
export const TOAST_MS = 2600

export interface Toast {
  message: string
  announce: (message: string) => void
}

/**
 * The page's single live region. A new announcement replaces the text and
 * restarts the clock, so two quick actions never leave a stale message behind.
 */
export function useToast(): Toast {
  const [message, setMessage] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const stop = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }, [])

  useEffect(() => stop, [stop])

  const announce = useCallback(
    (next: string) => {
      stop()
      setMessage(next)
      timer.current = setTimeout(() => setMessage(''), TOAST_MS)
    },
    [stop],
  )

  return { message, announce }
}
