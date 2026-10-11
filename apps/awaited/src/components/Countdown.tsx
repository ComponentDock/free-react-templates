import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_UNITS, resolveTarget } from '../lib/countdown'
import { CountdownUnit } from './CountdownUnit'

export interface CountdownProps {
  className?: string
}

/**
 * Four units side by side with no colons, boxes or separators between them.
 * The target is fixed once, on the first paint, so the clock never jumps.
 */
export function Countdown({ className }: CountdownProps) {
  const [target] = useState(() => resolveTarget())
  const values = useCountdown(target)

  return (
    <div
      data-testid="countdown"
      className={cn('flex flex-wrap items-center justify-center', className)}
    >
      {COUNTDOWN_UNITS.map(({ key, label }) => (
        <CountdownUnit key={key} value={values[key]} label={label} />
      ))}
    </div>
  )
}
