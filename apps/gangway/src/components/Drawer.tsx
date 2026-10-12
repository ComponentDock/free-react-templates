import type { RefObject } from 'react'
import { X } from 'lucide-react'
import {
  DRAWER_CLOSE_ID,
  DRAWER_CLOSE_LABEL,
  DRAWER_ID,
  MENU_TOGGLE_ID,
  VEIL_ID,
} from '../lib/site'
import {
  drawerBodyClass,
  drawerCloseClass,
  drawerPanelClass,
  drawerStripClass,
  veilClass,
} from '../lib/styles'
import { NavList } from './NavList'

export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  panelRef: RefObject<HTMLDivElement | null>
  closeRef: RefObject<HTMLButtonElement | null>
}

/**
 * The off-canvas panel: a 300px column parked 110% of its own width off the right edge,
 * sliding in over a 50% veil, with the wide row's own list inside it. It is mounted only
 * while it is out, so a closed panel holds no focusable copies of the bar's rows for a
 * keyboard user to wander into behind it. The panel's layer sits above the veil; the bar
 * itself stays above the veil and below the panel, exactly as the design stacks them.
 */
export function Drawer({ isOpen, onClose, panelRef, closeRef }: DrawerProps) {
  return (
    <>
      <div
        id={VEIL_ID}
        data-testid="drawer-veil"
        aria-hidden="true"
        onClick={onClose}
        className={veilClass(isOpen)}
      />

      <aside
        id={DRAWER_ID}
        data-testid="drawer-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={MENU_TOGGLE_ID}
        className={drawerPanelClass(isOpen)}
      >
        {isOpen && (
          <>
            <div className={drawerStripClass}>
              <button
                ref={closeRef}
                id={DRAWER_CLOSE_ID}
                type="button"
                aria-label={DRAWER_CLOSE_LABEL}
                onClick={onClose}
                className={drawerCloseClass}
              >
                <X aria-hidden="true" size={30} />
              </button>
            </div>

            <div data-testid="drawer-body" className={drawerBodyClass}>
              <nav aria-label="Site menu">
                <NavList variant="drawer" onNavigate={onClose} />
              </nav>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
