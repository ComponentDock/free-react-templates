import { Menu as Bars, X } from 'lucide-react'
import { cn, } from '@free-react-templates/ui'
import { BRAND, NAV, SKIP_TARGET } from '../lib/site'
import { useDisclosure } from '../lib/use-disclosure'
import { useScrolled } from '../lib/use-scrolled'
import {
  burgerClass,
  burgerIconClass,
  containerClass,
  foldedListClass,
  foldedMenuClass,
  headerClass,
  headerRowClass,
  navLinkClass,
  navListClass,
  navRowClass,
  wordmarkClass,
} from '../lib/styles'

/**
 * The page's slim bar: the wordmark on the left, the eight uppercase labels on the right, and — below
 * the design's 992px turn-over — a toggle that folds the same labels into a panel. Over the hero it
 * floats transparent and absolute; once the page scrolls past the threshold it pins itself to the top
 * and trades white for the design's tinted, black-on-pale-pink state.
 */
export function Header() {
  const scrolled = useScrolled()
  const menu = useDisclosure()

  return (
    <header className={headerClass(scrolled)}>
      <div className={cn(containerClass, headerRowClass)}>
        <a href={SKIP_TARGET} className={wordmarkClass(scrolled)} aria-label={`${BRAND} — home`}>
          {BRAND}
        </a>

        <nav aria-label="Primary" className={navRowClass}>
          <ul className={navListClass}>
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={navLinkClass(item.href === SKIP_TARGET, scrolled)}
                  aria-current={item.href === SKIP_TARGET ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={burgerClass(scrolled)}
          aria-expanded={menu.isOpen}
          aria-controls="folded-menu"
          aria-label={menu.isOpen ? 'Close the menu' : 'Open the menu'}
          onClick={menu.toggle}
        >
          {menu.isOpen ? (
            <X aria-hidden="true" className={burgerIconClass} />
          ) : (
            <Bars aria-hidden="true" className={burgerIconClass} />
          )}
        </button>
      </div>

      {menu.isOpen ? (
        <nav id="folded-menu" aria-label="Folded menu" className={cn(containerClass, foldedMenuClass)}>
          <ul className={foldedListClass}>
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={navLinkClass(item.href === SKIP_TARGET, scrolled)}
                  onClick={menu.toggle}
                >
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
