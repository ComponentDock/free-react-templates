import type { RefObject } from 'react'
import { RAIL_ID, TOGGLE_ID, TOGGLE_LABEL } from '../lib/site'
import { BAR_PARTS, barClass, burgerClass, toggleClass } from '../lib/styles'

export interface NavToggleProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The burger: a real button, fixed against the page's left edge and on screen only below 992px. Its
 * glyph is drawn in the sheet's own three 30 × 2 black bars rather than an icon font — no asset is
 * copied either way — and it carries the state of the rail it moves in `aria-expanded`, points at
 * that rail through `aria-controls`, and names itself for the screen, which the design only ever
 * did at runtime.
 */
export function NavToggle({ isOpen, onToggle, toggleRef }: NavToggleProps) {
  return (
    <button
      id={TOGGLE_ID}
      ref={toggleRef}
      type="button"
      aria-label={TOGGLE_LABEL}
      aria-expanded={isOpen}
      aria-controls={RAIL_ID}
      onClick={onToggle}
      className={toggleClass(isOpen)}
      data-testid="toggle"
    >
      <span aria-hidden="true" className={burgerClass} data-testid="burger">
        {BAR_PARTS.map((part) => (
          <span key={part} className={barClass(part, isOpen)} data-testid={`bar-${part}`} />
        ))}
      </span>
    </button>
  )
}
