import { useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { LoginForm } from './LoginForm'

interface LoginModalProps {
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

export function LoginModal({ open, onClose }: LoginModalProps) {
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
        }
        if (!e.shiftKey && e.target === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  const handleBackdropClick = useCallback(() => {
    onClose()
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Login modal"
    >
      {/* Backdrop — clicking this closes the modal */}
      <div className="absolute inset-0" onClick={handleBackdropClick} data-testid="backdrop" />

      {/* Modal content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[440px] border-t-4 border-accent bg-[#efefef] shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)] dark:bg-[#e0e0e0]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-black transition-colors hover:bg-black/10 dark:text-gray-900 dark:hover:bg-black/20"
        >
          <X size={18} />
        </button>

        <div className="p-6">
          <LoginForm onSubmit={(data) => console.log('Login:', data)} />
        </div>
      </div>
    </div>
  )
}
