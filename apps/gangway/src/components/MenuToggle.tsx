import type { RefObject } from 'react'
import { Menu } from 'lucide-react'
import { DRAWER_ID, MENU_LABEL, MENU_TOGGLE_ID } from '../lib/site'
import { menuToggleClass } from '../lib/styles'

export interface MenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The hamburger: a real 28 by 42px button with an accessible name and the drawer's
 * state in `aria-expanded`, sitting 8px down and 16px in from the pair. It has nothing
 * to do once the centred list is on screen, so it is hidden from 1200px up rather than
 * left as a second control that would do nothing.
 */
export function MenuToggle({ isOpen, onToggle, toggleRef }: MenuToggleProps) {
  return (
    <button
      ref={toggleRef}
      id={MENU_TOGGLE_ID}
      type="button"
      aria-label={MENU_LABEL}
      aria-expanded={isOpen}
      aria-controls={DRAWER_ID}
      onClick={onToggle}
      className={menuToggleClass}
    >
      <Menu aria-hidden="true" size={28} />
    </button>
  )
}
