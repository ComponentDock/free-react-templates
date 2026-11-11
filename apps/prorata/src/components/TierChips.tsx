import { TIERS_LABEL } from '../content'
import { MAX_SEATS, TIERS, formatTotal, seatsInTier } from '../pricing'

interface TierChipsProps {
  readonly seats: number
}

/** `Seats 1–10`, `Seats 11–50`, and the open-ended `Seats 51+`. */
function rangeLabel(min: number, max: number): string {
  return max >= MAX_SEATS ? `Seats ${min}+` : `Seats ${min}–${max}`
}

/**
 * The graduated rate table as three chips. The state is carried by fill *and*
 * border *and* `aria-current`, so the current tier survives a greyscale read;
 * the detail line names the same tier arithmetically as a third channel.
 */
export function TierChips({ seats }: TierChipsProps) {
  return (
    <ol className="pr-tiers" aria-label={TIERS_LABEL}>
      {TIERS.map((tier) => {
        const count = seatsInTier(seats, tier)
        const isCurrent = seats >= tier.min && seats <= tier.max
        const classes = ['pr-tier', count > 0 ? 'pr-tier--used' : '', isCurrent ? 'pr-tier--current' : '']
          .filter(Boolean)
          .join(' ')

        return (
          <li key={tier.min} className={classes} aria-current={isCurrent ? 'true' : undefined}>
            <span className="pr-tier-range">{rangeLabel(tier.min, tier.max)}</span>
            <span className="pr-tier-rate">
              {formatTotal(tier.rate)}
              <span className="pr-tier-per"> / seat</span>
              <span className="pr-tier-per--block" aria-hidden="true">
                per seat
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}
