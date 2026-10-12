import { ChevronDown, Search } from 'lucide-react'
import { BrandMark } from './brand-mark'
import {
  BRAND,
  MENU_ID,
  MENU_LINKS,
  MENU_TOGGLE_LABEL,
  MORE_ITEMS,
  MORE_LABEL,
  MORE_ROOT_HREF,
  NAV_ITEMS,
  SEARCH_TOGGLE_LABEL,
  TOP_TARGET,
  type NavItemModel,
} from '../lib/site'
import {
  brandMarkClass,
  brandRowClass,
  brandWordClass,
  burgerBarClass,
  burgerClass,
  caretClass,
  chromeRowClass,
  containerClass,
  dropdownClass,
  dropdownLinkClass,
  dropdownListClass,
  headerClass,
  headerInnerClass,
  mobileLinkClass,
  mobilePanelClass,
  navItemClass,
  navLinkClass,
  navListClass,
  navRowClass,
  searchGlyphClass,
  searchToggleClass,
} from '../lib/styles'

export interface NavbarProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
  onOpenSearch: () => void
}

/** One label of the row: its gold rule comes from the `.nav-label` rule in `index.css`, and the
 * block the page is standing on is marked both visually and with `aria-current`. */
function NavLink({ item }: { item: NavItemModel }) {
  return (
    <a
      href={item.href}
      className={navLinkClass(item.current === true)}
      aria-current={item.current === true ? 'page' : undefined}
    >
      {item.label}
    </a>
  )
}

/**
 * The centred header: the monogram and the wordmark over the row of labels, with the search control
 * beside them and a burger — which stands in for the row below 992px, where every label the page
 * declares moves into a disclosure so that none of them is lost.
 */
export function Navbar({ isMenuOpen, onToggleMenu, onOpenSearch }: NavbarProps) {
  return (
    <header className={headerClass}>
      <div className={containerClass}>
        <div className={headerInnerClass}>
          <a href={TOP_TARGET} className={brandRowClass}>
            <BrandMark className={brandMarkClass} />
            <span className={brandWordClass}>{BRAND}</span>
          </a>

          <div className={chromeRowClass}>
            <nav aria-label="The day" className={navRowClass}>
              <ul className={navListClass}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href} className={navItemClass}>
                    <NavLink item={item} />
                  </li>
                ))}
                <li className={navItemClass}>
                  <a href={MORE_ROOT_HREF} className={navLinkClass(false)}>
                    {MORE_LABEL}
                    <ChevronDown className={caretClass} aria-hidden="true" />
                  </a>
                  <div className={dropdownClass}>
                    <ul className={dropdownListClass}>
                      {MORE_ITEMS.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} className={dropdownLinkClass}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>

            <button
              type="button"
              onClick={onOpenSearch}
              aria-label={SEARCH_TOGGLE_LABEL}
              className={searchToggleClass}
            >
              <Search className={searchGlyphClass} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onToggleMenu}
              aria-label={MENU_TOGGLE_LABEL}
              aria-expanded={isMenuOpen}
              aria-controls={MENU_ID}
              className={burgerClass}
            >
              <span className={burgerBarClass('top', isMenuOpen)} aria-hidden="true" />
              <span className={burgerBarClass('bottom', isMenuOpen)} aria-hidden="true" />
            </button>
          </div>

          {isMenuOpen ? (
            <nav id={MENU_ID} aria-label="Every block of the page" className={mobilePanelClass}>
              {MENU_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={mobileLinkClass(item.current === true)}
                  aria-current={item.current === true ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}
