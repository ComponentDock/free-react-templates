import { cn } from '@free-react-templates/ui'

export interface CountdownUnitProps {
  /** The number to print: raw days, zero-padded hours/minutes/seconds. */
  value: string
  /** The unit name under the number. */
  label: string
  className?: string
}

/**
 * One clock column: a heavy 120px white number over a small white uppercase
 * label that hangs under the number's LEFT side, not centred.
 */
export function CountdownUnit({ value, label, className }: CountdownUnitProps) {
  const key = label.toLowerCase()

  return (
    <div
      data-testid={`countdown-unit-${key}`}
      className={cn('mb-[30px] flex w-[195px] flex-col items-center', className)}
    >
      <span
        data-testid={`countdown-unit-${key}-value`}
        className="pb-[9px] text-[120px] leading-none font-black text-white uppercase"
      >
        {value}
      </span>
      <span
        data-testid={`countdown-unit-${key}-label`}
        className="self-start pl-[35px] text-[12px] leading-none text-white uppercase"
      >
        {label}
      </span>
    </div>
  )
}
