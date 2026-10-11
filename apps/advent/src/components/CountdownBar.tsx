import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_CONFIG, pad, resolveTarget } from '../lib/countdown'

export interface CountdownBarProps {
  className?: string
}

const CELLS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const

/**
 * One white bar pinned against the very top edge: four hairline-split cells,
 * each stacking a bold number over a tiny uppercase label. Only the bottom two
 * corners are rounded (the top edge is flush).
 */
export function CountdownBar({ className }: CountdownBarProps) {
  const [target] = useState(() => resolveTarget(COUNTDOWN_CONFIG))
  const { days, hours, minutes, seconds } = useCountdown(target)

  const values = [String(days), pad(hours), pad(minutes), pad(seconds)]

  return (
    <div
      className={cn(
        'flex w-[360px] max-w-full flex-wrap items-center justify-center overflow-hidden rounded-b-bar',
        className,
      )}
    >
      {CELLS.map((label, index) => (
        <div
          key={label}
          data-testid={`countdown-cell-${label.toLowerCase()}`}
          className={cn(
            'flex h-[92px] w-[calc((100%_-_3px)/4)] flex-col items-center justify-center bg-white',
            index < 3 ? 'border-r border-divider' : null,
          )}
        >
          <span className="pb-[7px] font-heading text-[36px] leading-none font-bold text-number">
            {values[index]}
          </span>
          <span className="font-heading text-[12px] leading-none text-label uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
