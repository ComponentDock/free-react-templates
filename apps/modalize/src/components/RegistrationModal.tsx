import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface RegistrationModalProps {
  open: boolean
  onClose: () => void
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  )
}

export function RegistrationModal({ open, onClose }: RegistrationModalProps) {
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
      // Focus trap
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
      aria-label="Registration modal"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[450px] rounded bg-white shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] dark:bg-gray-900"
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
          {/* Social sign-in icons */}
          <div className="mb-6 flex justify-center gap-3">
            <button
              aria-label="Sign in with Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,0.05)] text-gray-600 transition-colors hover:bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.05)] dark:text-gray-300 dark:hover:bg-[rgba(255,255,255,0.1)]"
            >
              <TwitterIcon />
            </button>
            <button
              aria-label="Sign in with Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,0.05)] text-gray-600 transition-colors hover:bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.05)] dark:text-gray-300 dark:hover:bg-[rgba(255,255,255,0.1)]"
            >
              <FacebookIcon />
            </button>
            <button
              aria-label="Sign in with Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,0,0,0.05)] text-gray-600 transition-colors hover:bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.05)] dark:text-gray-300 dark:hover:bg-[rgba(255,255,255,0.1)]"
            >
              <InstagramIcon />
            </button>
          </div>

          {/* Registration form heading */}
          <h2 className="mb-6 text-center text-xl font-semibold text-gray-900 dark:text-white">
            Create Your Account
          </h2>

          {/* Form fields */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label
                htmlFor="fullname"
                className="mb-1 block text-xs font-medium uppercase text-[rgba(0,0,0,0.3)] dark:text-[rgba(255,255,255,0.3)]"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="John Doe"
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-[#007bff] focus:outline-none focus:ring-1 focus:ring-[#007bff] dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium uppercase text-[rgba(0,0,0,0.3)] dark:text-[rgba(255,255,255,0.3)]"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-[#007bff] focus:outline-none focus:ring-1 focus:ring-[#007bff] dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-xs font-medium uppercase text-[rgba(0,0,0,0.3)] dark:text-[rgba(255,255,255,0.3)]"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-[#007bff] focus:outline-none focus:ring-1 focus:ring-[#007bff] dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded bg-[#007bff] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0069d9] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>

          {/* Already a member link */}
          <p className="mt-4 text-center">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-sm text-[rgba(0,0,0,0.3)] underline transition-colors hover:text-[#007bff] dark:text-[rgba(255,255,255,0.3)] dark:hover:text-[#007bff]"
            >
              I'm already a member
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
