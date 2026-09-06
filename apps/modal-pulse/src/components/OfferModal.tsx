import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface OfferModalProps {
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

export function OfferModal({ open, onClose }: OfferModalProps) {
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
      aria-labelledby="offer-modal-heading"
      aria-hidden={!open}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[500px] overflow-hidden rounded-[7px] bg-white shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Close button — first in DOM for focus order */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-modal-heading transition-colors hover:bg-black/10"
        >
          <X size={18} />
        </button>

        {/* Illustration area */}
        <div className="flex h-[200px] items-center justify-center bg-illustration-bg">
          <img
            src="https://picsum.photos/seed/modal-pulse-offer/400/200"
            alt="Work from anywhere illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            id="offer-modal-heading"
            className="mb-3 text-[22px] font-black text-modal-heading"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Introducing Work from Anywhere
          </h3>
          <p
            className="mb-6 text-sm font-light leading-relaxed text-modal-text"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Work from anywhere with our all-in-one productivity suite. Stay connected, collaborate
            in real time, and ship faster — no office required.
          </p>
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-[#777] transition-colors hover:text-modal-heading"
            >
              No thanks
            </button>
            <button
              type="button"
              className="rounded-[4px] bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Get the app
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
