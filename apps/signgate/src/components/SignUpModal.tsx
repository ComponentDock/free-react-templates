import { useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export function SignUpModal({ isOpen, onClose, triggerRef }: SignUpModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  // Focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first && first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last && last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    },
    [onClose],
  )

  // Focus first element when opened, restore focus on close
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      focusable[0]?.focus()
    }

    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus()
    }
  }, [isOpen, triggerRef])

  // Keyboard listener for Escape and Tab
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      data-testid="modal-backdrop"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-heading"
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-4xl overflow-hidden rounded-[7px] bg-white shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]"
        style={{ minHeight: '500px' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 z-10 rounded-full p-1 transition-colors hover:bg-gray-100"
          style={{ color: '#999' }}
        >
          <X size={20} />
        </button>

        {/* Left: Promotional image */}
        <div className="w-1/2">
          <img
            src="https://picsum.photos/seed/signgate-promo/600/800"
            alt="Promotional"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: Form */}
        <div
          className="flex w-1/2 flex-col justify-center px-10 py-12"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          <h2 id="signup-heading" className="mb-3 text-2xl font-light" style={{ color: '#000' }}>
            Sign up to access all the resources
          </h2>
          <p className="mb-6 text-sm leading-relaxed" style={{ color: '#777' }}>
            Sign up now and get instant access to all our premium resources, templates, and design
            tools.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              onClose()
            }}
          >
            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block text-xs" style={{ color: '#777' }}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-primary-500"
                style={{ borderColor: '#ccc' }}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="firstName" className="mb-1 block text-xs" style={{ color: '#777' }}>
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-primary-500"
                style={{ borderColor: '#ccc' }}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="mb-1 block text-xs" style={{ color: '#777' }}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full rounded border px-3 py-2 text-sm outline-none transition-colors focus:border-primary-500"
                style={{ borderColor: '#ccc' }}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors"
              style={{ backgroundColor: '#007bff' }}
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-center text-xs" style={{ color: '#999' }}>
            By clicking Sign up you agree to our{' '}
            <a href="#" className="font-bold underline" style={{ color: '#555' }}>
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
