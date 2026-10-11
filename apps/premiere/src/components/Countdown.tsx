import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_CONFIG, pad, resolveTarget } from '../lib/countdown'

export interface CountdownProps {
  className?: string
}

/** Four translucent circles: white numbers above purple unit labels. */
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
    <div className={cn('flex flex-wrap items-center justify-center pb-[33px]', className)}>
      {cells.map((cell) => (
        <div
          key={cell.label}
          className={cn(
            'mx-[15px] mb-[20px] flex size-[155px] flex-col items-center justify-center',
            'rounded-full border border-white/30',
          )}
        >
          <span className="pb-[9px] font-lato text-[40px] leading-none font-bold text-white">
            {cell.value}
          </span>
          <span className="font-lato text-[12px] leading-none text-brand uppercase">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  )
}
