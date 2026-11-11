import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'
import {
  BRAND,
  DEPLOY_NOW,
  MENU_LABEL,
  NAV_ID,
  NAV_LINKS,
  SIGN_IN,
  WORDMARK_HREF,
} from '../data/site'
import { useDisclosureMenu } from '../hooks/useDisclosureMenu'

/**
 * The gradient mark. It has no lucide equivalent — lucide ships single-colour
 * glyphs — so the triangle is one inline path filled by a two-stop gradient,
 * at 24 px, `aria-hidden` because the wordmark beside it carries the name.
 */
function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="vg-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--color-sky)' }} />
          <stop offset="1" style={{ stopColor: 'var(--color-violet)' }} />
        </linearGradient>
      </defs>
      <path d="M12 2 22 20H2z" fill="url(#vg-logo-gradient)" />
    </svg>
  )
}

/**
 * One translucent bar over the grid: wordmark, four links, a quiet sign-in and
 * one ink-filled button. Below 861 the links move into a panel hanging off the
 * bar's padding box, so its top edge sits one pixel above the bar's outer edge
 * — the bottom border belongs to the containing block, not to the inset. That
 * panel is the page's only state; the hook owns all four ways it closes.
 */
export function SiteHeader() {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <header ref={barRef} className={cn('vg-bar is-enhanced', open && 'is-open')}>
      <div className="vg-bar-inner">
        <a className="vg-logo" href={WORDMARK_HREF}>
          <LogoMark />
          {BRAND.name}
        </a>

        <button
          type="button"
          ref={buttonRef}
          className="vg-menu-btn"
          aria-expanded={open}
          aria-controls={NAV_ID}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>

        <nav id={NAV_ID} className="vg-nav" aria-label="Main">
          <ul className="vg-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="vg-link"
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

          <div className="vg-nav-end">
            <a className="vg-signin" href={SIGN_IN.href} onClick={close}>
              {SIGN_IN.label}
            </a>
            <a
              className="vg-deploy"
              href={DEPLOY_NOW.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {DEPLOY_NOW.label}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
