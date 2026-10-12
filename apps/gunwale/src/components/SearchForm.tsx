import { useState } from 'react'
import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import { SEARCH_ACTION, SEARCH_EMPTY, SEARCH_FORM_LABEL, SEARCH_ID, SEARCH_LABEL, SEARCH_PLACEHOLDER } from '../lib/site'
import {
  searchButtonClass,
  searchFormClass,
  searchInputClass,
  searchRowClass,
  searchStatusClass,
} from '../lib/styles'

/**
 * The white field bolted to the bar's right end: the design's 257 × 46 box with its 5px
 * radius, holding a white input at `calc(100% - 46px)` and a 46px submit square with a
 * 20px magnifier. Three deltas are deliberate — the input is **labelled** (the design
 * ships a bare placeholder), the form is a real `role="search"` whose submit **prevents
 * the default navigation** and writes a visible status line (the design's `action="#"`
 * posts nowhere), and both the input and the button keep the focus ring the design
 * removes. The form is allowed to shrink, so the 320px bar never wraps the way the
 * design's own fixed 257px field makes it.
 */
export function SearchForm() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const wanted = query.trim()

    setStatus(
      wanted ? `${SEARCH_ACTION} “${wanted}” — the counter will hold it behind the desk.` : SEARCH_EMPTY,
    )
  }

  return (
    <div className={searchRowClass} data-testid="search-row">
      <form role="search" aria-label={SEARCH_FORM_LABEL} onSubmit={handleSubmit} className={searchFormClass}>
        <label htmlFor={SEARCH_ID} className="sr-only">
          {SEARCH_LABEL}
        </label>
        <input
          id={SEARCH_ID}
          name="find"
          type="text"
          value={query}
          placeholder={SEARCH_PLACEHOLDER}
          onChange={(event) => setQuery(event.target.value)}
          className={searchInputClass}
        />
        <button type="submit" aria-label={SEARCH_ACTION} className={searchButtonClass}>
          <Search aria-hidden="true" size={20} />
        </button>
      </form>

      {status && (
        <p role="status" className={searchStatusClass} data-testid="search-status">
          {status}
        </p>
      )}
    </div>
  )
}
