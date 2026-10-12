import { BRAND, HOME_HREF } from '../lib/site'
import { overlayBrandClass, overlayBrandHeadingClass } from '../lib/styles'

/**
 * The sheet's wordmark: `40px` at weight `700`, uppercase and tracked `2px`, centred in the column
 * and `24px` clear of the menu below it. The design wraps it in a heading of its own, which is what
 * gives it that tail; the word itself is the app's, never the design's.
 */
export function OverlayBrand() {
  return (
    <h1 className={overlayBrandHeadingClass}>
      <a href={HOME_HREF} className={overlayBrandClass} data-testid="sheet-brand">
        {BRAND}
      </a>
    </h1>
  )
}
