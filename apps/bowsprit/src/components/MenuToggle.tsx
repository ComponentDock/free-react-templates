import type { RefObject } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { MENU_ID, MENU_LABEL, MENU_TOGGLE_ID } from '../lib/site'

export interface MenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The narrow bar's hamburger: a real 56x40px button with an accessible name, a 1px
 * translucent hairline and a 4px radius around a 30px three-bar mark, reporting the
 * list's state through `aria-expanded`. It is only useful below 768px — from there
 * the row is on screen — so it is hidden at that width rather than left as a second
 * control that would do nothing.
 */
export function MenuToggle({ isOpen, onToggle, toggleRef }: MenuToggleProps) {
  return (
    <button
      ref={toggleRef}
      id={MENU_TOGGLE_ID}
      type="button"
      aria-label={MENU_LABEL}
      aria-expanded={isOpen}
      aria-controls={MENU_ID}
      onClick={onToggle}
      className={cn(
        'flex h-10 w-14 shrink-0 cursor-pointer items-center justify-center rounded-flyout border border-white/10 px-3 py-1 text-[20px] text-white/50',
        'transition-colors duration-300 hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden',
      )}
    >
      <Menu aria-hidden="true" size={30} />
    </button>
  )
}
