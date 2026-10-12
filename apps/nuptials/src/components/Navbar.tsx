import { useEffect, useState } from 'react'
import { Mail, Menu as Bars, Moon, Phone, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  BRAND,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  MENU_CLOSE_LABEL,
  MENU_ID,
  MENU_OPEN_LABEL,
  NAV,
  SKIP_TARGET,
  THEME_LABEL,
} from '../lib/site'
import { useDisclosure } from '../lib/use-disclosure'
import {
  actionsClass,
  burgerClass,
  containerClass,
  foldedLinkClass,
  foldedListClass,
  foldedMenuClass,
  headerClass,
  headerRowClass,
  iconButtonClass,
  iconClass,
  navLinkClass,
  navListClass,
  navRowClass,
  topbarClass,
  topbarIconClass,
  topbarLinkClass,
  topbarRowClass,
  wordmarkClass,
  wordmarkMarkClass,
  wordmarkTextClass,
} from '../lib/styles'
import { BrandMark } from './BrandMark'

/** The digits a phone link needs: nothing but the dialling characters survive. */
function dialable(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

/**
 * The page's bar: the contact strip the design keeps above the masthead, the wordmark with its two
 * rings, the five uppercase labels, the theme control and — below the design's 992px turn-over — the
 * toggle that folds the same labels into a panel. The panel is the page's only overlay, so it closes
 * on `Escape` as well as on the toggle and on any label inside it.
 */
export function Navbar() {
  const { isOpen: menuOpen, toggle: toggleMenu, close: closeMenu } = useDisclosure()
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)

    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, closeMenu])

  return (
    <header className={headerClass}>
      <div className={topbarClass}>
        <div className={cn(containerClass, topbarRowClass)}>
          <a href={`tel:${dialable(CONTACT_PHONE)}`} className={topbarLinkClass}>
            <Phone aria-hidden="true" className={topbarIconClass} />
            {CONTACT_PHONE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={topbarLinkClass}>
            <Mail aria-hidden="true" className={topbarIconClass} />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className={cn(containerClass, headerRowClass)}>
        <a href={SKIP_TARGET} className={wordmarkClass} aria-label={`${BRAND} — home`}>
          <BrandMark className={wordmarkMarkClass} />
          <span className={wordmarkTextClass}>{BRAND}</span>
        </a>

        <nav aria-label="Primary" className={navRowClass}>
          <ul className={navListClass}>
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={actionsClass}>
          <button
            type="button"
            className={iconButtonClass}
            aria-expanded={dark}
            aria-label={THEME_LABEL}
            onClick={() => {
              setDark((current) => !current)
            }}
          >
            {dark ? (
              <Sun aria-hidden="true" className={iconClass} />
            ) : (
              <Moon aria-hidden="true" className={iconClass} />
            )}
          </button>

          <button
            type="button"
            className={burgerClass}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            aria-label={menuOpen ? MENU_CLOSE_LABEL : MENU_OPEN_LABEL}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X aria-hidden="true" className={iconClass} />
            ) : (
              <Bars aria-hidden="true" className={iconClass} />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id={MENU_ID} aria-label="Folded menu" className={cn(containerClass, foldedMenuClass)}>
          <ul className={foldedListClass}>
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={foldedLinkClass} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
