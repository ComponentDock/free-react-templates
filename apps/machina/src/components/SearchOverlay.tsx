import { useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { SEARCH_PLACEHOLDER } from '../data'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

/**
 * SearchOverlay — full-screen search modal (source `div.search-model-box`):
 * dark navy backdrop, centered input (placeholder "Searching key.....") and
 * a close button. The input autofocuses on open; Escape closes.
 */
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
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className="fixed inset-0 z-[900] flex items-center justify-center bg-ink/95 px-6"
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute top-8 right-8 text-white transition-colors hover:text-brand"
      >
        <X className="h-8 w-8" aria-hidden="true" />
      </button>
      <form
        role="search"
        className="flex w-full max-w-[560px] items-center gap-3 border-b-2 border-white/30 pb-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <Search className="h-6 w-6 shrink-0 text-white/70" aria-hidden="true" />
        <label htmlFor="machina-search" className="sr-only">
          Search the site
        </label>
        <input
          id="machina-search"
          type="search"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder={SEARCH_PLACEHOLDER}
          className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/50"
        />
      </form>
    </div>
  )
}
