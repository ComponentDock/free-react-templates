import { LeadBlock } from './LeadBlock'
import { TwoColumn } from './TwoColumn'
import { bandClass, bandContainerClass, bandRowClass } from '../lib/styles'

/**
 * The band at the head of the content column: one fluid container, edge-to-edge from 768px up,
 * holding a wrapping row of the lead block and the two sub-blocks beside it. Its `24px` head beats
 * the section's own generous padding, which is what lands the heading where the design measures it.
 */
export function ContentBand() {
  return (
    <section className={bandClass} data-testid="band">
      <div className={bandContainerClass}>
        <div className={bandRowClass}>
          <LeadBlock />
          <TwoColumn />
        </div>
      </div>
    </section>
  )
}
