import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { closeSearchLabel, searchLabel, searchPlaceholder } from '../data'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

/* Search overlay (reference `div#search-wrapper`): a dark full-screen panel
   with a pill input (2px #8d8d8d border, radius 1000px, white text,
   white/60 placeholder) and a close control. Focus moves into the input on
   open; Escape closes. */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose()
        }
      }
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[900] flex items-center justify-center bg-black/95 px-6">
      <button
        type="button"
        aria-label={closeSearchLabel}
        onClick={onClose}
        className="absolute top-8 right-8 text-white transition-colors hover:text-white/60"
      >
        <X className="h-8 w-8" aria-hidden="true" />
      </button>
      <form
        role="search"
        className="w-full max-w-[520px]"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="atlas-search" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="atlas-search"
          ref={inputRef}
          type="search"
          name="search"
          autoComplete="off"
          placeholder={searchPlaceholder}
          className="w-full rounded-full border-2 border-text-muted bg-transparent px-5 py-2.5 text-white outline-none placeholder:text-white/60 focus:border-brand"
        />
      </form>
    </div>
  )
}
