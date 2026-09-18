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
    <div className="flex flex-wrap justify-center gap-5" role="timer" aria-label="Countdown timer">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.4)]"
        >
          <span
            className="text-[3rem] font-medium leading-none text-brand-pink"
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
