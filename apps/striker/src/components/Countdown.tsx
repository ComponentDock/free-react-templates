import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface TimeLeft {
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  const totalDays = Math.floor(diff / 86_400_000)
  return {
    weeks: Math.floor(totalDays / 7),
    days: totalDays % 7,
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  }
}

function format(value: number): string {
  return String(value).padStart(2, '0')
}

/** Five-unit countdown (weeks · days · hr · min · sec) to a fixed target
 *  date, ticking every second (reference `#date-countdown`). Decorative —
 *  hidden from the accessibility tree so ticks are not announced. */
export function Countdown({ target, className }: { target: string; className?: string }) {
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(new Date(target).getTime()))

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(new Date(target).getTime())), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Weeks', value: left.weeks },
    { label: 'Days', value: left.days },
    { label: 'Hr', value: left.hours },
    { label: 'Min', value: left.minutes },
    { label: 'Sec', value: left.seconds },
  ]

  return (
    <div aria-hidden="true" className={cn('flex items-start gap-6', className)}>
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="text-3xl font-bold text-white lg:text-4xl">{format(value)}</div>
          <div className="mt-1 text-xs font-bold uppercase tracking-widest text-white/60">
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}
