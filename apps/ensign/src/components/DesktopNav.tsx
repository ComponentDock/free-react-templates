import { DESKTOP_NAV_ID, NAV } from '../lib/site'
import { desktopListClass } from '../lib/styles'
import { NavRow } from './NavRow'

export interface NavListProps {
  /** Reports an activation, so the presentation that owns the surface can react. */
  onNavigate: () => void
}

/**
 * The bar's own list: all seven rows, in the design's order, stretched to the bar's full
 * height and pushed to the container's inner right edge by the list's own auto margin.
 * It is the wide presentation — hidden below 992px, where the collapsing panel carries
 * the same seven rows.
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
