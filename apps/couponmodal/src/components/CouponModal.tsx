import { useEffect } from 'react'
import { Button } from '@free-react-templates/ui'
import { X } from 'lucide-react'

interface CouponModalProps {
  open: boolean
  onClose: () => void
}

export function CouponModal({ open, onClose }: CouponModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coupon-title"
      data-backdrop="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative mx-4 w-full max-w-[700px] overflow-hidden bg-white shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] sm:mx-0 dark:bg-gray-900">
        {/* Close button — top-right, 40×40, teal bg, white icon */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center bg-teal-400 text-white transition-colors hover:bg-teal-500"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Two-column layout */}
        <div className="flex flex-col sm:flex-row">
          {/* Left column — background image */}
          <div
            data-testid="modal-image"
            className="min-h-[300px] w-full bg-cover bg-center sm:min-h-0 sm:w-1/2"
            style={{
              backgroundImage: 'url(https://picsum.photos/seed/coupon-bg/400/500)',
            }}
          />

          {/* Right column — content */}
          <div className="flex w-full items-center justify-center p-8 sm:w-1/2">
            <div className="relative w-full py-5 text-center">
              {/* Decorative border */}
              <div className="absolute -bottom-7 -left-7 -right-7 -top-7 border border-black/10" />

              <h2
                id="coupon-title"
                className="mb-0 text-[58px] font-bold uppercase leading-none text-gray-900 dark:text-white"
              >
                50<span className="font-normal">%</span> Off
              </h2>
              <h4 className="mb-4 text-sm uppercase tracking-wide text-gray-700 dark:text-gray-300">
                On all Brands
              </h4>

              <form
                className="mb-4"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="w-full rounded-[4px] border border-black/10 bg-white px-3 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-teal-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>
              </form>

              <Button
                type="button"
                className="w-full cursor-pointer border border-teal-400 bg-teal-400 py-3 text-sm uppercase tracking-widest text-gray-900 hover:bg-transparent hover:text-teal-400 dark:text-white"
              >
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
