import { LINE_LABELS } from '../content'
import { LINE_KEYS, formatUsd, type Estimate } from '../pricing'

interface BillLinesProps {
  readonly cost: Estimate['cost']
}

/**
 * The four-line breakdown. Each row leads with a 10 × 10 key in its segment's
 * colour; the key is `aria-hidden` because the label beside it and the amount
 * opposite it already carry the meaning, so nothing here is colour-only.
 */
export function BillLines({ cost }: BillLinesProps) {
  return (
    <dl className="rr-lines">
      {LINE_KEYS.map((key, index) => (
        <div className="rr-line" key={key}>
          <dt>
            <span className={`rr-key rr-key--${key}`} aria-hidden="true" />
            {LINE_LABELS[index]}
          </dt>
          <dd data-line={key}>{formatUsd(cost[key])}</dd>
        </div>
      ))}
    </dl>
  )
}
