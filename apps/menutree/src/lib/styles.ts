import { cn } from '@free-react-templates/ui'

/**
 * A 13px uppercase desktop row link: near-white at 70% over the slate band,
 * turning solid white on hover/focus, and ink with a #007bff hover once the bar
 * has pinned to its white surface.
 */
export function navRowClass(stuck: boolean): string {
  return cn(
    'inline-block px-5 py-5 text-[13px] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2',
    stuck
      ? 'text-ink hover:text-brand focus-visible:text-brand focus-visible:outline-brand'
      : 'text-white/70 hover:text-white focus-visible:text-white focus-visible:outline-white',
  )
}

/** A row inside a white drop-down panel: 9px/20px padding, #eff1f3 hover. */
export const DROPDOWN_ROW_CLASS =
  'block px-5 py-[9px] text-[16px] text-ink transition-colors duration-200 hover:bg-row-hover focus-visible:bg-row-hover focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand'

/** A level-1/2/3 row inside the off-canvas panel (20px / 40px / 60px insets). */
export function mobileRowClass(depth: number): string {
  return cn(
    'block py-[10px] text-ink transition-colors duration-300 hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
    depth === 1 && 'pl-5 text-[20px]',
    depth === 2 && 'pl-10 text-[16px]',
    depth >= 3 && 'pl-[60px] text-[16px]',
  )
}
