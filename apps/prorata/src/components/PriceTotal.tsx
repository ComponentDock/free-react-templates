import { PER_LABEL, TOTAL_LABEL } from '../content'
import { DETAIL_TAIL, average, detailLead, formatAverage, formatTotal, total } from '../pricing'

interface PriceTotalProps {
  readonly seats: number
  /** The `<output>`'s id, so the number field can describe itself with it. */
  readonly id: string
}

/**
 * The live total, the `/ month` suffix baseline-aligned to it, and the detail
 * line that itemises the tiers. The detail line grows from one line to two at
 * 51 seats, which is what makes the whole card 22.39px taller there.
 */
export function PriceTotal({ seats, id }: PriceTotalProps) {
  return (
    <div className="pr-total">
      <p className="pr-total-label">{TOTAL_LABEL}</p>

      <p className="pr-sum">
        <output className="pr-amount" id={id} aria-live="off">
          {formatTotal(total(seats))}
        </output>
        <span className="pr-per">{PER_LABEL}</span>
      </p>

      <p className="pr-detail">
        {detailLead(seats)}
        <span className="pr-avg">{formatAverage(average(seats))}</span>
        {DETAIL_TAIL}
      </p>
    </div>
  )
}
