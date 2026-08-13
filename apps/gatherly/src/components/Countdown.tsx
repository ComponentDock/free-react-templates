import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'

/** Fixed future target date for the hero countdown (own constant — the
 *  source hardcoded "21 December 2019"; this keeps the demo ticking for
 *  years). */
export const TARGET_DATE = new Date('2027-05-21T09:56:00Z')

interface Remaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getRemaining(target: Date, now: Date): Remaining {
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

const pad = (value: number) => String(value).padStart(2, '0')

const cells = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const

/** Bright-yellow countdown bar (source #timer): four equal cells ticking
 *  down from the fixed TARGET_DATE, each value 0-padded. */
export function Countdown() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1_000)
    return () => clearInterval(id)
  }, [])

  const remaining = getRemaining(TARGET_DATE, now)

  return (
    <div
      data-testid="countdown"
      className="flex w-full bg-accent shadow-[0_-16px_38px_-17px_rgba(0,0,0,0.35)] lg:w-[40%]"
    >
      {cells.map((cell, index) => (
        <div
          key={cell.key}
          className={cn(
            'flex w-1/4 flex-col items-center py-5 text-white',
            index > 0 && 'border-l border-white/20',
          )}
        >
          <span className="text-3xl font-black tabular-nums">{pad(remaining[cell.key])}</span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.15em]">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  )
}
