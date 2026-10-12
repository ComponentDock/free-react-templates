import { NAV, PANEL_NAV_ID, PANEL_NAV_LABEL } from '../lib/site'
import { panelListClass } from '../lib/styles'
import { NavRow } from './NavRow'

export interface PanelNavProps {
  /** Reports an activation, so the panel can fold itself away on it. */
  onNavigate: () => void
}

/**
 * The collapsing panel's own list: the same six rows in the same order, one to a line,
 * resting at 70% white with the open destination wearing the accent instead and its
 * underline disabled — the design's own narrow-width treatment. The panel is the only
 * presentation below 992px, which is why the same activation that does nothing on the wide
 * strip folds this list away here.
 */
export function PanelNav({ onNavigate }: PanelNavProps) {
  return (
    <nav aria-label={PANEL_NAV_LABEL} className="w-full" data-testid="panel-nav">
      <ul id={PANEL_NAV_ID} className={panelListClass}>
        {NAV.map((item) => (
          <NavRow key={item.label} item={item} variant="panel" onNavigate={onNavigate} />
        ))}
      </ul>
    </nav>
  )
}
