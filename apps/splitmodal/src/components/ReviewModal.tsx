import { useEffect, useCallback } from 'react'
import { Star, Heart, MessageSquare, Plus, Share2, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ReviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
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
      aria-label="Product review"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          'relative flex w-full max-w-[900px] overflow-hidden rounded-[7px]',
          'bg-[#efefef] shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]',
        )}
      >
        {/* Left panel — product image */}
        <div
          className="relative hidden w-1/2 bg-cover bg-center sm:block"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/splitmodal-product/600/800')",
          }}
        >
          <span className="absolute left-4 top-4 rounded bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow">
            $2,000
          </span>
        </div>

        {/* Right panel — product details */}
        <div className="relative w-full p-6 sm:w-1/2 sm:p-8">
          {/* Share button */}
          <button
            type="button"
            aria-label="Share"
            className="absolute right-4 top-4 text-[#ccc] transition-colors hover:text-black"
          >
            <Share2 size={20} />
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-12 inline-flex h-7 w-7 items-center justify-center rounded text-black hover:bg-black/10"
          >
            <X size={18} />
          </button>

          {/* Product title */}
          <h2 className="mb-4 text-2xl font-bold text-black">Grand Prix 4000</h2>

          {/* Separator line */}
          <div className="mb-4 h-px w-[70px] bg-[#ccc]" />

          {/* Star rating */}
          <div className="mb-4 flex gap-1" aria-label="Rating: 4 out of 5 stars">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} fill="#ffc107" stroke="#ffc107" aria-hidden="true" />
            ))}
            <Star size={16} fill="none" stroke="#ffc107" aria-hidden="true" />
          </div>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-[#777]">
            Complete with lightweight carbon frames and advanced aerodynamics, this road bike
            delivers exceptional speed and comfort on long rides.
          </p>

          {/* Social counters */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-[#dc3545]" />
              <span className="text-sm font-medium text-[#777]">25</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#007bff]" />
              <span className="text-sm font-medium text-[#777]">10</span>
            </div>
            <div className="flex items-center gap-2">
              <Plus size={16} className="text-[#007bff]" />
              <span className="text-sm font-medium text-[#777]">55</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
