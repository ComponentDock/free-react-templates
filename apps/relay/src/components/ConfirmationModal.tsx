import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface ConfirmationModalProps {
  open: boolean
  onClose: () => void
}

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-white"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function ConfirmationModal({ open, onClose }: ConfirmationModalProps) {
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
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
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
      aria-label="Email confirmation modal"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[600px] overflow-hidden rounded-lg bg-white shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] dark:bg-gray-900"
      >
        {/* Gradient header with skewed bottom */}
        <div className="relative flex h-[230px] items-center justify-center bg-gradient-to-br from-gradient-start to-gradient-end">
          {/* Skewed bottom-left */}
          <div className="absolute bottom-0 left-0 h-[60px] w-1/2 -translate-y-[30px] bg-gradient-to-br from-gradient-start to-gradient-end [clip-path:polygon(0_0,100%_0,100%_100%,0_60%)]" />
          {/* Skewed bottom-right */}
          <div className="absolute bottom-0 right-0 h-[60px] w-1/2 -translate-y-[30px] bg-gradient-to-br from-gradient-start to-gradient-end [clip-path:polygon(0_0,100%_0,100%_60%,0_100%)]" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal body */}
        <div className="px-8 pb-12 pt-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            You&apos;ve Got Mail!
          </h2>

          {/* Envelope icon */}
          <div className="mx-auto mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-br from-gradient-start to-gradient-end">
            <EnvelopeIcon />
          </div>

          <h4 className="mb-2 text-base font-medium text-gray-600 dark:text-gray-300">
            We sent confirmation link to:
          </h4>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            johndoe<span className="text-gray-500 dark:text-gray-400">@</span>
            gmail.com
          </h3>

          <button
            onClick={onClose}
            className="mt-6 rounded bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            Go to inbox
          </button>
        </div>
      </div>
    </div>
  )
}
