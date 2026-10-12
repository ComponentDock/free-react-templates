import { MenuRow } from './MenuRow'
import { ROWS } from '../lib/site'
import { menuListClass } from '../lib/styles'

export interface MenuListProps {
  onNavigate: () => void
}

/**
 * The sheet's list: the four labels the design stacks down the middle of the cover, in the design's
 * own order — the current block first, then three plain ones. It is reset to no margin and no
 * markers, so the labels pitch `35.2px` apart and nothing else in the column claims that space.
 */
export function MenuList({ onNavigate }: MenuListProps) {
  return (
    <ul className={menuListClass} data-testid="sheet-menu">
      {ROWS.map((row) => (
        <MenuRow key={row.href} row={row} onNavigate={onNavigate} />
      ))}
    </ul>
  )
}
