import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface TextModalProps {
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

export function TextModal({ open, onClose }: TextModalProps) {
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

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Text modal"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[480px] rounded-lg bg-white shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] dark:bg-[#1a1a1a]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-10">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Special Announcement
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            This is an important update we wanted to share with you. Thank you for being a valued
            member of our community. We are committed to providing you with the best experience
            possible.
          </p>
          <button
            onClick={onClose}
            className="w-full rounded bg-[#007bff] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0069d9] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  )
}
