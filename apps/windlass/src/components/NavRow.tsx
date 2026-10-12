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
 * One row of the card, in whichever of the two presentations the width calls for: a plain
 * destination on the wide card, or the same destination as a full-width block inside the
 * collapsing panel — where a first tap both follows the link and folds the panel away. Both
 * presentations walk the same `NAV` list through this component, so the wide card and the
 * folded panel can never drift apart.
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
