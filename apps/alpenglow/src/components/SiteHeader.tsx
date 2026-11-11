import { Menu, X } from 'lucide-react'
import { BRAND, MENU_LABEL, NAV_ID, NAV_LINKS } from '../data/site'
import { useDisclosureMenu } from '../hooks/useDisclosureMenu'

/**
 * The ridge glyph. Stroke-only and drawn in `currentColor` at 26 px, because
 * the wordmark beside it already carries the brand for assistive tech.
 */
function RidgeMark() {
  return (
    <svg viewBox="0 0 26 26" aria-hidden="true" focusable="false">
      <path
        d="M2 21 10 7l4 7 3-4 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * One transparent bar over the sky. Below 861 the four links move into a panel
 * hanging from the bar's padding box, which is why the panel starts one pixel
 * above the bar's outer edge rather than inside it.
 */
export function SiteHeader() {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <header ref={barRef} className={`ap-bar is-enhanced${open ? ' is-open' : ''}`}>
      <div className="ap-bar-inner">
        <a className="ap-logo" href={BRAND.href}>
          <RidgeMark />
          {BRAND.name}
        </a>

        <button
          type="button"
          ref={buttonRef}
          className="ap-menu-btn"
          aria-expanded={open}
          aria-controls={NAV_ID}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id={NAV_ID} className="ap-nav" aria-label="Main">
          <ul className="ap-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="ap-link"
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer noopener' : undefined}
                  onClick={close}
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
