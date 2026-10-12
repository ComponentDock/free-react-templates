import { useEffect, useRef, useState } from 'react'
import {
  SEARCH_CLOSE_LABEL,
  SEARCH_PLACEHOLDER,
  SEARCH_SHEET_LABEL,
  SEARCH_SHEET_TITLE,
} from '../lib/site'
import {
  searchCloseClass,
  searchFormClass,
  searchInputClass,
  searchSheetClass,
} from '../lib/styles'

export interface SearchSheetProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * The design's full-screen search sheet: a white cover over the whole viewport with one underlined
 * field in the middle and an ink circle holding a `+` turned into a cross at the top right. It
 * focuses the field as it opens, closes on `Escape`, and never keeps what was typed.
 */
export function SearchSheet({ isOpen, onClose }: SearchSheetProps) {
  const [query, setQuery] = useState('')
  const fieldRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    fieldRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div role="dialog" aria-modal="true" aria-label={SEARCH_SHEET_LABEL} className={searchSheetClass}>
      <button
        type="button"
        onClick={onClose}
        aria-label={SEARCH_CLOSE_LABEL}
        className={searchCloseClass}
      >
        +
      </button>

      <form
        role="search"
        className={searchFormClass}
        onSubmit={(event) => {
          event.preventDefault()
          setQuery('')
          onClose()
        }}
      >
        <h2 className="sr-only">{SEARCH_SHEET_TITLE}</h2>
        <label htmlFor="cherish-search" className="sr-only">
          {SEARCH_PLACEHOLDER}
        </label>
        <input
          id="cherish-search"
          ref={fieldRef}
          type="search"
          value={query}
          placeholder={SEARCH_PLACEHOLDER}
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          className={searchInputClass}
        />
      </form>
    </div>
  )
}
