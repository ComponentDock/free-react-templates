import { cn } from '@free-react-templates/ui'
import { DigitTile } from './DigitTile'

export interface CountdownGroupProps {
  /** Full unit name, used as the group's accessible name. */
  label: string
  /** The zero-padded value, one tile per character. */
  value: string
  className?: string
}

/**
 * One countdown unit — a pair of navy tiles reading the value left to right,
 * named for assistive tech (Days · Hours · Minutes · Seconds).
 */
export function CountdownGroup({ label, value, className }: CountdownGroupProps) {
  return (
    <ul
      data-testid="countdown-group"
      aria-label={label}
      className={cn('flex items-center', className)}
    >
      {value.split('').map((digit, index) => (
        <DigitTile key={index} digit={digit} />
      ))}
    </ul>
  )
}
