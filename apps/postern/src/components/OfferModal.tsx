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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-[7px] shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]">
        {/* Photo background with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/postern-1/600/600)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content above overlay */}
        <div className="relative z-10 p-4">
          {/* Header bar */}
          <div className="border-b border-white/30 pb-2.5">
            <div className="flex items-center">
              <div className="flex-1">
                {/* Neutral logo placeholder — replaces the source's Google Drive trademark */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 19.5H22L12 2Z" fill="#4285F4" opacity="0.8" />
                  <path d="M12 2L7 19.5H17L12 2Z" fill="#34A853" opacity="0.6" />
                  <path d="M12 2L14.5 19.5H9.5L12 2Z" fill="#FBBC04" opacity="0.5" />
                </svg>
              </div>
              <h2 className="flex-1 text-center text-sm font-medium text-white">Exclusive Offer</h2>
              <div className="flex-1 text-right">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="inline-flex h-7 w-7 items-center justify-center rounded text-white hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Body content */}
          <div className="p-4 text-center">
            <h3 className="mb-4 text-[22px] font-bold text-white">Get a free a Ebook</h3>
            <p className="mb-4 text-sm font-light text-white">
              All their equipment and instruments are alive. The sky was cloudless and of a deep
              dark blue.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                onClose()
              }}
              className="mb-4 flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-[4px] border border-transparent bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none"
              />
              <button
                type="submit"
                className={cn(
                  'rounded-[4px] border-none bg-brand px-5 py-2 text-sm font-medium text-white',
                  'hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                )}
              >
                Subscribe
              </button>
            </form>
            <p className="text-[13px]">
              <button
                type="button"
                onClick={onClose}
                className="font-bold text-white/50 hover:text-white"
              >
                Maybe later
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
