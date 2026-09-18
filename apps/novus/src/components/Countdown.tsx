import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const [now, setNow] = useState(Date.now)

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, targetDate.getTime() - now)
  const timeLeft: TimeLeft = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-6" role="timer" aria-label="Countdown timer">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border-2 border-brand-cyan/30 bg-white/5"
        >
          <span
            className="text-[2.5rem] font-bold leading-none text-brand-cyan"
            aria-label={`${value} ${label.toLowerCase()}`}
          >
            {String(value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-xs uppercase tracking-wider text-muted">{label}</span>
        </div>
      ))}
    </div>
  )
}
