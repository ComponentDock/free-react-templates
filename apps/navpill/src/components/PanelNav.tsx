import { NAV } from '../lib/site'
import { PanelRow } from './PanelRow'

/** The panel's rows, rendered from the same item model as the desktop row. */
export function PanelNav() {
  return (
    <ul className="relative m-0 list-none p-0">
      {NAV.map((node) => (
        <PanelRow key={node.label} node={node} level={1} />
      ))}
    </ul>
  )
}
