import { useEffect, useState } from 'react'

/** Fixed event date — December 28, 2032, 2:00 PM. */
const EVENT_DATE = new Date('2032-12-28T14:00:00').getTime()

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
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center rounded-lg border border-white/25 bg-black/25 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5"
        >
          <div className="text-3xl font-semibold tabular-nums text-white sm:text-4xl">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="mt-1 text-[10px] tracking-[0.2em] text-white/80 uppercase sm:text-xs">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  )
}
