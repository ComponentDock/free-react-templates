import { cn } from '@free-react-templates/ui'

export interface CountdownSeparatorProps {
  /** Where the colon sits in the row: the middle one drops out earlier. */
  position?: 'outer' | 'middle'
  className?: string
}

/**
 * A colon between two clock units, set in the numerals' own 120px italic serif
 * and nudged 15px down so it sits on their optical centre line. The MIDDLE colon
 * disappears first (at ≤992px) and the OUTER two at ≤576px, matching the row as
 * it wraps to two and then one unit per line.
 */
export function CountdownSeparator({ position = 'outer', className }: CountdownSeparatorProps) {
  return (
    <span
      data-testid={`countdown-separator-${position}`}
      aria-hidden="true"
      className={cn(
        'pt-[15px] font-heading text-[120px] leading-none text-white italic',
        position === 'middle' ? 'max-[992px]:hidden' : 'max-[576px]:hidden',
        className,
      )}
    >
      :
    </span>
  )
}
