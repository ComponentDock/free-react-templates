import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_CONFIG, pad, resolveTarget } from '../lib/countdown'

export interface CountdownProps {
  className?: string
}

/** Four white rounded squares in one wrapping centred row: value over label. */
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
    <div className={cn('flex w-full flex-wrap items-center justify-center pb-[82px]', className)}>
      {cells.map((cell) => (
        <div
          key={cell.label}
          className={cn(
            'mx-[18px] mb-[25px] flex h-[90px] w-[90px] flex-col items-center justify-center',
            'rounded-tile bg-white',
          )}
        >
          <span className="pb-[9px] font-heading text-[36px] leading-none font-bold text-number">
            {cell.value}
          </span>
          <span className="font-heading text-[12px] leading-none text-label uppercase">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  )
}
