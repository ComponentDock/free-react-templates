import { useEffect, useState } from 'react'

interface TimeUnit {
  label: string
  value: number
}

interface CountdownTimerProps {
  targetDate: string
}

function getTimeLeft(target: Date): TimeUnit[] {
  const now = Date.now()
  const diff = Math.max(0, target.getTime() - now)

  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / 1000 / 60) % 60
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24
  const days = Math.floor(diff / 1000 / 60 / 60 / 24)

  return [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [target] = useState(() => new Date(targetDate))
  const [units, setUnits] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const interval = setInterval(() => {
      setUnits(getTimeLeft(target))
    }, 1000)
    return () => clearInterval(interval)
  }, [target])

  return (
    <div
      className="mt-8 flex flex-wrap items-center justify-center gap-4"
      role="timer"
      aria-label="Countdown timer"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <span className="text-[1.75em] font-bold leading-none text-brand">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-widest text-white/70">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
