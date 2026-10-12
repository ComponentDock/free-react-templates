import { Menu as Bars } from 'lucide-react'
import { PANEL_ID, TOGGLER_ID, TOGGLER_LABEL } from '../lib/site'
import { togglerClass, togglerIconClass } from '../lib/styles'

export interface TogglerProps {
  isOpen: boolean
  onToggle: () => void
}

/**
 * The bar's toggler: a real button, on screen only below 992px, holding a 16px three-bar glyph
 * and a 16px tracked-out uppercase word in the design's own 50% black — dark on the white bar,
 * where the family's black narrow-width siblings need white. It carries the state of the panel it
 * opens in `aria-expanded` and points at that panel through `aria-controls`, and it is the
 * design's third child of the bar, after the wordmark and the search field.
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
