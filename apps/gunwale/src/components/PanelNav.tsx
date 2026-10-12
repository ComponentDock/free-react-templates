import { NAV, PANEL_NAV_ID, PANEL_NAV_LABEL } from '../lib/site'
import { panelListClass } from '../lib/styles'
import { NavRow } from './NavRow'

export interface PanelNavProps {
  /** Reports an activation, so the panel can fold itself away on it. */
  onNavigate: () => void
}

/**
 * The collapsing panel's own list: the same five rows in the same order, one to a line,
 * the open destination wearing the design's gold and the rest 70% white. The panel is the
 * only presentation below 992px, which is why the same activation that does nothing on
 * the wide bar folds this list away here.
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
