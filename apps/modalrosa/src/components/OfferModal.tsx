import { useEffect, useCallback, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface OfferModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OfferModal({ isOpen, onClose }: OfferModalProps) {
  const [email, setEmail] = useState('')

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Exclusive offer"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          'relative w-full max-w-[500px] overflow-hidden rounded-[7px]',
          'bg-[#f9eaf2] shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]',
        )}
      >
        {/* Content */}
        <div className="p-4">
          {/* Close button */}
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex h-7 w-7 items-center justify-center rounded text-black hover:bg-black/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* Logo — neutral SVG icon (replaces the source's Instagram trademark) */}
          <div className="mb-4 flex justify-center">
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#000" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" stroke="#000" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="#000" />
            </svg>
          </div>

          {/* Heading */}
          <h3 className="mb-4 text-center text-[22px] font-bold text-black">
            Exclusives offer from Instagram
          </h3>

          {/* Description */}
          <p className="mb-4 text-center text-sm text-[#777]">
            All their equipment and instruments are alive. The sky was cloudless and of a deep dark
            blue.
          </p>

          {/* Email form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onClose()
            }}
            className="mb-4"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3 w-full rounded border border-transparent bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-[0_2px_2px_0_rgba(0,0,0,0.1)] focus:border-transparent focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  'rounded-[4px] border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700',
                  'hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400',
                )}
              >
                No, thanks
              </button>
              <button
                type="submit"
                className={cn(
                  'rounded-[4px] border-none bg-[#f06292] px-5 py-2 text-sm font-medium text-white',
                  'hover:bg-[#ec407a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f06292]',
                )}
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Cancel text */}
          <p className="text-center text-[13px] font-bold text-white/50">
            The sky was cloudless and of a deep dark blue.
          </p>
        </div>
      </div>
    </div>
  )
}
