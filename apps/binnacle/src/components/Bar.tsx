import { Fragment } from 'react'
import { cn } from '@free-react-templates/ui'
import { DESKTOP_NAV_ID, MENU_AFTER_ROW, NAV, PRIMARY_NAV_LABEL } from '../lib/site'
import {
  barClass,
  barContainerClass,
  barRowClass,
  containerClass,
  navListClass,
  navWrapClass,
} from '../lib/styles'
import { usePanel } from '../lib/use-panel'
import { Dropdown } from './Dropdown'
import { NavRow } from './NavRow'
import { Panel } from './Panel'
import { SearchForm } from './SearchForm'
import { Toggler } from './Toggler'
import { Wordmark } from './Wordmark'

export interface BarProps {
  /** The query the page is narrowed to, which the field on the bar shows. */
  query: string
  /** Reports every keystroke in that field. */
  onQuery: (value: string) => void
}

/**
 * The bar itself: a white, full-bleed, in-flow band that is **never** pinned, carrying the
 * two-line wordmark at its left, the design's own `257 × 46` search field (second in the DOM,
 * last on screen from 992px up), the toggler that only exists below 992px, the wide list of five
 * rows centred in the middle of the bar, and — below 992px — the folding panel that stands the
 * very same rows in a column. It scrolls away above the app's own content, which is exactly what
 * the design's own blank sheet could never show.
 */
export function Bar({ query, onQuery }: BarProps) {
  const { isOpen, toggle, close } = usePanel()

  return (
    <div className={barClass} data-testid="bar">
      <div className={cn(containerClass, barContainerClass)}>
        <div className={barRowClass} data-testid="bar-row">
          <Wordmark />
          <SearchForm value={query} onChange={onQuery} />
          <Toggler isOpen={isOpen} onToggle={toggle} />

          <nav aria-label={PRIMARY_NAV_LABEL} className={navWrapClass} data-testid={DESKTOP_NAV_ID}>
            <ul className={navListClass}>
              {NAV.map((item, index) => (
                <Fragment key={item.href}>
                  <NavRow item={item} variant="desktop" />
                  {index === MENU_AFTER_ROW && <Dropdown variant="desktop" onNavigate={close} />}
                </Fragment>
              ))}
            </ul>
          </nav>

          <Panel isOpen={isOpen} onNavigate={close} />
        </div>
      </div>
    </div>
  )
}
