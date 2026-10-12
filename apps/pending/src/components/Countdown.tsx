import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { pad, type Remaining } from '../lib/countdown'

/** The four units, in design order, and whether their value is zero-padded. */
const UNITS: readonly { key: keyof Remaining; label: string; padded: boolean }[] = [
  { key: 'days', label: 'Days', padded: false },
  { key: 'hours', label: 'Hr', padded: true },
  { key: 'minutes', label: 'Min', padded: true },
  { key: 'seconds', label: 'Sec', padded: true },
]

export interface CountdownProps {
  className?: string
}

/**
 * The four-unit countdown: wide digits and small baseline-aligned labels sitting
 * inside the top bar — the days print unpadded while hours, minutes and seconds
 * are zero-padded, and every digit keeps a fixed minimum width so the ticking
 * row never jitters.
 */
export function Countdown({ className }: CountdownProps) {
  const time = useCountdown()

  return (
    <div
      data-testid="countdown"
      className={cn('flex flex-wrap pt-[15px] pb-[15px] pr-[36px]', className)}
    >
      {UNITS.map(({ key, label, padded }) => (
        <div
          key={key}
          data-testid={`countdown-${key}`}
          className="my-[8px] mr-[22px] flex flex-wrap items-end"
        >
          <span
            data-testid={`countdown-${key}-value`}
            className="min-w-[46px] font-sans text-[30px] leading-none text-white"
          >
            {padded ? pad(time[key]) : String(time[key])}
          </span>
          <span
            data-testid={`countdown-${key}-label`}
            className="block pb-[2px] font-sans text-[18px] leading-none text-white"
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
