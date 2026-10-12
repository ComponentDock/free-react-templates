import { NAV, PANEL_NAV_LABEL, PANEL_ID } from '../lib/site'
import { panelClass, panelInnerClass, panelListClass } from '../lib/styles'
import { NavRow } from './NavRow'

export interface PanelProps {
  isOpen: boolean
  /** Folds the panel away once a row inside it has been followed. */
  onNavigate: () => void
}

/**
 * The collapsing panel: the same five rows the wide card shows, stacked in one full-width
 * column under the header row — the design's `flex-basis:100%` — and mounted only while it is
 * open, so a folded panel holds no focusable copies of the card's rows. Its own height travels
 * on the design's `0.35s ease`, which a reduced-motion visitor lands immediately (see
 * `index.css`).
 */
export function Panel({ isOpen, onNavigate }: PanelProps) {
  return (
    <div id={PANEL_ID} className={panelClass(isOpen)}>
      <div className={panelInnerClass}>
        {isOpen && (
          <nav aria-label={PANEL_NAV_LABEL} data-testid="panel">
            <ul className={panelListClass}>
              {NAV.map((item) => (
                <NavRow key={item.href} item={item} variant="panel" onNavigate={onNavigate} />
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}
