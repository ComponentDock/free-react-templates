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
 * The design's own `257 × 46` search field: a white, `5px`-rounded box with a hairline border,
 * holding a borderless text input and a 46px submit button carrying the magnifier. It is second
 * in the bar's DOM but ordered last on screen from 992px up, and it is never hidden. Its real
 * behaviour is the app's own delta: the field narrows the page as it is typed into, and its
 * submit never navigates anywhere — so it is a working form rather than the design's dead one.
 */
export function SearchForm({ value, onChange }: SearchFormProps) {
  return (
    <form role="search" onSubmit={handleSubmit} className={searchFormClass}>
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
