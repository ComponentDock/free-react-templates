import { useState, type KeyboardEvent } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'
import {
  ACTIVE_NAV_LABEL,
  BRAND,
  MENU_CLOSE_LABEL,
  MENU_TOGGLE_LABEL,
  NAV_CTA_HREF,
  NAV_CTA_LABEL,
  NAV_ITEMS,
  SECTION_IDS,
} from '../lib/site'
import {
  activeBarClass,
  containerClass,
  ctaClass,
  foldedClass,
  foldedCtaClass,
  foldedItemClass,
  foldedLinkClass,
  foldedListClass,
  headerClass,
  headerRowClass,
  logoColumnClass,
  navColumnClass,
  navItemClass,
  navLinkClass,
  navListClass,
  toggleClass,
  toggleColumnClass,
  toggleGlyphClass,
  wordmarkClass,
  wordmarkLinkClass,
} from '../lib/styles'

/**
 * The white bar the design pins to the top of the page: the wordmark, the six single-page rows with
 * the live one underlined in mint, and the grey quote pill. Below `xl` the rows fold behind a
 * disclosure that mounts only while it is open, so a shut menu holds nothing focusable.
 */
export function Header() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((current) => !current)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <header className={headerClass} onKeyDown={handleKeyDown}>
      <div className={containerClass}>
        <div className={headerRowClass}>
          <div className={logoColumnClass}>
            <h1 className={wordmarkClass}>
              <a href={`#${SECTION_IDS.home}`} className={wordmarkLinkClass}>
                {BRAND}
              </a>
            </h1>
          </div>

          <div className={navColumnClass}>
            <nav aria-label="Primary">
              <ul className={navListClass}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label} className={navItemClass}>
                    <a
                      href={item.href}
                      className={navLinkClass(item.label === ACTIVE_NAV_LABEL)}
                      aria-current={item.label === ACTIVE_NAV_LABEL ? 'page' : undefined}
                    >
                      {item.label}
                      {item.label === ACTIVE_NAV_LABEL && (
                        <span data-testid="active-bar" aria-hidden="true" className={activeBarClass} />
                      )}
                    </a>
                  </li>
                ))}
                <li className={navItemClass}>
                  <ButtonLink href={NAV_CTA_HREF} className={ctaClass}>
                    {NAV_CTA_LABEL}
                  </ButtonLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className={toggleColumnClass}>
            <button
              type="button"
              aria-label={isOpen ? MENU_CLOSE_LABEL : MENU_TOGGLE_LABEL}
              aria-expanded={isOpen}
              aria-controls="celebrant-menu"
              className={toggleClass}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className={toggleGlyphClass} aria-hidden="true" />
              ) : (
                <Menu className={toggleGlyphClass} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="celebrant-menu" className={foldedClass}>
            <ul className={foldedListClass}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className={foldedItemClass}>
                  <a href={item.href} className={foldedLinkClass} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className={foldedItemClass}>
                <ButtonLink href={NAV_CTA_HREF} className={foldedCtaClass} onClick={closeMenu}>
                  {NAV_CTA_LABEL}
                </ButtonLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
