import { NAV, isParent } from '../lib/site'
import { navLabelClass } from '../lib/styles'
import { NavDropdown } from './NavDropdown'

/**
 * The right-aligned desktop row: six items on one line, every label an inline
 * span pill that fills accent on the current item and on hover/focus. The row's
 * column is only shown from 1200px up; below that the header swaps in the
 * hamburger and the off-canvas panel carries the same items.
 */
export function NavRow() {
  return (
    <nav aria-label="Primary" className="relative text-right">
      <ul className="m-0 list-none p-0">
        {NAV.map((node) =>
          isParent(node) ? (
            <NavDropdown key={node.label} node={node} variant="bar" />
          ) : (
            <li key={node.label} className="inline-block">
              <a
                href={node.href}
                aria-current={node.current ? 'page' : undefined}
                className="group inline-block px-0 py-[10px] text-[16px] text-white"
              >
                <span className={navLabelClass(Boolean(node.current), false)}>{node.label}</span>
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
