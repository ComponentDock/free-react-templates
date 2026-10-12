import { cn } from '@free-react-templates/ui'

export interface CountdownUnitProps {
  /** The number to print: raw days, zero-padded hours/minutes/seconds. */
  value: string
  /** The unit name under the number. */
  label: string
  className?: string
}

/**
 * One clock column: a 120px italic serif number over an 18px italic serif label.
 * The label carries 20px of right padding, which widens its box so the centred
 * text drifts slightly left of the number's axis — the small offset the design
 * shows under each digit group.
 */
export function CountdownUnit({ value, label, className }: CountdownUnitProps) {
  const key = label.toLowerCase()

  return (
    <div
      data-testid={`countdown-unit-${key}`}
      className={cn('mb-[30px] flex min-w-[165px] flex-col items-center', className)}
    >
      <span
        data-testid={`countdown-unit-${key}-value`}
        className="pb-[37px] font-heading text-[120px] leading-none text-white uppercase italic"
      >
        {value}
      </span>
      <span
        data-testid={`countdown-unit-${key}-label`}
        className="pr-[20px] font-heading text-[18px] leading-none text-white italic"
      >
        {label}
      </span>
    </div>
  )
}
