import { NAV } from '../lib/site'
import { PanelRow } from './PanelRow'

export interface PanelNavProps {
  /** Fired when a row is activated, so the sidebar can close on its way out. */
  onNavigate: () => void
}

/**
 * The sidebar's rows, rendered from the same item model the page navigates by.
 * One source of truth: nothing here is a DOM clone of another menu.
 */
export function PanelNav({ onNavigate }: PanelNavProps) {
  return (
    <ul className="relative m-0 list-none p-0">
      {NAV.map((item) => (
        <PanelRow key={item.label} item={item} onNavigate={onNavigate} />
      ))}
    </ul>
  )
}
