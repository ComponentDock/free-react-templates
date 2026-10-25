import { ClockIcon } from './ClockIcon'

interface ReadTimeProps {
  label: string
}

/**
 * The 114 × 29.6 pill at the right edge of a card's meta strip: 4px/10px
 * padding around 13.5px text, a 6px gap to the clock, and `nowrap` so the
 * label never breaks. Its line-height is inherited from the card (1.6).
 */
export function ReadTime({ label }: ReadTimeProps) {
  return (
    <span className="inline-flex items-center gap-[6px] whitespace-nowrap rounded-full bg-pill px-[10px] py-[4px] font-medium text-pill-ink">
      <ClockIcon />
      {label}
    </span>
  )
}
