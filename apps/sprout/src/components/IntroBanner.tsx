import { useState, useEffect } from 'react'
import { upcomingEvent } from '../data'

function getTimeLeft(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function IntroBanner() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(upcomingEvent.targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(upcomingEvent.targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="bg-brand-dark py-20 text-center text-white">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-300">
        Upcoming Events
      </h2>
      <h3 className="mb-8 text-2xl font-bold sm:text-3xl">{upcomingEvent.title}</h3>
      <div className="mx-auto flex max-w-2xl justify-center gap-6 px-4">
        {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            <span
              data-testid={`countdown-${unit}`}
              className="text-3xl font-bold text-brand sm:text-4xl"
            >
              {String(timeLeft[unit]).padStart(2, '0')}
            </span>
            <span className="mt-1 text-xs uppercase tracking-wider text-gray-400">{unit}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
