import { BRAND, NAV_LINKS, WORDMARK_HREF } from '../data/site'

/**
 * Two items and nothing else: a monogram wordmark on the left, three pill links
 * on the right, pushed apart by `space-between` inside the same 1180 px measure
 * the hero uses. The bar is the one element the reference clips below 356 px, so
 * the stylesheet wraps it under 380 instead of copying that.
 */
export function SiteHeader() {
  return (
    <header className="bv-bar">
      <a className="bv-logo" href={WORDMARK_HREF}>
        <span aria-hidden="true">{BRAND.mark}</span>
        {BRAND.name}
      </a>

      <nav aria-label="Main">
        <ul className="bv-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                className="bv-link"
                href={link.href}
                aria-current={link.current ? 'page' : undefined}
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
