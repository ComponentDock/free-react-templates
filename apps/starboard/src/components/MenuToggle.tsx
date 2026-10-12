import type { RefObject } from 'react'
import { Menu } from 'lucide-react'
import { MENU_ID } from '../lib/site'

export interface MenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The icon-only hamburger, white over the photograph and the page's only
 * navigation control at every width (this variant ships no visible desktop nav
 * row). It is a real button with an accessible name and it reports the sidebar's
 * state through `aria-expanded`. The glyph is a three-bar 28px mark from the icon
 * set, never a copied inline path or icon-font character.
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
      className="block cursor-pointer rounded-none text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <Menu aria-hidden="true" size={28} />
    </button>
  )
}
