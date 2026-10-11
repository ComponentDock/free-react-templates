import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_CONFIG, pad, resolveTarget } from '../lib/countdown'

export interface CountdownProps {
  className?: string
}

/** Four dark rounded tiles in one wrapping centred row: value above unit label. */
export function Countdown({ className }: CountdownProps) {
  const [target] = useState(() => resolveTarget(COUNTDOWN_CONFIG))
  const { days, hours, minutes, seconds } = useCountdown(target)

  const cells = [
    { label: 'Days', value: String(days) },
    { label: 'Hours', value: pad(hours) },
    { label: 'Minutes', value: pad(minutes) },
    { label: 'Seconds', value: pad(seconds) },
  ]

  return (
    <div
      className={cn('flex min-h-[230px] w-full flex-wrap items-center justify-center', className)}
    >
      {cells.map((cell) => (
        <div
          key={cell.label}
          className={cn(
            'mx-[18px] mb-[25px] flex h-[100px] w-[90px] flex-col items-center justify-center',
            'rounded-tile bg-ink',
          )}
        >
          <span className="pb-[9px] font-heading text-[40px] leading-none font-medium text-white">
            {cell.value}
          </span>
          <span className="font-sans text-[14px] leading-none text-white">{cell.label}</span>
        </div>
      ))}
    </div>
  )
}
