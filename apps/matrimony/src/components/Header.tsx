import { useEffect, useState } from 'react'
import { ChevronDown, Menu as Bars, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV, SKIP_TARGET, isNavParent } from '../lib/site'
import { useDisclosure } from '../lib/use-disclosure'
import {
  burgerClass,
  burgerIconClass,
  containerClass,
  dropdownButtonClass,
  dropdownIconClass,
  dropdownLinkClass,
  dropdownListClass,
  foldedGroupClass,
  foldedLinkClass,
  foldedListClass,
  foldedMenuClass,
  foldedSubListClass,
  headerClass,
  headerRowClass,
  navItemClass,
  navLinkClass,
  navListClass,
  navRowClass,
  wordmarkClass,
  wordmarkMarkClass,
  wordmarkTextClass,
} from '../lib/styles'
import { BrandMark } from './BrandMark'

const SUBMENU_ID = 'blog-menu'
const FOLDED_SUBMENU_ID = 'blog-menu-folded'

/**
 * The page's bar: the wordmark on the left with its own sprig, the six uppercase labels on the right —
 * one of which opens a three-entry submenu — and, below the design's 992px turn-over, a toggle that
 * folds the same labels into a panel. The bar is white and carries the design's shadow, so the hero
 * photograph starts below it rather than behind it.
 */
export function Header() {
  const { isOpen: menuOpen, toggle: toggleMenu } = useDisclosure()
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    if (openMenu === null) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openMenu])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleMenu()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, toggleMenu])

  return (
    <header className={headerClass}>
      <div className={cn(containerClass, headerRowClass)}>
        <a href={SKIP_TARGET} className={wordmarkClass} aria-label={`${BRAND} — home`}>
          <BrandMark className={wordmarkMarkClass} />
          <span className={wordmarkTextClass}>{BRAND}</span>
        </a>

        <nav aria-label="Primary" className={navRowClass}>
          <ul className={navListClass}>
            {NAV.map((item) =>
              isNavParent(item) ? (
                <li
                  key={item.label}
                  className={navItemClass}
                  onMouseEnter={() => {
                    setOpenMenu(item.label)
                  }}
                  onMouseLeave={() => {
                    setOpenMenu(null)
                  }}
                >
                  <button
                    type="button"
                    className={dropdownButtonClass}
                    aria-expanded={openMenu === item.label}
                    aria-controls={SUBMENU_ID}
                    onClick={() => {
                      setOpenMenu(item.label)
                    }}
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className={dropdownIconClass} />
                  </button>
                  {openMenu === item.label ? (
                    <ul id={SUBMENU_ID} className={dropdownListClass}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className={dropdownLinkClass}
                            onClick={() => {
                              setOpenMenu(null)
                            }}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={item.label} className={navItemClass}>
                  <a href={item.href} className={navLinkClass}>
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          type="button"
          className={burgerClass}
          aria-expanded={menuOpen}
          aria-controls="folded-menu"
          aria-label={menuOpen ? 'Close the menu' : 'Open the menu'}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <X aria-hidden="true" className={burgerIconClass} />
          ) : (
            <Bars aria-hidden="true" className={burgerIconClass} />
          )}
        </button>
      </div>

      {menuOpen ? (
        <nav id="folded-menu" aria-label="Folded menu" className={cn(containerClass, foldedMenuClass)}>
          <ul className={foldedListClass}>
            {NAV.map((item) =>
              isNavParent(item) ? (
                <li key={item.label}>
                  <span className={foldedGroupClass}>{item.label}</span>
                  <ul id={FOLDED_SUBMENU_ID} className={foldedSubListClass}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className={foldedLinkClass} onClick={toggleMenu}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <a href={item.href} className={foldedLinkClass} onClick={toggleMenu}>
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
