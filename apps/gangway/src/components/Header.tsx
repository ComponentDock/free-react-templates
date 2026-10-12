import { containerClass, ctaColumnClass, navColumnClass, rowClass } from '../lib/styles'
import { useDrawer } from '../lib/use-drawer'
import { CtaPair } from './CtaPair'
import { Drawer } from './Drawer'
import { MenuToggle } from './MenuToggle'
import { NavList } from './NavList'
import { Wordmark } from './Wordmark'

/**
 * The bar: one tier, absolutely placed 48px below the top of the page (2rem of offset
 * plus its own 1rem of margin), transparent so the band shows through, and never sticky.
 *
 * Its own row holds three anchors — the wordmark at 5% from the left, the list centred
 * on the bar, and the pair with the hamburger at 5% from the right — and from 768px up
 * all three are out of the flow, which is why the row itself measures no height at all
 * from there. Below 768px the wordmark and the pair return to the flow and the row reads
 * at its measured 50px. The drawer is mounted by the same bar, because the hamburger
 * that opens it is part of the pair's column.
 */
export function Header() {
  const { isOpen, toggle, close, toggleRef, panelRef, closeRef } = useDrawer()

  return (
    <header role="banner" className="absolute inset-x-0 top-8 z-[1999] mt-4 w-full">
      <div className={containerClass}>
        <div className={rowClass} data-testid="header-row">
          <Wordmark />

          <nav aria-label="Site navigation" className={navColumnClass}>
            <NavList variant="desktop" />
          </nav>

          <div data-testid="cta-column" className={ctaColumnClass}>
            <CtaPair />
            <MenuToggle isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />
          </div>
        </div>
      </div>

      <Drawer isOpen={isOpen} onClose={close} panelRef={panelRef} closeRef={closeRef} />
    </header>
  )
}
