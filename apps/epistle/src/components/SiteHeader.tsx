import { cn } from '@free-react-templates/ui'
import { BRAND, MENU_LABEL, NAV_ID, NAV_LINKS, THE, WORDMARK_HREF } from '../data/site'
import { useDisclosureMenu } from '../hooks/useDisclosureMenu'

/**
 * The bar: an italic-coral "The" plus the wordmark on the left, four muted
 * links on the right, and a 44px circular disclosure button that only exists
 * below 861px.
 *
 * Both menu glyphs are in the markup and the stylesheet swaps them on the bar's
 * `is-open` class, so the icon change costs no second render. The mobile rules
 * are scoped to `.is-enhanced`, which keeps a no-script fallback: without the
 * class the bar wraps and the links stay in flow.
 */
export function SiteHeader() {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <header ref={barRef} className={cn('ep-bar is-enhanced', open && 'is-open')}>
      <div className="ep-bar-inner">
        <a href={WORDMARK_HREF} className="ep-logo">
          <span className="ep-logo-the">{THE}</span> {BRAND}
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="ep-menu-btn"
          aria-controls={NAV_ID}
          aria-expanded={open}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
        >
          <svg className="ep-menu-open" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 7h16M4 12h10M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="ep-menu-close"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav id={NAV_ID} className="ep-nav" aria-label="Main">
          <ul className="ep-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  onClick={close}
                  className="ep-link"
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
