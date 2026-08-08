import { useEffect, useState } from 'react'

/** Fixed event date — September 18, 2026, 9:00 AM PT. */
const EVENT_DATE = new Date('2026-09-18T09:00:00-07:00').getTime()

const DAY_MS = 86_400_000
const HOUR_MS = 3_600_000
const MINUTE_MS = 60_000
const SECOND_MS = 1_000

export function Countdown() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const diff = Math.max(0, EVENT_DATE - now)
  const days = Math.floor(diff / DAY_MS)
  const hours = Math.floor((diff % DAY_MS) / HOUR_MS)
  const minutes = Math.floor((diff % HOUR_MS) / MINUTE_MS)
  const seconds = Math.floor((diff % MINUTE_MS) / SECOND_MS)

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Mins', value: minutes },
    { label: 'Secs', value: seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="rounded-2xl border border-gray-700 bg-gray-900 px-4 py-3 text-center sm:px-6"
        >
          <div className="font-display text-2xl font-bold text-white sm:text-3xl">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="mt-1 text-xs uppercase tracking-widest text-gray-400">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}
