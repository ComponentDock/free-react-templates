import { cn } from '@free-react-templates/ui'

/**
 * A row inside the sidebar: a block row at 10px/20px padding in ink at 20px type,
 * turning the brand blue on hover and on keyboard focus, and already blue when it
 * is the current destination. The shape language is square — nothing rounds.
 */
export function panelRowClass(current: boolean): string {
  return cn(
    'block py-[10px] px-5 text-[20px] leading-[1.5] transition-colors duration-300 hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
    current ? 'text-brand' : 'text-ink',
  )
}
