import { cn } from '@free-react-templates/ui'

export interface CountdownRingProps {
  value: string
  label: string
  className?: string
}

/** One 155px hairline circle stacking a big white digit over a small label. */
export function CountdownRing({ value, label, className }: CountdownRingProps) {
  return (
    <div
      data-testid={`countdown-ring-${label.toLowerCase()}`}
      className={cn(
        'mx-[10px] mb-[15px] flex h-[155px] w-[155px] flex-col items-center justify-center',
        'rounded-full border border-ring',
        className,
      )}
    >
      <span className="pb-[9px] font-heading text-[40px] leading-none font-bold text-white">
        {value}
      </span>
      <span className="font-sans text-[12px] leading-none text-white">{label}</span>
    </div>
  )
}
