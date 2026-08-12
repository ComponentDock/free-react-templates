import { useEffect } from 'react'
import { Plus } from 'lucide-react'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="absolute right-8 top-8 rotate-45 text-ink transition-colors hover:text-brand"
      >
        <Plus className="h-10 w-10" aria-hidden="true" />
      </button>
      <form
        className="w-full max-w-xl px-6"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search here....."
          className="w-full border-0 border-b-2 border-ink bg-transparent pb-3 text-center text-2xl text-ink outline-none placeholder:text-ash/60"
        />
      </form>
    </div>
  )
}
