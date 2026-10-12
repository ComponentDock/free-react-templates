import { Fragment } from 'react'
import { MENU_AFTER_ROW, NAV, PANEL_ID, PANEL_NAV_LABEL } from '../lib/site'
import { panelClass, panelInnerClass, panelListClass } from '../lib/styles'
import { Dropdown } from './Dropdown'
import { NavRow } from './NavRow'

export interface PanelProps {
  isOpen: boolean
  /** Folds the panel away once an item inside it has been followed. */
  onNavigate: () => void
}

/**
 * The folding panel: the same five rows the wide bar shows — the workshop menu standing expanded
 * in the middle of them, as the design itself renders it below 992px — stacked in one full-width
 * column under the chrome row (the design's `flex-basis:100%`) and mounted only while it is open,
 * so a folded panel holds no focusable copies of the bar's destinations. Its own height travels on
 * the design's own `0.35s ease`, which a reduced-motion visitor lands immediately (see
 * `index.css`), and its list keeps the design's 10px of tail.
 */
export function Panel({ isOpen, onNavigate }: PanelProps) {
  return (
    <div id={PANEL_ID} className={panelClass(isOpen)}>
      <div className={panelInnerClass}>
        {isOpen && (
          <nav aria-label={PANEL_NAV_LABEL} data-testid="panel">
            <ul className={panelListClass}>
              {NAV.map((item, index) => (
                <Fragment key={item.href}>
                  <NavRow item={item} variant="panel" onNavigate={onNavigate} />
                  {index === MENU_AFTER_ROW && <Dropdown variant="panel" onNavigate={onNavigate} />}
                </Fragment>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}
