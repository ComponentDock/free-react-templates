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
 * One row of the bar, in whichever of the two presentations the width calls for: an 11px
 * tracked-out destination whose hover wipes a 2px accent-red bar in along its own bottom edge —
 * and which is painted plain red, with no underline at all, while the page is on it — or the same
 * destination as a full-width 43.2px block inside the folding panel, where a tap both follows the
 * link and folds the panel away. Both presentations walk the same `NAV` list through this
 * component, so the wide bar and the folded panel can never drift apart.
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
