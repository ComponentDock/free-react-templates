import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { CountdownRing } from './CountdownRing'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_CONFIG, pad, resolveTarget } from '../lib/countdown'

export interface CountdownProps {
  className?: string
}

const RINGS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const

/**
 * Four plain white outline rings on one centred row, each holding a big digit
 * over its label. The day value is written raw while the other three are
 * zero-padded, exactly as the design writes them.
 */
export function Countdown({ className }: CountdownProps) {
  const [target] = useState(() => resolveTarget(COUNTDOWN_CONFIG))
  const { days, hours, minutes, seconds } = useCountdown(target)

  const values: Record<(typeof RINGS)[number], string> = {
    Days: String(days),
    Hours: pad(hours),
    Minutes: pad(minutes),
    Seconds: pad(seconds),
  }

  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-[700px] flex-wrap justify-center pt-[116px]',
        className,
      )}
    >
      {RINGS.map((label) => (
        <CountdownRing key={label} label={label} value={values[label]} />
      ))}
    </div>
  )
}
