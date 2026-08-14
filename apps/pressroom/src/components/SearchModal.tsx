import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export interface SearchModalProps {
  open: boolean
  onClose: () => void
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-navy">Search</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-2 text-meta transition-colors hover:text-brand"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form role="search" onSubmit={(event) => event.preventDefault()}>
          <input
            ref={inputRef}
            type="search"
            placeholder="Searching key....."
            aria-label="Search query"
            className="w-full border border-gray-300 px-4 py-3 text-navy outline-none transition-colors focus:border-brand"
          />
        </form>
      </div>
    </div>
  )
}
