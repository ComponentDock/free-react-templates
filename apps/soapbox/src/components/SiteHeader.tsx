import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'
import { BRAND, MENU_LABEL, NAV_ID, NAV_LINKS, TICKETS, WORDMARK_HREF } from '../data/site'
import { useDisclosureMenu } from '../hooks/useDisclosureMenu'

/** The 30 px lime diamond with the blue cross — the wordmark's only artwork. */
function Diamond() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false">
      <path d="M15 2 28 15 15 28 2 15z" fill="var(--color-lime)" />
      <path d="M15 9v12M9 15h12" stroke="var(--color-ground)" strokeWidth="3" />
    </svg>
  )
}

/**
 * The blue bar: wordmark left, a right-aligned link list and the outlined
 * Tickets pill. `.sp-nav { flex: 1; justify-content: flex-end }` pins the nav to
 * the right edge, so the wordmark's width never moves the pill.
 *
 * Both menu glyphs live in the markup and the stylesheet swaps them on the
 * bar's `is-open` class, so the icon change costs no second render. The mobile
 * rules are scoped to `.is-enhanced`, which React always renders.
 */
export function SiteHeader() {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <header ref={barRef} className={cn('sp-bar is-enhanced', open && 'is-open')}>
      <div className="sp-bar-inner">
        <a className="sp-logo" href={WORDMARK_HREF}>
          <Diamond />
          {BRAND}
        </a>

        <button
          type="button"
          ref={buttonRef}
          className="sp-menu-btn"
          aria-expanded={open}
          aria-controls={NAV_ID}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
        >
          <Menu className="sp-menu-open" size={22} aria-hidden="true" />
          <X className="sp-menu-close" size={22} aria-hidden="true" />
        </button>

        <nav id={NAV_ID} className="sp-nav" aria-label="Main">
          <ul className="sp-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="sp-link"
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="sp-tickets" href={TICKETS.href} onClick={close}>
            {TICKETS.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
