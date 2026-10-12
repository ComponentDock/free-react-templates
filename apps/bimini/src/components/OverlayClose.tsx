import { CLOSE_LABEL } from '../lib/site'
import { CLOSE_BAR_PARTS, closeBarClass, closeClass, closeGlyphClass } from '../lib/styles'

export interface OverlayCloseProps {
  isVisible: boolean
  onClose: () => void
}

/**
 * The sheet's own way out: a `44 × 44px` control `40px` in from the top and the right, drawn as two
 * crossed `30 × 2px` white bars over a third that is left transparent. It rests invisible and
 * unfocusable until the design's own `900ms` after the sheet opens, so the grow is never covered by
 * chrome. Unlike the design's own text-less anchor it is a real button with a name, and it is
 * operable from the keyboard as soon as it settles in.
 */
export function OverlayClose({ isVisible, onClose }: OverlayCloseProps) {
  return (
    <button
      type="button"
      aria-label={CLOSE_LABEL}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={onClose}
      className={closeClass(isVisible)}
      data-testid="close"
    >
      <span aria-hidden="true" className={closeGlyphClass} data-testid="close-glyph">
        {CLOSE_BAR_PARTS.map((part) => (
          <span key={part} className={closeBarClass(part)} data-testid={`close-bar-${part}`} />
        ))}
      </span>
    </button>
  )
}
