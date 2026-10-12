import { NAV_LEFT_ID, NAV_RIGHT_ID, navGroup } from '../lib/site'
import {
  containerClass,
  headerClass,
  leftGroupClass,
  rightGroupClass,
  rowClass,
  toggleColumnClass,
  wordmarkColumnClass,
} from '../lib/styles'
import { useDrawer } from '../lib/use-drawer'
import { Drawer } from './Drawer'
import { MenuToggle } from './MenuToggle'
import { NavList } from './NavList'
import { Wordmark } from './Wordmark'

/**
 * The bar: one tier, opaque white, **in the flow** and never sticky, holding a
 * three-column grid whose outer thirds carry three destinations each and whose middle
 * third carries the wordmark — so the wordmark sits dead-centre on the page and the
 * two groups are right- and left-aligned against it. The hamburger is parked against
 * the row's own right edge and only exists below 992px, where both lists hand over to
 * the drawer the same bar mounts.
 */
export function Header() {
  const { isOpen, toggle, close, toggleRef, panelRef, closeRef } = useDrawer()

  return (
    <header role="banner" className={headerClass}>
      <div className={containerClass}>
        <div className={rowClass} data-testid="header-row">
          <nav aria-label="Primary navigation" className={leftGroupClass}>
            <NavList id={NAV_LEFT_ID} items={navGroup('left')} variant="desktop" />
          </nav>

          <div data-testid="wordmark-column" className={wordmarkColumnClass}>
            <Wordmark />
          </div>

          <nav aria-label="Secondary navigation" className={rightGroupClass}>
            <NavList id={NAV_RIGHT_ID} items={navGroup('right')} variant="desktop" />
          </nav>

          <div className={toggleColumnClass}>
            <MenuToggle isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />
          </div>
        </div>
      </div>

      <Drawer isOpen={isOpen} onClose={close} panelRef={panelRef} closeRef={closeRef} />
    </header>
  )
}
