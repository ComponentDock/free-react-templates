import { useCallback, useEffect } from 'react'
import { X } from 'lucide-react'
import {
  SEARCH_CLOSE_LABEL,
  SEARCH_FORM_LABEL,
  SEARCH_INPUT_ID,
  SEARCH_PLACEHOLDER,
  SEARCH_TITLE,
} from '../lib/site'
import {
  searchCloseClass,
  searchCloseGlyphClass,
  searchFormClass,
  searchInputClass,
  searchLabelClass,
  searchOverlayClass,
} from '../lib/styles'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

/**
 * The design's full-screen search: nothing is mounted until the magnifier asks for it, the field
 * takes the focus as it opens, and `Escape` and the close control both hand the page back to the
 * button that opened it.
 */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const focusField = useCallback((node: HTMLInputElement | null) => {
    node?.focus()
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div className={searchOverlayClass} role="dialog" aria-label={SEARCH_TITLE}>
      <button
        type="button"
        className={searchCloseClass}
        aria-label={SEARCH_CLOSE_LABEL}
        onClick={onClose}
      >
        <X className={searchCloseGlyphClass} aria-hidden="true" />
      </button>

      <form
        className={searchFormClass}
        role="search"
        aria-label={SEARCH_FORM_LABEL}
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <label className={searchLabelClass} htmlFor={SEARCH_INPUT_ID}>
          {SEARCH_TITLE}
        </label>
        <input
          id={SEARCH_INPUT_ID}
          ref={focusField}
          type="search"
          className={searchInputClass}
          placeholder={SEARCH_PLACEHOLDER}
        />
      </form>
    </div>
  )
}
