import { useEffect } from 'react'
import { X } from 'lucide-react'

interface SearchModalProps {
  onClose: () => void
}

/** Full-screen search overlay: white background with a large input.
 *  Closes on Escape or overlay click. */
export function SearchModal({ onClose }: SearchModalProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-start justify-center bg-white/95 p-6 pt-[20vh]"
    >
      <div onClick={(event) => event.stopPropagation()} className="w-full max-w-[700px]">
        <button
          type="button"
          aria-label="Close search"
          onClick={onClose}
          className="absolute right-6 top-6 p-1 text-muted transition-colors hover:text-ink-soft"
        >
          <X className="h-8 w-8" aria-hidden="true" />
        </button>
        <label
          htmlFor="search-input"
          className="block text-[14px] uppercase tracking-widest text-muted"
        >
          Search
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search products..."
          className="mt-3 h-[60px] w-full border-0 border-b-2 border-ink-soft bg-transparent text-[28px] text-ink-soft placeholder:text-muted focus:border-brand focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  )
}
