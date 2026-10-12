import type { NavItem } from '../lib/site'
import { navItemClass, navRowClass } from '../lib/styles'
import type { NavVariant } from '../lib/styles'
import { Underline } from './Underline'
import { Dropdown } from './Dropdown'
import { FoldedGroup } from './FoldedGroup'

export interface NavRowProps {
  /** The row and, where it has any, the sub-destinations it discloses. */
  item: NavItem
  /** Which of the page's two presentations this row is drawn in. */
  variant: NavVariant
  /** Reports an activation, so the presentation that owns the surface can react. */
  onNavigate: () => void
}

/**
 * One row of the strip, in whichever of the two presentations the width calls for: a plain
 * destination, the wide strip's one hover-and-click disclosure, or — inside the collapsing
 * panel — the same disclosure left permanently expanded as an in-flow sub-list. Both
 * presentations walk the same `NAV` list through this component, so the wide strip and the
 * folded panel can never drift apart.
 */
export function NavRow({ item, variant, onNavigate }: NavRowProps) {
  if (item.children.length > 0) {
    return variant === 'panel' ? (
      <FoldedGroup item={item} onNavigate={onNavigate} />
    ) : (
      <Dropdown item={item} onNavigate={onNavigate} />
    )
  }

  return (
    <li className={navItemClass}>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={onNavigate}
        className={navRowClass({ variant, current: item.current })}
      >
        {variant === 'desktop' && <Underline current={item.current} />}
        {item.label}
      </a>
    </li>
  )
}
