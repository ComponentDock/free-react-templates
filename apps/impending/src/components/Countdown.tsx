import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_UNITS, resolveTarget } from '../lib/countdown'
import { CountdownUnit } from './CountdownUnit'

export interface CountdownProps {
  className?: string
}

/**
 * The clock: a COLUMN at desktop (the family's only vertical one), four bare
 * left-aligned units stacked down the right edge with no colons, boxes, rings
 * or separators. At ≤992px it returns to a centred row. The target is fixed on
 * the first paint so the clock never jumps.
 */
export function Countdown({ className }: CountdownProps) {
  const [target] = useState(() => resolveTarget())
  const values = useCountdown(target)

  return (
    <div
      data-testid="countdown"
      className={cn(
        'flex flex-col flex-wrap pt-[34px]',
        'max-[992px]:flex-row max-[992px]:justify-center max-[992px]:pt-[80px]',
        className,
      )}
    >
      {COUNTDOWN_UNITS.map(({ key, label }) => (
        <CountdownUnit key={key} value={values[key]} label={label} />
      ))}
    </div>
  )
}
