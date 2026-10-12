import type { NavItem } from '../lib/site'
import { navItemClass, navRowClass } from '../lib/styles'
import type { NavVariant } from '../lib/styles'

export interface NavRowProps {
  /** The row's own destination. */
  item: NavItem
  /** Which of the page's two presentations this row is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the presentation that owns the surface can react. */
  onNavigate?: () => void
}

/**
 * One plain row of the bar, in whichever of the two presentations the width calls for: a 14px
 * sentence-case destination in `#e6e6e6`, pushed to the bar's right by the list's own auto margin,
 * whose label turns the accent amber as it is hovered — and which wears that amber at rest while
 * the page is on it — or the same destination as a full-width 54px block inside the folding panel,
 * where a tap both follows the link and folds the panel away. Both presentations walk the same
 * `NAV` list through this component, so the wide bar and the folded panel can never drift apart.
 * The design paints no current-row state of its own, so `aria-current` here is an app addition.
 */
export function NavRow({ item, variant, onNavigate }: NavRowProps) {
  return (
    <li className={navItemClass}>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={onNavigate}
        className={navRowClass({ variant, current: item.current })}
      >
        {item.label}
      </a>
    </li>
  )
}
