import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, LOGIN, MENU_LABEL, NAV_ID, NAV_LINKS, WORDMARK_HREF } from '../data/hero'
import { useMobileMenu } from '../hooks/useMobileMenu'

/**
 * The floating glass bar: a 26 px disc wordmark, four links centred in the
 * remaining space, a log-in pill, and a menu circle that only exists below
 * 861 px.
 *
 * Two details are load-bearing and easy to lose:
 * - `backdrop-filter` on the pill makes the pill — not the bar — the containing
 *   block for the absolutely positioned nav, which is why the panel hangs 8 px
 *   under the pill and is inset by one border plus the gutter.
 * - the mobile rules are scoped to `.is-enhanced`, so the stylesheet keeps a
 *   no-script fallback (the nav in flow) alongside the menu branch.
 */
export function SiteHeader() {
  const { open, toggle, close, headerRef, buttonRef } = useMobileMenu()

  return (
    <header
      ref={headerRef}
      className={cn('ag-bar is-enhanced', open && 'is-open')}
    >
      <div className="ag-pill">
        <a href={WORDMARK_HREF} className="ag-logo">
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            <circle cx="13" cy="13" r="13" fill="currentColor" />
            <path
              d="M13 5.2a7.8 7.8 0 1 0 7.8 7.8A6.1 6.1 0 0 1 13 5.2Z"
              fill="#fff"
            />
          </svg>
          {BRAND}
        </a>

        <button
          ref={buttonRef}
          type="button"
          aria-controls={NAV_ID}
          aria-expanded={open}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
          className="ag-menu-btn"
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>

        <nav id={NAV_ID} aria-label="Main" className="ag-nav">
          <ul className="ag-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  onClick={close}
                  className="ag-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href={LOGIN.href} onClick={close} className="ag-login">
            {LOGIN.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
