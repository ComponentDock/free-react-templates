import { useEffect, useState } from 'react'

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

const TARGET = Date.now() + 30 * 86400000 // 30 days from now

export function Countdown() {
  const [time, setTime] = useState<TimeLeft>(() => calcTimeLeft(TARGET))

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft(TARGET)), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ] as const

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Election is knocking at door</h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Every vote counts. Prepare yourself for the upcoming election and make your voice heard.
            Together we can build a stronger future for our nation.
          </p>
        </div>
        <div className="flex justify-center gap-4 sm:justify-end">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-brand text-white shadow-lg sm:h-28 sm:w-28"
            >
              <span className="text-2xl font-bold sm:text-3xl">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider sm:text-xs">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
