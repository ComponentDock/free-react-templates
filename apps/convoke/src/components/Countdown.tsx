import { useEffect, useState } from 'react'
import { AlarmClock, MapPin } from 'lucide-react'
import { eventInfo, getEventStart } from '../data'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

const labels = ['Days', 'Hours', 'Minutes', 'Seconds'] as const

export function Countdown() {
  const target = getEventStart().getTime()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]

  return (
    <section aria-label="Event details" className="relative z-10 -mt-10 px-4 pb-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 rounded-lg bg-white px-8 py-6 shadow-lg md:grid-cols-3">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 shrink-0 text-rainbow-3" />
          <div>
            <p className="text-sm font-medium capitalize text-heading">{eventInfo.location}</p>
            <p className="text-xs text-body">Venue</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <AlarmClock className="h-5 w-5 shrink-0 text-rainbow-3" />
          <div>
            <p className="text-sm font-medium capitalize text-heading">{eventInfo.dates}</p>
            <p className="text-xs text-body">Event dates</p>
          </div>
        </div>
        <div
          className="flex items-center justify-start gap-4 md:justify-end"
          role="timer"
          aria-label="Countdown to the conference"
        >
          {values.map((value, i) => (
            <div key={labels[i]} className="text-center">
              <span className="block text-2xl font-semibold text-heading" data-value={labels[i]}>
                {String(value).padStart(2, '0')}
              </span>
              <span className="block text-xs capitalize text-body">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
