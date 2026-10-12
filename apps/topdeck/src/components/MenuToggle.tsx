import type { RefObject } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { MENU_ID } from '../lib/site'

export interface MenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
  /** Extra layout classes from the nav row it sits in. */
  className?: string
}

/**
 * The hamburger that opens the off-canvas panel. It is a real button with an
 * accessible name, it reports the panel's state through `aria-expanded`, and it
 * keeps the source's generous vertical click target around a 28px three-bar mark
 * from the icon set. It is only useful below 992px — above that the seven-item nav
 * row is visible — so it is hidden there rather than left as a second control that
 * does nothing.
 */
export function MenuToggle({ isOpen, onToggle, toggleRef, className }: MenuToggleProps) {
  return (
    <button
      ref={toggleRef}
      type="button"
      aria-label="Toggle the site menu"
      aria-expanded={isOpen}
      aria-controls={MENU_ID}
      onClick={onToggle}
      className={cn(
        'block cursor-pointer py-4 text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
        className,
      )}
    >
      <Menu aria-hidden="true" size={28} />
    </button>
  )
}
