import { containerClass, stripChannelColumnClass, stripColumnClass, stripRowClass } from '../lib/styles'
import { Channels } from './Channels'
import { Wordmark } from './Wordmark'

/**
 * The white brand strip: the design's own row above the bar, riding on the page's
 * `#fafafa` with no surface of its own. Its left half carries the two-line wordmark and
 * its right half the four channel circles, and it measures 72px — the wordmark's 42px
 * lockup plus the 30px of tail under it.
 */
export function BrandStrip() {
  return (
    <div className={containerClass} data-testid="brand-strip">
      <div className={stripRowClass}>
        <div className={stripColumnClass}>
          <Wordmark />
        </div>

        <div className={stripChannelColumnClass}>
          <Channels />
        </div>
      </div>
    </div>
  )
}
