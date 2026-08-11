import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { searchCloseLabel, searchPlaceholder, searchSubmitLabel } from '../data'

interface SearchOverlayProps {
  onClose: () => void
}

/* Reference `.search-form` overlay covering the nav area: white background,
   46px input with a 2px #dfe3eb border, 8px radius, light 300 weight,
   "Enter Your Search ..." placeholder, orange focus border + ring, close on
   Escape or via the controls. */
export function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
    onClose()
  }

  return (
    <div className="absolute inset-x-0 top-0 z-50 bg-white shadow-lg">
      <form
        role="search"
        aria-label={searchPlaceholder}
        onSubmit={submit}
        className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          className="h-[46px] w-full rounded-lg border-2 border-line bg-white px-4 font-sans font-light text-ink outline-none placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/15"
        />
        <button
          type="submit"
          aria-label={searchSubmitLabel}
          className="shrink-0 text-ink transition-colors hover:text-brand"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={searchCloseLabel}
          onClick={onClose}
          className="shrink-0 text-ink transition-colors hover:text-brand"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
