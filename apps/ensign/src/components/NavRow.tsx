import type { NavItem } from '../lib/site'
import { navItemClass, navRowClass } from '../lib/styles'
import type { NavVariant } from '../lib/styles'
import { Dropdown } from './Dropdown'

export interface NavRowProps {
  /** The row and, where it has any, the sub-destinations it discloses. */
  item: NavItem
  /** Which of the page's two presentations this row is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the presentation that owns the surface can react. */
  onNavigate: () => void
}

/**
 * One row of the bar, in whichever of the two presentations the width calls for: a plain
 * destination, or — when the row names sub-destinations of its own — the disclosure. Both
 * presentations of the bar walk the same `NAV` list through this component, so the wide
 * row and the collapsing panel can never drift apart.
 */
export function NavRow({ item, variant, onNavigate }: NavRowProps) {
  if (item.children.length > 0) {
    return <Dropdown item={item} variant={variant} onNavigate={onNavigate} />
  }

  return (
    <li className={navItemClass}>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={onNavigate}
        className={navRowClass({ variant, current: item.current, cta: item.cta })}
      >
        {item.label}
      </a>
    </li>
  )
}
