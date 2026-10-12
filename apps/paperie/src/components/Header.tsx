import { ChevronDown, Menu as Bars, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { BRAND, DOT, MENU_LABEL, NAV, SKIP_TARGET, isGroup, type NavItem } from '../lib/site'
import { useDisclosure, type Disclosure } from '../lib/use-disclosure'
import {
  brandDotClass,
  brandLinkClass,
  caretClass,
  containerClass,
  dropdownPanelClass,
  dropdownRowClass,
  foldedGroupRowClass,
  foldedListClass,
  foldedNestedClass,
  foldedPanelClass,
  foldedRowClass,
  headerClass,
  headerPinnedClass,
  headerRowClass,
  menuBarClass,
  menuButtonClass,
  menuGlyphClass,
  navItemClass,
  navLinkClass,
  navListClass,
  navPinnedClass,
  navRowClass,
  navTriggerClass,
} from '../lib/styles'

/** The bar pins itself once the page has scrolled past it. */
export const STICKY_AT = 100

const DROPDOWN_ID = 'pages-panel'
const MENU_ID = 'folded-menu'

function NavRow({ item, pages, pinned }: { item: NavItem; pages: Disclosure; pinned: boolean }) {
  if (isGroup(item)) {
    return (
      <li className={navItemClass} onMouseEnter={pages.open} onMouseLeave={pages.close}>
        <button
          type="button"
          className={cn(navTriggerClass, pinned && navPinnedClass)}
          aria-expanded={pages.isOpen}
          aria-controls={DROPDOWN_ID}
          onClick={pages.open}
          onFocus={pages.open}
        >
          {item.label}
          <ChevronDown className={caretClass} aria-hidden="true" />
        </button>
        <ul
          id={DROPDOWN_ID}
          className={cn(dropdownPanelClass, pages.isOpen ? 'visible opacity-100' : 'invisible opacity-0')}
          aria-hidden={pages.isOpen ? 'false' : 'true'}
        >
          {item.children.map((child) => (
            <li key={child.label}>
              <a href={child.href} className={dropdownRowClass}>
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
      <a href={item.href} className={cn(navLinkClass, pinned && navPinnedClass)}>
        {item.label}
      </a>
    </li>
  )
}

/**
 * The folded menu below the design's 1200px turn. Its contents mount only while it is open, so a
 * shut panel holds nothing focusable.
 */
function FoldedMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div id={MENU_ID} className={foldedPanelClass}>
      <ul className={foldedListClass}>
        {NAV.map((item) =>
          isGroup(item) ? (
            <li key={item.label}>
              <p className={foldedGroupRowClass}>
                {item.label}
                <span aria-hidden="true">+</span>
              </p>
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

/**
 * The page's slim header: the wordmark on the left, the label row (with its one disclosure) on the
 * right, and — below the design's own turn — the folded menu's grey bar. Once the page has scrolled
 * past the bar it pins itself to the top of the viewport with a soft shadow.
 */
export function Header() {
  const pages = useDisclosure()
  const menu = useDisclosure()
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setPinned(window.scrollY > STICKY_AT)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={cn(headerClass, pinned && headerPinnedClass)}>
      <div className={containerClass}>
        <div className={headerRowClass}>
          <a href={SKIP_TARGET} className={brandLinkClass} aria-label={`${BRAND} — back to the top`}>
            {BRAND}
            <span className={brandDotClass}>{DOT}</span>
          </a>

          <nav aria-label="Primary" className={navRowClass}>
            <ul className={navListClass}>
              {NAV.map((item) => (
                <NavRow key={item.label} item={item} pages={pages} pinned={pinned} />
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={menuBarClass}>
        <button
          type="button"
          className={menuButtonClass}
          aria-expanded={menu.isOpen}
          aria-controls={MENU_ID}
          onClick={menu.toggle}
        >
          {MENU_LABEL}
          {menu.isOpen ? (
            <X className={menuGlyphClass} aria-hidden="true" />
          ) : (
            <Bars className={menuGlyphClass} aria-hidden="true" />
          )}
        </button>
      </div>

      {menu.isOpen ? <FoldedMenu onNavigate={menu.close} /> : null}
    </header>
  )
}
