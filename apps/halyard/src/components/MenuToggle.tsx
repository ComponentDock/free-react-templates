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
 * The hamburger: a real button carrying an accessible name and the drawer's state in
 * `aria-expanded`, parked against the row's right edge and on screen only below
 * 992px — from there the two groups on the bar carry the same six destinations, so
 * the control has nothing left to do and is taken out of the flow entirely rather
 * than left as a second control that would do nothing.
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
