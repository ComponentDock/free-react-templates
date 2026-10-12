import { MenuRow } from './MenuRow'
import { ROWS } from '../lib/site'
import { menuListClass } from '../lib/styles'

export interface MenuListProps {
  onNavigate: () => void
}

/**
 * The rail's list: the six labels the design stacks down its column, in the design's own order —
 * the current block first, then five plain ones. It is reset to no margin and no markers, so the
 * labels pitch 43px apart and nothing else in the column claims any of that space.
 */
export function MenuList({ onNavigate }: MenuListProps) {
  return (
    <ul className={menuListClass} data-testid="rail-menu">
      {ROWS.map((row) => (
        <MenuRow key={row.href} row={row} onNavigate={onNavigate} />
      ))}
    </ul>
  )
}
