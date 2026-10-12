import { isParent, NAV } from '../lib/site'
import { navRowClass } from '../lib/styles'
import { NavDropdown } from './NavDropdown'
import { SocialLinks } from './SocialLinks'

export interface DesktopNavProps {
  stuck: boolean
}

/**
 * The desktop row — four primary destinations plus the three social marks,
 * right-aligned in the header's second column and only rendered from 1200px up,
 * where the off-canvas panel hands over to it.
 */
export function DesktopNav({ stuck }: DesktopNavProps) {
  return (
    <nav aria-label="Main" className="relative text-right">
      <ul className="flex items-center justify-end">
        {NAV.map((node) =>
          isParent(node) ? (
            <NavDropdown key={node.label} node={node} stuck={stuck} />
          ) : (
            <li key={node.label} className="inline-block">
              <a href={node.href} className={navRowClass(stuck)}>
                {node.label}
              </a>
            </li>
          ),
        )}
        <SocialLinks stuck={stuck} />
      </ul>
    </nav>
  )
}
