import { useEffect, useRef, useState } from 'react'

export interface ToastState {
  /** The current message, or `null` when nothing is on screen. */
  message: string | null
  /** Show a message; it clears itself after the house 4 s. */
  notify: (message: string) => void
}

/**
 * The shared toast: a single message that slides in from the right and clears
 * 4 s later. Keeping it in a hook lets both forms share one behaviour without a
 * provider or a global.
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

/** Fixed top-right confirmation; announces politely and is inert when empty. */
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
