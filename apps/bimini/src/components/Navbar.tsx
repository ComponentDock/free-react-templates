import type { RefObject } from 'react'
import { Container } from './Container'
import { BRAND, HOME_HREF, SHEET_ID, TOGGLE_ID, TOGGLE_LABEL } from '../lib/site'
import { BAR_PARTS, barClass, brandClass, burgerClass, headerClass, headerRowClass, toggleClass } from '../lib/styles'

export interface NavbarProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The header the sheet is opened from: absolute against the top of the page, `32px` of padding above
 * and below on a wide viewport, holding the wordmark at one end and the burger at the other. The
 * burger is a real button — the design draws it as three `#fff` bars with no word at all — and it
 * carries the state of the sheet it opens in `aria-expanded`, points at that sheet through
 * `aria-controls` and names itself for the screen, all of which are deltas.
 */
export function Navbar({ isOpen, onToggle, toggleRef }: NavbarProps) {
  return (
    <header className={headerClass} data-testid="header">
      <Container>
        <div className={headerRowClass}>
          <a href={HOME_HREF} className={brandClass}>
            {BRAND}
          </a>

          <button
            id={TOGGLE_ID}
            ref={toggleRef}
            type="button"
            aria-label={TOGGLE_LABEL}
            aria-expanded={isOpen}
            aria-controls={SHEET_ID}
            onClick={onToggle}
            className={toggleClass()}
            data-testid="toggle"
          >
            <span aria-hidden="true" className={burgerClass} data-testid="burger">
              {BAR_PARTS.map((part) => (
                <span key={part} className={barClass(part)} data-testid={`bar-${part}`} />
              ))}
            </span>
          </button>
        </div>
      </Container>
    </header>
  )
}
