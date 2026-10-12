import type { RailRow } from '../lib/site'
import { menuLabelClass, menuRowClass } from '../lib/styles'

export interface MenuRowProps {
  row: RailRow
  /** Every label is a real destination, so following one always ends with the drawer pushed back. */
  onNavigate: () => void
}

/**
 * One label of the rail: a real link with `10px` of padding above and below, resting on black ink —
 * or on the accent coral, with the 2px coral rule held permanently under it, when this is the block
 * the page is standing in. The block it names always exists below the band, so no label is dead.
 */
export function MenuRow({ row, onNavigate }: MenuRowProps) {
  return (
    <li className={menuRowClass}>
      <a
        href={row.href}
        aria-current={row.current ? 'page' : undefined}
        onClick={onNavigate}
        className={menuLabelClass(row.current)}
        data-testid={`rail-row-${row.href.slice(1)}`}
      >
        {row.label}
      </a>
    </li>
  )
}
