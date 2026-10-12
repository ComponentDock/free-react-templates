import { NAV } from '../lib/site'
import { navRowClass } from '../lib/styles'

/**
 * The desktop row — the same six destinations as the panel, right-aligned in the
 * header's second column and only rendered from 992px up, where the off-canvas
 * panel hands over to it. Flat by design: no drop-down, no caret, no submenu.
 */
export function DesktopNav() {
  return (
    <nav aria-label="Main" className="text-right">
      <ul className="flex items-center justify-end">
        {NAV.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={navRowClass(item.current === true)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
