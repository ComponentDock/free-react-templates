import { cn } from '@free-react-templates/ui'

export interface CountdownUnitProps {
  label: string
  value: string
  className?: string
}

/**
 * One 100px unit: a big thin white digit with 4px below it over a small italic
 * serif label in sentence case.
 */
export function CountdownUnit({ label, value, className }: CountdownUnitProps) {
  return (
    <div
      data-testid={`countdown-unit-${label.toLowerCase()}`}
      className={cn('mb-[20px] flex w-[100px] flex-col items-center justify-center', className)}
    >
      <span className="pb-[4px] font-sans text-[70px] leading-none font-light text-white">
        {value}
      </span>
      <span className="font-serif text-[18px] leading-none text-white italic">{label}</span>
    </div>
  )
}
