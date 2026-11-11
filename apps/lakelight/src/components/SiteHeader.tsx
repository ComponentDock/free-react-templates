import { Menu, Mountain, X } from 'lucide-react'
import { BRAND, LOGIN, MENU_LABEL, NAV_ID, NAV_LINKS } from '../data/site'
import { useDisclosureMenu } from '../hooks/useDisclosureMenu'

/**
 * One transparent bar over the sand ground: a teal tile glyph, the wordmark,
 * four links and an outlined pill. Below 861 the links move into a panel that
 * hangs four pixels under the bar's padding box, which is why the panel's top
 * is `calc(100% - 4px)` and the bar has to stay `position: relative`.
 */
export function SiteHeader() {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <header ref={barRef} className={`lk-bar${open ? ' is-open' : ''}`}>
      <div className="lk-bar-inner">
        <a className="lk-logo" href={BRAND.href}>
          <span className="lk-logo-mark">
            <Mountain size={20} aria-hidden="true" focusable="false" />
          </span>
          {BRAND.name}
        </a>

        <button
          type="button"
          ref={buttonRef}
          className="lk-menu-btn"
          aria-expanded={open}
          aria-controls={NAV_ID}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
        >
          {open ? (
            <X size={22} aria-hidden="true" focusable="false" />
          ) : (
            <Menu size={22} aria-hidden="true" focusable="false" />
          )}
        </button>

        <nav id={NAV_ID} className="lk-nav" aria-label="Main">
          <ul className="lk-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="lk-link"
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
          <a
            className="lk-login"
            href={LOGIN.href}
            target="_blank"
            rel="noreferrer noopener"
            onClick={close}
          >
            {LOGIN.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
