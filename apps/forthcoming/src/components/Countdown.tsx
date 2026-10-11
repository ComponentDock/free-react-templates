import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Colon } from './Colon'
import { CountdownUnit } from './CountdownUnit'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_CONFIG, pad, resolveTarget } from '../lib/countdown'

export interface CountdownProps {
  className?: string
}

/**
 * The clock inside its thin square-cornered frame: four 100px units separated
 * by three full-size colons, in day-to-second order. The day value is written
 * raw while the other three are zero-padded, exactly as the design writes them,
 * and only the SECOND colon drops out on narrow screens.
 */
export function Countdown({ className }: CountdownProps) {
  const [target] = useState(() => resolveTarget(COUNTDOWN_CONFIG))
  const { days, hours, minutes, seconds } = useCountdown(target)

  return (
    <div
      data-testid="countdown"
      className={cn(
        'flex flex-wrap items-center justify-around',
        'border-2 border-box-border px-[50px] pt-[42px] pb-[22px]',
        'max-[768px]:mx-auto max-[768px]:max-w-[340px] max-[768px]:px-[15px]',
        className,
      )}
    >
      <CountdownUnit label="Days" value={String(days)} />
      <Colon />
      <CountdownUnit label="Hours" value={pad(hours)} />
      <Colon className="max-[768px]:hidden" />
      <CountdownUnit label="Minutes" value={pad(minutes)} />
      <Colon />
      <CountdownUnit label="Seconds" value={pad(seconds)} />
    </div>
  )
}
