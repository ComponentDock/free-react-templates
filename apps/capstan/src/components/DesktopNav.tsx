import { DESKTOP_NAV_ID, NAV } from '../lib/site'
import { desktopListClass } from '../lib/styles'
import { NavRow } from './NavRow'

export interface NavListProps {
  /** Reports an activation, so the presentation that owns the surface can react. */
  onNavigate: () => void
}

/**
 * The strip's own list: all six rows, in the design's order, stretched to the strip's full
 * height and floated into the middle of the bar by the list's own auto margin — which is
 * what leaves slack on both sides of it, between the wordmark and the find field. It is the
 * wide presentation, hidden below 992px where the collapsing panel carries the same six
 * rows.
 */
export function DesktopNav({ onNavigate }: NavListProps) {
  return (
    <ul id={DESKTOP_NAV_ID} data-testid={DESKTOP_NAV_ID} className={desktopListClass}>
      {NAV.map((item) => (
        <NavRow key={item.label} item={item} variant="desktop" onNavigate={onNavigate} />
      ))}
    </ul>
  )
}
