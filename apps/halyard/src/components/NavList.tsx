import type { NavLink } from '../lib/site'
import { drawerListClass, navLabelClass, navListClass, navRowClass } from '../lib/styles'
import type { NavVariant } from '../lib/styles'

export interface NavListProps {
  /** The list's own id, which is also how a test or a region finds it. */
  id: string
  /** The rows to draw, in the order they should read. */
  items: NavLink[]
  /** Which of the page's two presentations this is. */
  variant: NavVariant
  /** Called when a destination is chosen — the drawer folds itself away on it. */
  onNavigate?: () => void
}

/**
 * The one row component the page keeps, in whichever of its two presentations the
 * width calls for: the wide bar's inline-block row of three (one call per third), or
 * the drawer's full-width column of all six. Both read the same `NAV` model through
 * `navGroup`/`navAll` — the drawer never clones a second hand-maintained copy, and
 * the two stay in step for free. Rows are plain destinations: this design has no
 * dropdown, no disclosure and no sub-list anywhere, so nothing here opens.
 */
export function NavList({ id, items, variant, onNavigate }: NavListProps) {
  return (
    <ul id={id} data-testid={id} className={variant === 'desktop' ? navListClass : drawerListClass}>
      {items.map((item) => (
        <li key={item.label} className={navRowClass(variant)}>
          <a
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            onClick={variant === 'drawer' ? onNavigate : undefined}
            className={navLabelClass({ variant, current: item.current })}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
