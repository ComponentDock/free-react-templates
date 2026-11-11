import { COMPONENT_DOCK, FOOTNOTE_LINK_LABEL, FOOTNOTE_PREFIX } from '../data/site'

/**
 * The one-line closing note, 40px under the grid. It wraps to two lines below
 * 620, where the link moves onto the second line by itself.
 */
export function PricingFootnote() {
  return (
    <p className="rc-foot">
      {FOOTNOTE_PREFIX}{' '}
      <a href={COMPONENT_DOCK} target="_blank" rel="noreferrer noopener">
        {FOOTNOTE_LINK_LABEL}
      </a>
    </p>
  )
}
