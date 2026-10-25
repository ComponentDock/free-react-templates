import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Plus } from 'lucide-react'

interface SearchOverlayProps {
  onClose: () => void
}

/**
 * Full-viewport black search panel: a 500px underlined field, a 50px circular
 * close disc, `Escape` and a backdrop click both close it, and the field is
 * empty again the next time it opens.
 */
export function SearchOverlay({ onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [term, setTerm] = useState('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose()
      return
    }

    if (event.key !== 'Tab') {
      return
    }

    event.preventDefault()
    const next = document.activeElement === inputRef.current ? closeRef : inputRef
    next.current?.focus()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Modeline"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black pt-[30vh]"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex w-[500px] max-w-[90vw] items-center gap-4 border-b-2 border-[#333] pb-2"
      >
        <label htmlFor="search-term" className="sr-only">
          Search Modeline
        </label>
        <input
          ref={inputRef}
          id="search-term"
          type="search"
          value={term}
          placeholder="Search"
          onChange={(event) => setTerm(event.target.value)}
          className="h-[40px] w-full bg-transparent text-[20px] text-[#999] outline-none placeholder:text-[#999]"
        />
        <button
          ref={closeRef}
          type="button"
          aria-label="Close search"
          onClick={onClose}
          className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#333] text-white"
        >
          <Plus aria-hidden="true" className="h-5 w-5 rotate-45" />
        </button>
      </div>
    </div>
  )
}
