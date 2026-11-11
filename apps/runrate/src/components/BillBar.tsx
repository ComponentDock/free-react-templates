import { LINE_KEYS, type Estimate } from '../pricing'

interface BillBarProps {
  readonly cost: Estimate['cost']
}

/**
 * The four-segment bar. Each segment's `flex-grow` is its raw dollar amount, not
 * a percentage of the total, which is what the reference does — the split is
 * identical either way, but only `flex-grow` animates the `.35s` transition and
 * lets a zero-priced line collapse to nothing. The bar is decoration: the same
 * four numbers are printed beside it.
 */
export function BillBar({ cost }: BillBarProps) {
  return (
    <div className="rr-bar" aria-hidden="true">
      {LINE_KEYS.map((key) => (
        <span
          key={key}
          className={`rr-seg rr-seg--${key}`}
          style={{ flexGrow: cost[key] }}
          data-segment={key}
        />
      ))}
    </div>
  )
}
