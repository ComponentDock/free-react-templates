import { BAND_HEADING, BAND_HEADING_ID, BAND_LEAD } from '../lib/site'
import { bandHeadingClass, bandLeadClass, leadBlockClass } from '../lib/styles'

/**
 * The band's lead block: the page's single heading — 32px at weight 400 on a 1.5 line, black — over
 * the lead paragraph, with `24px` of tail under the two of them so the sub-blocks below start where
 * the design puts them. It is the band's first child and the only heading on the page at this size.
 */
export function LeadBlock() {
  return (
    <div className={leadBlockClass} data-testid="lead">
      <h1 id={BAND_HEADING_ID} className={bandHeadingClass}>
        {BAND_HEADING}
      </h1>
      <p className={bandLeadClass}>{BAND_LEAD}</p>
    </div>
  )
}
