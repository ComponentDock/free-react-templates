import { panelRowClass } from '../lib/styles'
import type { NavItem } from '../lib/site'

export interface PanelRowProps {
  item: NavItem
  onNavigate: () => void
}

/**
 * One row of the sidebar. This variant is a flat list — no expanders, no
 * sub-levels, no social links — so a row is a single block link that reports the
 * current destination and hands the activation back to the panel.
 */
export function PanelRow({ item, onNavigate }: PanelRowProps) {
  return (
    <li className="block">
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        onClick={onNavigate}
        className={panelRowClass(Boolean(item.current))}
      >
        {item.label}
      </a>
    </li>
  )
}
