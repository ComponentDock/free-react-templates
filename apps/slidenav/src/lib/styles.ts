import { cn } from '@free-react-templates/ui'

/**
 * A 15px row link: near-white at 70% over the coral band, turning solid white on
 * hover/focus, with a 1px white bar pinned to its own bottom edge (the link's own
 * padding keeps it off the header's edge) that scales in from zero over .3s and
 * ships already scaled up on the current item.
 */
export function navRowClass(current: boolean): string {
  return cn(
    'relative mx-[15px] inline-block px-0 py-5 text-[15px] leading-normal text-white/70 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
    'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[ease]',
    'hover:text-white hover:after:scale-x-100 focus-visible:text-white focus-visible:after:scale-x-100',
    current && 'text-white after:scale-x-100',
  )
}

/**
 * A row inside the off-canvas panel: 10px/20px padding, ink text turning coral on
 * hover/focus, with the current row already coral.
 */
export function panelRowClass(current: boolean): string {
  return cn(
    'block px-5 py-[10px] text-[20px] text-ink transition-colors duration-300 hover:text-band focus-visible:text-band focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-band',
    current && 'text-band',
  )
}
