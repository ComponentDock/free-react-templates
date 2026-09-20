import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function computeTimeLeft(): TimeLeft {
  const now = Date.now()
  const target = new Date(now)
  target.setDate(target.getDate() + 45)
  const diff = target.getTime() - now
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Counter() {
  const [time, setTime] = useState<TimeLeft>(computeTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(computeTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const items = [
    { value: pad(time.days), label: 'Days' },
    { value: pad(time.hours), label: 'Hours' },
    { value: pad(time.minutes), label: 'Minutes' },
    { value: pad(time.seconds), label: 'Seconds' },
  ]

  return (
    <section className="bg-gradient-to-r from-brand to-brand-pink py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
              Conference Date
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              Count Every Second
              <br />
              Until the Event
            </h2>
          </div>
          <div className="flex gap-4 sm:gap-8">
            {items.map((item) => (
              <div key={item.label} className="text-center">
                <div className="rounded-lg bg-white/20 px-4 py-3 font-display text-3xl font-bold text-white backdrop-blur-sm sm:px-6 sm:text-5xl">
                  {item.value}
                </div>
                <span className="mt-2 block text-xs font-medium uppercase tracking-wider text-white/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
