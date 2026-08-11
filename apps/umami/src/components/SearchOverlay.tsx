import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { closeSearchLabel, searchLabel, searchPlaceholder } from '../data'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

/* Fullscreen search overlay (reference `div.search-model`): black backdrop
   with a 40px input (2px #333 bottom border, #999 text) and a close
   control. Focus moves into the input on open; Escape closes. */
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
    <div className="fixed inset-0 z-[900] flex items-center justify-center bg-black px-4">
      <button
        type="button"
        aria-label={closeSearchLabel}
        onClick={onClose}
        className="absolute top-8 right-8 flex h-[50px] w-[50px] items-center justify-center text-white transition-colors hover:text-white/60"
      >
        <X className="h-8 w-8" aria-hidden="true" />
      </button>
      <form
        role="search"
        className="w-full max-w-[500px]"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="umami-search" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="umami-search"
          ref={inputRef}
          type="search"
          name="search"
          autoComplete="off"
          placeholder={searchPlaceholder}
          className="w-full border-b-2 border-[#333] bg-transparent text-[40px] text-[#999] outline-none placeholder:text-[#999] focus:border-brand"
        />
      </form>
    </div>
  )
}
