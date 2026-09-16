import { useState, useEffect } from 'react'
import { Clock, MapPin, User } from 'lucide-react'

interface CountdownValue {
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcCountdown(targetDate: Date): CountdownValue {
  const diff = Math.max(0, targetDate.getTime() - Date.now())
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  return {
    weeks: Math.floor(totalDays / 7),
    days: totalDays % 7,
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const COUNTDOWN_TARGET = new Date('2027-12-25T09:30:00')

export function UpcomingEvents() {
  const [countdown, setCountdown] = useState<CountdownValue>(() => calcCountdown(COUNTDOWN_TARGET))

  useEffect(() => {
    const tick = () => setCountdown(calcCountdown(COUNTDOWN_TARGET))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units: [string, number][] = [
    ['Weeks', countdown.weeks],
    ['Days', countdown.days],
    ['Hours', countdown.hours],
    ['Min', countdown.minutes],
    ['Sec', countdown.seconds],
  ]

  return (
    <section className="border-b border-dark-border bg-dark py-12" aria-label="Upcoming events">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="md:w-1/2">
            <span className="mb-4 inline-block bg-brand px-4 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Upcoming Events
            </span>
            <h2 className="mb-4 font-heading text-xl text-white">
              <a href="#" className="transition-opacity hover:opacity-80">
                We must walk in the middle of the road.
              </a>
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.1em] text-white/50">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> Saturday 03/09/2018 09:30 AM
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> St. Petersburg, US
              </span>
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" /> Pastor Luis Matthew
              </span>
            </div>
          </div>

          <div className="flex md:w-1/2">
            {units.map(([label, value], i) => (
              <div
                key={label}
                className="relative flex flex-1 flex-col items-center bg-brand px-3 py-5 text-white"
              >
                <span className="text-2xl font-bold">{value}</span>
                <span className="mt-1 text-[11px] uppercase tracking-wider">{label}</span>
                {i < units.length - 1 && (
                  <div className="absolute top-0 right-0 h-full w-px bg-dark" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
