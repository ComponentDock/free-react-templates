import { useEffect, useMemo, useState } from 'react'
import { Calendar } from 'lucide-react'
import {
  countdownEventLine,
  countdownEventTitle,
  countdownHeading,
  countdownOffsetMs,
} from '../data'

export function Countdown() {
  const target = useMemo(() => Date.now() + countdownOffsetMs, [])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const diff = Math.max(0, target - now)
  const units = [
    { label: 'days', value: Math.floor(diff / 86_400_000) },
    { label: 'hours', value: Math.floor((diff % 86_400_000) / 3_600_000) },
    { label: 'Minutes', value: Math.floor((diff % 3_600_000) / 60_000) },
    { label: 'seconds', value: Math.floor((diff % 60_000) / 1000) },
  ]

  return (
    <section aria-label="Next event countdown" className="bg-brand py-[100px]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center text-white lg:text-left">
          <h3 className="text-3xl font-semibold">{countdownEventTitle}</h3>
          <p className="mt-3 inline-flex items-center gap-2 text-white/90">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {countdownEventLine}
          </p>
        </div>
        <div className="text-center text-white">
          <h4 className="mb-5 text-lg font-semibold">{countdownHeading}</h4>
          <div className="grid grid-cols-4 bg-white/30 px-4 py-[27px]">
            {units.map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="text-4xl font-semibold leading-[45px]">{unit.value}</div>
                <div className="text-sm leading-[22px] capitalize">{unit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
