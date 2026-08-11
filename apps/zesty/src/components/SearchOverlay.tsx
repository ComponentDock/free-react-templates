import { useEffect, useRef } from 'react'
import { Plus } from 'lucide-react'
import { closeSearchLabel, searchLabel, searchPlaceholder } from '../data'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

/* Fullscreen search overlay (reference `div.search-model`): a centered
   search input with a "+" close switch (the source's Font Awesome plus is
   recreated with a rotated lucide Plus). Focus moves into the input on
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
    <div className="fixed inset-0 z-[900] flex items-center justify-center bg-paper px-6">
      <button
        type="button"
        aria-label={closeSearchLabel}
        onClick={onClose}
        className="absolute top-8 right-8 text-ink transition-colors hover:text-brand"
      >
        <Plus className="h-8 w-8 rotate-45" aria-hidden="true" />
      </button>
      <form
        role="search"
        className="w-full max-w-[520px]"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="zesty-search" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="zesty-search"
          ref={inputRef}
          type="search"
          name="search"
          autoComplete="off"
          placeholder={searchPlaceholder}
          className="w-full rounded-full border-2 border-ink/20 bg-section px-5 py-3 text-ink outline-none placeholder:text-ink/40 focus:border-brand"
        />
      </form>
    </div>
  )
}
