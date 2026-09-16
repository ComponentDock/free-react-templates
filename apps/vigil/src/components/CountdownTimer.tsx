import { useState, useEffect, useCallback } from 'react'

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  mins: number
  secs: number
}

function calculateTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ label, value }: { label: string; value: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-white shadow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`text-[2em] font-medium transition-colors ${
          hovered ? 'text-brand-pink-hover' : 'text-brand-pink'
        }`}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[0.9em] font-semibold text-gray-800">{label}</span>
    </div>
  )
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate))

  const tick = useCallback(() => {
    setTimeLeft(calculateTimeLeft(targetDate))
  }, [targetDate])

  useEffect(() => {
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [tick])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.mins },
    { label: 'Sec', value: timeLeft.secs },
  ]

  return (
    <div className="flex justify-center gap-2.5" role="timer" aria-label="Countdown timer">
      {units.map(({ label, value }) => (
        <CountdownUnit key={label} label={label} value={value} />
      ))}
    </div>
  )
}
