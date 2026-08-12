import { useEffect, useMemo, useState } from 'react'
import { countdownOffsetMs } from '../data'

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
    <section aria-label="Event countdown" className="relative z-20 -mt-16 pb-24">
      <div className="mx-auto max-w-4xl rounded-md bg-white px-8 py-10 shadow-[0_8px_30px_0_rgba(153,153,153,0.1)] md:px-12 md:py-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-heading">
              Next Event will Start in
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid w-full max-w-md grid-cols-4 gap-2">
            {units.map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="font-display text-4xl font-bold text-heading">{unit.value}</div>
                <div className="mt-1 text-sm text-muted">{unit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
