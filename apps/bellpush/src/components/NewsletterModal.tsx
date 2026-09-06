import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface NewsletterModalProps {
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

export function NewsletterModal({ open, onClose }: NewsletterModalProps) {
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
      aria-label="Newsletter modal"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[500px] overflow-hidden rounded-lg bg-white shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] dark:bg-gray-900"
      >
        {/* Gradient header with background image area */}
        <div className="relative h-[230px]">
          {/* Gradient overlay (magenta-to-blue, 30% opacity) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#dd00ff] to-[#3e65ff] opacity-30" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal body overlapping header */}
        <div className="relative z-2 -mt-[180px] px-8 pb-12 pt-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Newsletter</h2>

          {/* Circular icon with semi-transparent background */}
          <div className="mx-auto mb-4 flex h-[200px] w-[200px] items-center justify-center rounded-full bg-white/20">
            <EnvelopeIcon />
          </div>

          <h4 className="mb-4 text-lg text-gray-600 dark:text-gray-300">
            Subscribe to our newsletter
          </h4>

          {/* Subscribe form */}
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto max-w-md">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email address"
                className="h-[52px] flex-1 border-none bg-black/5 px-4 text-base text-gray-900 outline-none placeholder:text-black/30 focus:shadow-none focus:outline-none dark:bg-white/5 dark:text-white"
              />
              <button
                type="submit"
                className="h-[52px] w-[130px] border-none bg-brand text-base font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
