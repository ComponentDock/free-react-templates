import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface CouponModalProps {
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

export function CouponModal({ open, onClose }: CouponModalProps) {
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
      aria-label="Coupon modal"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[500px] rounded-[7px] bg-cream shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)] dark:bg-cream-dark"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-black transition-colors hover:bg-black/10 dark:text-gray-900 dark:hover:bg-black/20"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-4 p-6 sm:flex-row">
          {/* Promotional image */}
          <img
            src="https://picsum.photos/seed/modalbox-promo/200/200"
            alt="Promotional offer"
            className="h-[200px] w-[200px] flex-shrink-0 rounded object-cover"
          />

          {/* Text content */}
          <div className="flex flex-1 flex-col gap-3">
            <h2 className="text-xl font-bold text-black dark:text-gray-900">60% off coupon</h2>
            <p className="text-sm leading-relaxed text-[#777] dark:text-gray-600">
              Get an exclusive 60% discount on your next purchase. Use the coupon code below at
              checkout to redeem this limited-time offer.
            </p>

            {/* Coupon code box */}
            <div className="rounded border-2 border-dashed border-[#6c757d] bg-white px-3 py-2 text-center">
              <span className="font-mono text-sm font-bold tracking-wider text-black dark:text-gray-900">
                SUMMER60
              </span>
            </div>

            {/* Use coupon button */}
            <button
              type="button"
              className="w-full rounded bg-brand px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            >
              Use a coupon
            </button>

            {/* Cancel link */}
            <button
              type="button"
              onClick={onClose}
              className="text-center text-xs text-[#777] transition-colors hover:text-brand dark:text-gray-500 dark:hover:text-brand"
            >
              Sorry, I don&apos;t want this.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
