import { useEffect } from 'react'
import { Button } from '@free-react-templates/ui'
import { X, Snowflake } from 'lucide-react'

interface SaleModalProps {
  open: boolean
  onClose: () => void
}

export function SaleModal({ open, onClose }: SaleModalProps) {
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
      aria-labelledby="sale-title"
      data-backdrop="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative flex w-full max-w-[700px] flex-col overflow-hidden bg-white shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)] sm:flex-row dark:bg-gray-900">
        {/* Left panel — teal sale content */}
        <div className="relative flex flex-1 flex-col items-center justify-center bg-brand-400 px-6 py-10 text-white sm:px-10">
          <Snowflake
            className="absolute left-4 top-4 h-12 w-12 opacity-30 sm:left-6 sm:top-6"
            aria-hidden="true"
          />

          <p className="mb-1 text-sm font-bold uppercase tracking-widest">Winter</p>

          <h2 id="sale-title" className="font-pacifico mb-2 text-[105px] leading-none">
            Sale
          </h2>

          <p className="mb-1 text-[130px] font-bold leading-none">
            40<span className="align-top text-[0.5em]">%</span>
          </p>

          <p className="text-sm font-light uppercase tracking-wider">Off</p>

          <p className="mt-4 text-sm font-light">To all products</p>
        </div>

        {/* Right panel — image + Shop now CTA */}
        <div
          className="relative flex flex-1 items-center justify-center bg-cover bg-center sm:min-h-[400px]"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/snowdrift/400/400)' }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <Button
            size="lg"
            className="relative z-10 bg-brand-400 text-white hover:bg-brand-500"
            onClick={onClose}
          >
            Shop now
          </Button>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 rounded-full p-1 text-black transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
