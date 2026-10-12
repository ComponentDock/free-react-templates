import type { RefObject } from 'react'
import { Menu } from 'lucide-react'
import { MENU_ID } from '../lib/site'

export interface MenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The icon-only hamburger that replaces the whole desktop row below 1200px. It is
 * a real button with an accessible name, and it reports the panel's state through
 * `aria-expanded`.
 */
export function MenuToggle({ isOpen, onToggle, toggleRef }: MenuToggleProps) {
  return (
    <button
      ref={toggleRef}
      type="button"
      aria-label="Toggle the site menu"
      aria-expanded={isOpen}
      aria-controls={MENU_ID}
      onClick={onToggle}
      className="block cursor-pointer text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <Menu aria-hidden="true" size={28} />
    </button>
  )
}
