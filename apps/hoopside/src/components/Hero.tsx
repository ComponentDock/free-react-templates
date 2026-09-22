import { useState, useEffect, useMemo } from 'react'

interface CountdownValue {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function useCountdown(targetDate: Date): CountdownValue {
  const [time, setTime] = useState<CountdownValue>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime()
      const diff = targetDate.getTime() - now
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}

export function Hero() {
  const targetDate = useMemo(() => new Date('2025-12-31T20:00:00'), [])
  const countdown = useCountdown(targetDate)

  const items = [
    { value: countdown.days, label: 'Days' },
    { value: countdown.hours, label: 'Hours' },
    { value: countdown.minutes, label: 'Minutes' },
    { value: countdown.seconds, label: 'Seconds' },
  ]

  return (
    <section className="relative bg-dark-bg py-32 text-white">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/hoopside-hero/1920/800')] bg-cover bg-center opacity-30" />
      <div className="relative z-10 container mx-auto text-center">
        <p className="mb-4 font-body text-sm uppercase tracking-widest text-gray-400">
          Jun 30, 2025 / 8:00 PM / New York
        </p>
        <h1 className="mb-8 font-heading text-5xl font-bold uppercase leading-tight md:text-6xl">
          National Leagues 2025 Season Begins
        </h1>
        <div className="mb-10 flex justify-center gap-6">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-dark-card">
                <span className="font-heading text-3xl font-bold">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
        <a
          href="#tickets"
          className="inline-block bg-primary px-8 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-primary-dark"
        >
          Book Tickets
        </a>
      </div>
    </section>
  )
}
