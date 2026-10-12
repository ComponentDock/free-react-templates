import { cn } from '@free-react-templates/ui'

/** The container every band shares: 15px gutters and the source's stepped widths. */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** A top-level row's box: 5px gutters around 10px of vertical padding, with the
 *  row's right padding dropped on the last one, the way the source's own last
 *  child does it. */
export function navRowClass(isLast: boolean): string {
  return cn('inline-block px-[5px] py-[10px]', isLast && 'pr-0')
}

export interface NavLinkOptions {
  /** True once the nav row is pinned: the row's link padding tightens from 20px to 10px. */
  sticky: boolean
  /** The current destination stays fully white in both states. */
  current?: boolean
  /** A row that owns a flyout reserves 20px on the right for its caret. */
  branch?: boolean
}

/**
 * A top-level nav label: 15px at weight 500, 60% white until hover or focus, and
 * fully white when it is the current destination — in the transparent and the
 * pinned state alike.
 */
export function navLinkClass({ sticky, current = false, branch = false }: NavLinkOptions): string {
  return cn(
    'block text-[15px] font-medium whitespace-nowrap transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    sticky ? 'px-[10px] py-[10px]' : 'px-[10px] py-5',
    branch && 'pr-5',
    current ? 'text-white' : 'text-white/60 hover:text-white focus-visible:text-white',
  )
}

export type RowPosition = 'first' | 'last' | 'middle'

/** Where a row sits in its flyout, so the surface's 4px radii land on the ends. */
export function flyoutRowPosition(index: number, total: number): RowPosition {
  if (index === 0) {
    return 'first'
  }
  if (index === total - 1) {
    return 'last'
  }
  return 'middle'
}

/**
 * A flyout row: a 200px-minimum white surface, 14px soft ink, washing to a pale
 * grey with full ink on hover and keyboard focus, and carrying the surface's
 * corner radius only at the two ends.
 */
export function flyoutRowClass(position: RowPosition): string {
  return cn(
    'block px-5 py-[9px] text-[14px] text-ink-soft hover:bg-flyout-hover hover:text-ink focus-visible:bg-flyout-hover focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
    position === 'first' && 'rounded-t-flyout',
    position === 'last' && 'rounded-b-flyout',
  )
}

/** Level 1 rows are 20px with 20px gutters; levels 2 and 3 step in at 16px. */
const PANEL_ROW_DEPTH: Record<number, string> = {
  1: 'px-5 py-[10px] text-[20px]',
  2: 'pr-5 py-[10px] pl-10 text-[16px]',
  3: 'pr-5 py-[10px] pl-[60px] text-[16px]',
}

/**
 * A row inside the off-canvas panel: a block link in ink that turns the brand
 * blue on hover and on keyboard focus, already blue when it is the current
 * destination, stepped in from the left as it goes deeper.
 */
export function panelRowClass(depth: number, current: boolean): string {
  return cn(
    'block transition-colors duration-300 hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
    PANEL_ROW_DEPTH[depth],
    current ? 'text-brand' : 'text-ink',
  )
}
