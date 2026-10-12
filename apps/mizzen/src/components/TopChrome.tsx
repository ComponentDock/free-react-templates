import {
  brandCellClass,
  brandColumnClass,
  brandRowClass,
  chromeClass,
  chromeRowClass,
  searchCellClass,
  socialColumnClass,
} from '../lib/styles'
import { SearchForm } from './SearchForm'
import { SocialRow } from './SocialRow'
import { Wordmark } from './Wordmark'

export interface TopChromeProps {
  /** The query the page is narrowed to, which the field on the chrome row shows. */
  query: string
  /** Reports every keystroke in that field. */
  onChange: (value: string) => void
}

/**
 * The fluid chrome row above the bar: full-bleed with **no max-width**, carrying the design's own
 * 15px gutters below 768px and 48px from 768px up, and laid out as two columns — the circles at
 * the **left** and the wordmark with its field at the **right**. The wordmark's column is the
 * chrome row's second child in the DOM but the design orders it last (`order:13`), so a port that
 * simply walked the markup in order would put the lockup on the left and the circles on the
 * right, which inverts the whole row; the two columns here are declared in the order the design
 * *shows* them and the markup order follows it, so the row can never invert.
 */
export function TopChrome({ query, onChange }: TopChromeProps) {
  return (
    <div className={chromeClass} data-testid="chrome">
      <div className={chromeRowClass}>
        <div className={socialColumnClass}>
          <SocialRow />
        </div>

        <div className={brandColumnClass}>
          <div className={brandRowClass}>
            <div className={brandCellClass}>
              <Wordmark />
            </div>
            <div className={searchCellClass}>
              <SearchForm value={query} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
