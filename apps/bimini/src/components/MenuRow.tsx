import type { MenuRowModel } from '../lib/site'
import { menuLabelClass, menuLabelTextClass, menuRowClass } from '../lib/styles'

export interface MenuRowProps {
  row: MenuRowModel
  /** Every label is a real destination, so following one always ends with the sheet taken down. */
  onNavigate: () => void
}

/**
 * One label of the sheet: a real link with `5px` of air above and below it, resting on white — or on
 * the design's own gold, with the amber hairline held permanently under it, when this is the block
 * the page is standing in. The block it names always exists below the hero, so no label is dead.
 */
export function MenuRow({ row, onNavigate }: MenuRowProps) {
  return (
    <li className={menuRowClass} data-testid={`row-${row.href.slice(1)}`}>
      <a
        href={row.href}
        aria-current={row.current ? 'page' : undefined}
        onClick={onNavigate}
        className={menuLabelClass(row.current)}
      >
        <span className={menuLabelTextClass}>{row.label}</span>
      </a>
    </li>
  )
}
