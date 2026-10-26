import { cn } from '@free-react-templates/ui'
import { BRAND, MENU_LABEL, NAV_ID, NAV_LINKS, WORDMARK_HREF } from '../data/site'
import { useMobileMenu } from '../hooks/useMobileMenu'

/**
 * The bar: a 34px marked wordmark on the left, a pill of four links on the
 * right, and a 44px disclosure button that only exists below 861px.
 *
 * Both menu glyphs are in the markup and the stylesheet swaps them on the bar's
 * `is-open` class, so the icon change costs no second render. The mobile rules
 * are scoped to `.is-enhanced`, which keeps a no-script fallback: without the
 * class the bar wraps and the links stay in flow.
 */
export function SiteHeader() {
  const { open, toggle, close, headerRef, buttonRef } = useMobileMenu()

  return (
    <header ref={headerRef} className={cn('td-bar is-enhanced', open && 'is-open')}>
      <div className="td-bar-inner">
        <a href={WORDMARK_HREF} className="td-logo">
          <span className="td-logo-mark" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 20 20">
              <circle
                cx="10"
                cy="10"
                r="6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="30 11"
                strokeLinecap="round"
                transform="rotate(-60 10 10)"
              />
            </svg>
          </span>
          {BRAND}
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="td-menu-btn"
          aria-controls={NAV_ID}
          aria-expanded={open}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
        >
          <svg className="td-menu-open" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 7h16M4 12h10M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg className="td-menu-close" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav id={NAV_ID} className="td-nav" aria-label="Main">
          <ul className="td-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  onClick={close}
                  className="td-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
