import { useEffect, type RefObject } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import {
  BRAND,
  CURRENT_NAV_LABEL,
  MENU_CLOSE_LABEL,
  MENU_OPEN_LABEL,
  NAV,
  SEARCH_OPEN_LABEL,
  SKIP_TARGET,
  SOCIALS,
  isGroup,
  type NavItem,
} from '../lib/site'
import { useDisclosure } from '../lib/use-disclosure'
import {
  burgerClass,
  caretClass,
  containerClass,
  dropdownPanelClass,
  dropdownRowClass,
  foldedGroupLabelClass,
  foldedListClass,
  foldedNestedClass,
  foldedPanelClass,
  foldedRowClass,
  headerClass,
  headerRightClass,
  headerRowClass,
  headerSocialClass,
  headerSocialsClass,
  iconButtonClass,
  iconClass,
  navDotClass,
  navItemClass,
  navLinkClass,
  navListClass,
  navRowClass,
  navTriggerClass,
  wordmarkClass,
} from '../lib/styles'
import { SocialIcon } from './SocialIcon'

const DROPDOWN_ID = 'reverie-pages-panel'
const MENU_ID = 'reverie-folded-menu'

interface NavRowProps {
  item: NavItem
  pagesOpen: boolean
  onOpenPages: () => void
  onClosePages: () => void
}

/** One top-level destination — a plain link, or the row's single disclosure. */
function NavRow({ item, pagesOpen, onOpenPages, onClosePages }: NavRowProps) {
  if (!isGroup(item)) {
    return (
      <li className={navItemClass}>
        <a href={item.href} className={navLinkClass}>
          {item.label}
          {item.label === CURRENT_NAV_LABEL ? (
            <span className={navDotClass} aria-hidden="true" />
          ) : null}
        </a>
      </li>
    )
  }

  return (
    <li className={navItemClass} onMouseEnter={onOpenPages} onMouseLeave={onClosePages}>
      <button
        type="button"
        className={navTriggerClass}
        aria-expanded={pagesOpen}
        aria-controls={DROPDOWN_ID}
        onClick={onOpenPages}
        onFocus={onOpenPages}
      >
        {item.label}
        <ChevronDown className={caretClass} aria-hidden="true" />
      </button>

      {pagesOpen ? (
        <ul id={DROPDOWN_ID} className={dropdownPanelClass}>
          {item.children.map((child) => (
            <li key={child.label}>
              <a href={child.href} className={dropdownRowClass}>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

interface FoldedMenuProps {
  onNavigate: () => void
}

/** The folded menu below the design's 992px turn, mounted only while it is open. */
function FoldedMenu({ onNavigate }: FoldedMenuProps) {
  return (
    <div id={MENU_ID} className={foldedPanelClass}>
      <ul className={foldedListClass}>
        {NAV.map((item) =>
          isGroup(item) ? (
            <li key={item.label}>
              <p className={foldedGroupLabelClass}>{item.label}</p>
              <ul className={foldedNestedClass}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <a href={child.href} className={foldedRowClass} onClick={onNavigate}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <a href={item.href} className={foldedRowClass} onClick={onNavigate}>
                {item.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

interface NavbarProps {
  /** The button the search overlay hands the focus back to when it closes. */
  searchButton: RefObject<HTMLButtonElement | null>
  onOpenSearch: () => void
}

/**
 * The bar that floats over the cover: the serif wordmark, the six-item row with its one panel, a
 * strip of marks, the magnifier and — below the folded turn — the menu toggle.
 */
export function Navbar({ searchButton, onOpenSearch }: NavbarProps) {
  const pages = useDisclosure()
  const menu = useDisclosure()
  const { isOpen: pagesOpen, open: openPages, close: closePages } = pages
  const { isOpen: menuOpen, close: closeMenu, toggle: toggleMenu } = menu

  useEffect(() => {
    if (!pagesOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePages()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [pagesOpen, closePages])

  return (
    <header className={headerClass}>
      <div className={containerClass}>
        <div className={headerRowClass}>
          <a href={SKIP_TARGET} className={wordmarkClass} aria-label={`${BRAND} — back to the top`}>
            {BRAND}
          </a>

          <nav aria-label="Primary" className={navRowClass}>
            <ul className={navListClass}>
              {NAV.map((item) => (
                <NavRow
                  key={item.label}
                  item={item}
                  pagesOpen={pagesOpen}
                  onOpenPages={openPages}
                  onClosePages={closePages}
                />
              ))}
            </ul>
          </nav>

          <div className={headerRightClass}>
            <ul className={headerSocialsClass}>
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className={headerSocialClass} aria-label={social.label}>
                    <SocialIcon mark={social.mark} />
                  </a>
                </li>
              ))}
            </ul>

            <button
              ref={searchButton}
              type="button"
              className={iconButtonClass}
              aria-label={SEARCH_OPEN_LABEL}
              onClick={onOpenSearch}
            >
              <Search className={iconClass} aria-hidden="true" />
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
                <X className={iconClass} aria-hidden="true" />
              ) : (
                <Menu className={iconClass} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? <FoldedMenu onNavigate={closeMenu} /> : null}
    </header>
  )
}
