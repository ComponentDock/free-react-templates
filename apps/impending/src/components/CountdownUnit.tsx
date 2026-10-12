import { cn } from '@free-react-templates/ui'

export interface CountdownUnitProps {
  /** The number to print: raw days, zero-padded hours/minutes/seconds. */
  value: string
  /** The unit name under the number. */
  label: string
  className?: string
}

/**
 * One clock column: a 60px bold serif number over a 14px italic serif label in
 * sentence case. Both are left-aligned inside the 90px column, so the label
 * hangs under the number's LEFT edge rather than being centred beneath it.
 */
export function CountdownUnit({ value, label, className }: CountdownUnitProps) {
  const key = label.toLowerCase()

  return (
    <div
      data-testid={`countdown-unit-${key}`}
      className={cn(
        'mb-[40px] flex w-[90px] flex-col max-[992px]:mx-[15px] max-[992px]:items-center',
        className,
      )}
    >
      <span
        data-testid={`countdown-unit-${key}-value`}
        className="pb-[30px] font-heading text-[60px] leading-none font-bold text-white"
      >
        {value}
      </span>
      <span
        data-testid={`countdown-unit-${key}-label`}
        className="font-heading text-[14px] leading-none text-white italic"
      >
        {label}
      </span>
    </div>
  )
}
