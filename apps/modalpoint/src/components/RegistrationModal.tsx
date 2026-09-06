import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { COUNTRIES } from './countries'

interface RegistrationModalProps {
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

/** Handle Tab key focus trapping inside a modal container. */
export function handleTabTrap(e: React.KeyboardEvent, container: HTMLElement): void {
  if (e.key !== 'Tab') return

  const focusable = getFocusableElements(container)
  if (focusable.length < 2) return

  const first = focusable[0]!
  const last = focusable[focusable.length - 1]!

  if (e.shiftKey && e.target === first) {
    e.preventDefault()
    last.focus()
  }

  if (!e.shiftKey && e.target === last) {
    e.preventDefault()
    first.focus()
  }
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

  // Escape key handler (document-level, since body may be focused)
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

  // Tab focus trap (React event, fires only within modal)
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    handleTabTrap(e, modalRef.current!)
  }, [])

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
      aria-label="Registration modal"
      aria-hidden={!open}
    >
      <div
        ref={modalRef}
        onKeyDown={onKeyDown}
        className="relative w-full max-w-[700px] overflow-hidden rounded-[7px] bg-[#efefef] shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-black transition-colors hover:bg-black/10"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Left image panel */}
          <div
            className="hidden w-full bg-cover bg-center sm:block sm:h-[420px] sm:w-1/2"
            style={{
              backgroundImage: "url('https://picsum.photos/seed/modalpoint-reg/400/420')",
            }}
            aria-hidden="true"
          />

          {/* Right form panel */}
          <div className="flex w-full flex-col p-6 sm:w-1/2">
            <h2 className="mb-2 text-[22px] font-bold text-black">Registration form</h2>
            <p className="mb-5 text-[14px] leading-relaxed text-[#777]">
              All their equipment and instruments are alive. The sky was cloudless and of a deep
              dark blue.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
              {/* Country dropdown */}
              <div className="flex flex-col gap-1">
                <label htmlFor="country" className="text-sm font-medium text-black">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="rounded border border-transparent bg-white px-3 py-2 text-sm text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date of birth row */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-black">Date of Birth</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                    className="w-full rounded border border-transparent bg-white px-3 py-2 text-center text-sm text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-brand"
                    aria-label="Month"
                  />
                  <input
                    type="text"
                    placeholder="DD"
                    maxLength={2}
                    className="w-full rounded border border-transparent bg-white px-3 py-2 text-center text-sm text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-brand"
                    aria-label="Day"
                  />
                  <input
                    type="text"
                    placeholder="YYYY"
                    maxLength={4}
                    className="w-full rounded border border-transparent bg-white px-3 py-2 text-center text-sm text-black shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-brand"
                    aria-label="Year"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="mt-auto w-full rounded bg-brand px-4 py-[10px] text-sm font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                Sign up
              </button>

              {/* Privacy note */}
              <p className="text-center text-[12px] text-[#999]">
                By clicking Sign up you agree to our{' '}
                <a href="#" className="font-black text-[#555] transition-colors hover:text-brand">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
