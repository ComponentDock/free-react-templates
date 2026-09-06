import { useCallback, useEffect, useRef } from 'react'
import { Lock, X } from 'lucide-react'

interface PasswordModalProps {
  open: boolean
  onClose: () => void
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  )
}

export function PasswordModal({ open, onClose }: PasswordModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus()
      previousFocusRef.current = null
    }
  }, [open])

  useEffect(() => {
    if (!open || !modalRef.current) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const focusable = getFocusableElements(modalRef.current!)
        const first = focusable[0]!
        const last = focusable[focusable.length - 1]!
        if (e.shiftKey && e.target === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && e.target === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose],
  )

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
  }, [])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Password-protected modal"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[440px] rounded-[7px] bg-white shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)] dark:bg-gray-900"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#ccc] transition-colors hover:text-black dark:text-gray-500 dark:hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col items-center gap-5 px-10 py-10">
          {/* Lock icon container */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(62,100,255,0.05)]">
            <Lock size={32} className="text-brand" />
          </div>

          {/* Label */}
          <h2 className="text-lg font-medium text-black dark:text-white">
            This link is password protected
          </h2>

          {/* Description */}
          <p className="text-center text-sm leading-relaxed text-[#777] dark:text-gray-400">
            Please enter the password to access the content behind this protected link.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-5">
            {/* Password input */}
            <input
              type="password"
              placeholder="Enter password"
              aria-label="Password"
              className="w-full border-b border-[#ccc] bg-transparent py-2 text-center text-sm text-black outline-none transition-colors focus:border-black dark:border-gray-600 dark:text-white dark:focus:border-white"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="rounded bg-brand px-[30px] py-[10px] text-sm font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
