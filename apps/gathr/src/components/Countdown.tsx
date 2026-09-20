import { useState, useEffect } from 'react'
import { cn } from '@free-react-templates/ui'

function getTimeLeft(target: Date) {
  const now = new Date().getTime()
  const diff = target.getTime() - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const targetDate = new Date('2026-03-15T09:00:00')

const units = ['Days', 'Hours', 'Minutes', 'Seconds'] as const

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]

  return (
    <section className={cn('relative py-20', 'bg-[#18181c] text-white')}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/gathr-countdown/1920/600)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Countdown to the big event</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {units.map((unit, i) => (
            <div key={unit} className="flex flex-col items-center">
              <span
                className={cn('text-5xl font-bold tabular-nums md:text-7xl', 'text-white')}
                aria-label={`${values[i]} ${unit}`}
              >
                {String(values[i]).padStart(2, '0')}
              </span>
              <span className="mt-2 text-sm uppercase tracking-widest text-gray-400">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
