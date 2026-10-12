import { NAV, isParent } from '../lib/site'
import { barLabelClass } from '../lib/styles'
import { NavDropdown } from './NavDropdown'

/**
 * The right-aligned desktop row: seven items on one line, every label bare black
 * 16px text at 20px vertical padding that turns accent on hover and on focus. The
 * row only exists from 992px up; below that the header swaps in the hamburger and
 * the off-canvas panel carries the same items.
 */
export function NavRow() {
  return (
    <nav aria-label="Primary">
      <ul className="m-0 list-none p-0">
        {NAV.map((node) =>
          isParent(node) ? (
            <NavDropdown key={node.label} node={node} variant="bar" />
          ) : (
            <li key={node.label} className="inline-block">
              <a
                href={node.href}
                aria-current={node.current ? 'page' : undefined}
                className={barLabelClass(false, Boolean(node.current))}
              >
                {node.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
