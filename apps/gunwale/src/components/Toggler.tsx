import { Menu as Bars } from 'lucide-react'
import { PANEL_ID, TOGGLER_ID, TOGGLER_LABEL } from '../lib/site'
import { togglerClass, togglerIconClass } from '../lib/styles'

export interface TogglerProps {
  isOpen: boolean
  onToggle: () => void
}

/**
 * The bar's toggler: a real button, on screen only below 992px, holding a 16px three-bar
 * glyph and a 16px tracked out uppercase word in the same 50% white. It keeps the state
 * of the panel it opens in `aria-expanded` and points at the panel through
 * `aria-controls`. The design removes every outline on this control; the focus ring it
 * keeps in its place is a documented delta.
 */
export function Toggler({ isOpen, onToggle }: TogglerProps) {
  return (
    <button
      id={TOGGLER_ID}
      type="button"
      aria-expanded={isOpen}
      aria-controls={PANEL_ID}
      onClick={onToggle}
      className={togglerClass}
    >
      <Bars aria-hidden="true" size={16} className={togglerIconClass} />
      {TOGGLER_LABEL}
    </button>
  )
}
