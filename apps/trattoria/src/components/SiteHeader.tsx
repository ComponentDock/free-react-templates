import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'
import {
  BRAND,
  CONTACT,
  MENU_LABEL,
  NAV_ID,
  NAV_LINKS,
  WORDMARK_HREF,
} from '../data/site'
import { useDisclosureMenu } from '../hooks/useDisclosureMenu'

/**
 * The bar is a three-track grid — nav, wordmark, bar end — not a flex row with
 * `space-between`: the wordmark sits in an `auto` track, so it is optically
 * centred while the nav stays flush left. A flex bar cannot produce that.
 *
 * Both menu glyphs live in the markup and the stylesheet swaps them on the
 * `is-open` class, so the icon change costs no second render. The mobile rules
 * are scoped to `is-enhanced`, which React always renders.
 */
export function SiteHeader() {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <header ref={barRef} className={cn('tt-bar is-enhanced', open && 'is-open')}>
      <div className="tt-bar-inner">
        <nav id={NAV_ID} className="tt-nav" aria-label="Main">
          <ul className="tt-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="tt-link"
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="tt-logo" href={WORDMARK_HREF}>
          <span className="tt-logo-name">{BRAND.name}</span>
          <span className="tt-logo-sub">{BRAND.place}</span>
        </a>

        <div className="tt-bar-end">
          <a className="tt-phone" href={`tel:${CONTACT.tel}`}>
            {CONTACT.phone}
          </a>
          <button
            type="button"
            ref={buttonRef}
            className="tt-menu-btn"
            aria-expanded={open}
            aria-controls={NAV_ID}
            aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
            onClick={toggle}
          >
            <Menu className="tt-menu-open" size={24} aria-hidden="true" />
            <X className="tt-menu-close" size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
