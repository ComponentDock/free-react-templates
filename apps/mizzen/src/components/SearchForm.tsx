import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import { SEARCH_BUTTON_LABEL, SEARCH_ID, SEARCH_LABEL, SEARCH_PLACEHOLDER } from '../lib/site'
import {
  searchButtonClass,
  searchFormClass,
  searchInputClass,
  searchMarkClass,
} from '../lib/styles'

export interface SearchFormProps {
  /** The query the page is currently narrowed to. */
  value: string
  /** Reports every keystroke, so the blocks below can narrow as the visitor types. */
  onChange: (value: string) => void
}

/**
 * The field narrows the page as it is typed into, so its submit has nothing left to do but keep
 * the browser on the page: it never navigates, and it never reloads what it is filtering.
 */
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

/**
 * The design's own `300 × 50` pill search field: a white, 40px-rounded box with
 * `overflow:hidden` — the clip that folds its square red submit into the pill's right cap — and a
 * hairline `rgba(255,255,255,0.1)` ring that is all but invisible on the light page. It fills its
 * own column below 992px and is never hidden at any width. Its real behaviour is the app's own
 * delta: the field narrows the page as it is typed into, and its submit never navigates anywhere
 * — so it is a working form rather than the design's dead one.
 */
export function SearchForm({ value, onChange }: SearchFormProps) {
  return (
    <form role="search" onSubmit={handleSubmit} className={searchFormClass} data-testid="search">
      <label htmlFor={SEARCH_ID} className="sr-only">
        {SEARCH_LABEL}
      </label>
      <input
        id={SEARCH_ID}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={SEARCH_PLACEHOLDER}
        className={searchInputClass}
      />
      <button type="submit" aria-label={SEARCH_BUTTON_LABEL} className={searchButtonClass}>
        <Search aria-hidden="true" className={searchMarkClass} />
      </button>
    </form>
  )
}
