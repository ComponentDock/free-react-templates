import { useEffect, useMemo, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface CountdownProps {
  className?: string
  targetDate: Date
}

function calcTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown({ className, targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds],
  )

  return (
    <section className={cn('py-16 bg-heading text-white', className)}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-medium mb-8">Next Event Starts In</h2>
        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((u) => (
            <div key={u.label} className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand rounded-[5px] flex items-center justify-center mb-2">
                <span className="font-hero text-3xl md:text-4xl font-bold">
                  {String(u.value).padStart(2, '0')}
                </span>
              </div>
              <span className="font-utility text-sm text-muted-light">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
