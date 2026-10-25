import { useEffect, useRef, useState } from 'react'

export interface ToastState {
  /** The current message, or `null` when nothing is on screen. */
  message: string | null
  /** Show a message; it clears itself after the house 4 s. */
  notify: (message: string) => void
}

/**
 * One message at a time, sliding in from the right and clearing after 4 s.
 * A hook rather than a provider so either form can use it independently.
 */
export function useToast(): ToastState {
  const [message, setMessage] = useState<string | null>(null)
  const timer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current)
      }
    },
    [],
  )

  const notify = (next: string) => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current)
    }
    setMessage(next)
    timer.current = window.setTimeout(() => setMessage(null), 4000)
  }

  return { message, notify }
}

export interface ToastProps {
  message: string | null
}

/** Fixed top-right confirmation; announced politely and absent when empty. */
export function Toast({ message }: ToastProps) {
  if (message === null) {
    return null
  }

  return (
    <div
      role="status"
      className="animate-toast-in fixed top-6 right-6 z-[80] rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white shadow-lg"
    >
      {message}
    </div>
  )
}
