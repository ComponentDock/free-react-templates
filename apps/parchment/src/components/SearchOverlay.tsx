import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { closeSearchLabel, searchHint, searchLabel } from '../data'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

/* Full-screen white search overlay (reference `div.header__search`): giant
   6rem bold input with only a bottom border, the hint below, and a close
   button. Focus moves into the input on open; Escape closes. */
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
        className="absolute top-8 right-8 text-black transition-colors hover:text-black/50"
      >
        <X className="h-8 w-8" aria-hidden="true" />
      </button>
      <form
        role="search"
        className="w-full max-w-[680px] text-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="search-input" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="search-input"
          ref={inputRef}
          type="search"
          name="search"
          autoComplete="off"
          className="w-full border-b border-black/10 bg-transparent pb-4 text-center font-body text-4xl font-bold text-black outline-none placeholder:text-black/30 md:text-6xl"
        />
        <p className="mt-6 text-base text-black/50">{searchHint}</p>
      </form>
    </div>
  )
}
