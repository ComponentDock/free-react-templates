import { BRAND, NAV_LINKS, WORDMARK_HREF } from '../data/site'

/**
 * The bar: a serif wordmark with a superscript registered mark and four plain
 * links on a shared baseline. There is nothing to open — the reference has no
 * hamburger, no toggle and no panel, so this component holds no state and no
 * hook.
 *
 * The current page's underline is a `background-size` that grows from `0 1px`
 * to `100% 1px`; it is a typed rule, not a text decoration.
 */
export function SiteHeader() {
  return (
    <header className="pw-bar">
      <a href={WORDMARK_HREF} className="pw-logo">
        {BRAND}
        <span aria-hidden="true" className="pw-logo-mark">
          ®
        </span>
      </a>

      <nav className="pw-nav" aria-label="Main">
        <ul className="pw-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={link.current ? 'page' : undefined}
                className={link.accent ? 'pw-link pw-link--contact' : 'pw-link'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
