import { cn } from '@free-react-templates/ui'
import { SHOP } from '../content'
import { BagIcon } from './icons'

interface BagChipProps {
  count: number
  bumped: boolean
}

/**
 * A counter that looks like a control but is not one: a `<p>`, no handler, no
 * cart behind it. The disc bumps to 125% for 250ms on every change.
 */
export function BagChip({ count, bumped }: BagChipProps) {
  return (
    <p className="m-0 inline-flex items-center gap-2 rounded-full bg-surface py-[10px] pl-4 pr-[14px] text-[15px] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
      <BagIcon className="h-[18px] w-[18px] flex-none" />
      {SHOP.chipLabel}
      <span
        data-testid="bag-count"
        className={cn(
          'inline-grid box-content h-6 min-w-6 place-items-center rounded-full bg-ink px-[7px] text-[13px] font-bold text-white transition-transform duration-[250ms] ease-out',
          bumped && 'scale-125',
        )}
      >
        {count}
      </span>
    </p>
  )
}
