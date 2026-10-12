import { ChevronDown, Menu as Bars, Search, X } from 'lucide-react'
import type { FormEvent } from 'react'
import { cn, Button } from '@free-react-templates/ui'
import { BRAND, isGroup, NAV, SKIP_TARGET, type NavItem } from '../lib/site'
import { useDisclosure, type Disclosure } from '../lib/use-disclosure'
import {
  brandLinkClass,
  brandMarkClass,
  brandWordClass,
  burgerClass,
  caretClass,
  containerClass,
  dropdownLinkClass,
  dropdownPanelClass,
  groupTriggerClass,
  headerClass,
  headerRowClass,
  mainButtonClass,
  mobileListClass,
  mobileNestedListClass,
  mobilePanelClass,
  navItemClass,
  navLinkClass,
  navListClass,
  navRowClass,
  searchFormClass,
  searchInputClass,
  searchRowClass,
  searchToggleClass,
} from '../lib/styles'
import { BrandMark } from './BrandMark'

/** Hoisted so no inline arrow has to be counted: the search row never leaves the page. */
function stopSubmit(event: FormEvent<HTMLFormElement>): void {
  event.preventDefault()
}

const iconClass = 'h-[16px] w-[16px]'

function NavRow({ item, pages }: { item: NavItem; pages: Disclosure }) {
  if (isGroup(item)) {
    return (
      <li
        className={navItemClass}
        onMouseEnter={pages.open}
        onMouseLeave={pages.close}
      >
        <button
          type="button"
          className={cn(navLinkClass(false), groupTriggerClass)}
          aria-expanded={pages.isOpen}
          aria-controls="pages-panel"
          onClick={pages.open}
          onFocus={pages.open}
        >
          {item.label}
          <ChevronDown className={caretClass} aria-hidden="true" />
        </button>
        <ul id="pages-panel" className={dropdownPanelClass(pages.isOpen)}>
          {item.children.map((child) => (
            <li key={child.label}>
              <a href={child.href} className={dropdownLinkClass}>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    )
  }

  return (
    <li className={navItemClass}>
      <a
        href={item.href}
        className={navLinkClass(item.href === SKIP_TARGET)}
        aria-current={item.href === SKIP_TARGET ? 'page' : undefined}
      >
        {item.label}
      </a>
    </li>
  )
}

function SearchRow({ onClose }: { onClose: () => void }) {
  return (
    <div id="page-search" className={searchRowClass}>
      <form
        className={searchFormClass}
        role="search"
        aria-label="Find a section of this page"
        onSubmit={stopSubmit}
      >
        <label htmlFor="page-search-field" className="sr-only">
          Search the site
        </label>
        <input
          id="page-search-field"
          name="q"
          type="search"
          placeholder="Search the site"
          className={searchInputClass}
        />
        <Button type="submit" className={cn(mainButtonClass, 'shrink-0')}>
          Search
        </Button>
        <button
          type="button"
          className={searchToggleClass}
          aria-label="Close the search row"
          onClick={onClose}
        >
          <X aria-hidden="true" className={iconClass} />
        </button>
      </form>
    </div>
  )
}

/** The folded-away menu. Its contents mount only while it is open, so a shut panel is not tabbable. */
function FoldedMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div id="folded-menu" className={mobilePanelClass}>
      <ul className={mobileListClass}>
        {NAV.map((item) =>
          isGroup(item) ? (
            <li key={item.label}>
              <p className={cn(navLinkClass(false), groupTriggerClass)}>{item.label}</p>
              <ul className={mobileNestedListClass}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <a href={child.href} className={dropdownLinkClass} onClick={onNavigate}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <a href={item.href} className={navLinkClass(false)} onClick={onNavigate}>
                {item.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

/**
 * The page's slim header: the wordmark on the left, the label row (with its `Pages` dropdown) on the
 * right, then the search toggle and — below the design's 1200px turn — the folded menu's toggle. It
 * sits absolutely in the 100px band above the hero, so it scrolls away with the page rather than
 * pinning itself.
 */
export function Header() {
  const pages = useDisclosure()
  const menu = useDisclosure()
  const search = useDisclosure()

  return (
    <header className={headerClass}>
      <div className={cn(containerClass, 'relative')}>
        <div className={headerRowClass}>
          <a href={SKIP_TARGET} className={brandLinkClass} aria-label={`${BRAND} — home`}>
            <BrandMark className={brandMarkClass} />
            <span className={brandWordClass}>{BRAND}</span>
          </a>

          <nav aria-label="Primary" className={navRowClass}>
            <ul className={navListClass}>
              {NAV.map((item) => (
                <NavRow key={item.label} item={item} pages={pages} />
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={searchToggleClass}
            aria-expanded={search.isOpen}
            aria-controls="page-search"
            onClick={search.toggle}
          >
            <Search aria-hidden="true" className={iconClass} />
            <span className="sr-only">Search this page</span>
          </button>

          <button
            type="button"
            className={burgerClass}
            aria-expanded={menu.isOpen}
            aria-controls="folded-menu"
            onClick={menu.toggle}
          >
            {menu.isOpen ? (
              <X aria-hidden="true" className={iconClass} />
            ) : (
              <Bars aria-hidden="true" className={iconClass} />
            )}
            <span className="sr-only">{menu.isOpen ? 'Close the menu' : 'Open the menu'}</span>
          </button>
        </div>

        {search.isOpen ? <SearchRow onClose={search.close} /> : null}
        {menu.isOpen ? <FoldedMenu onNavigate={menu.close} /> : null}
      </div>
    </header>
  )
}
