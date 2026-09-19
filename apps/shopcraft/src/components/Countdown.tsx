import { useState, useEffect } from 'react'

function getRemaining() {
  const target = new Date()
  target.setDate(target.getDate() + 2)
  target.setHours(target.getHours() + 12)
  target.setMinutes(target.getMinutes() + 45)
  const diff = target.getTime() - Date.now()
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ]

  return (
    <section className="bg-light-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-heading">Exclusive Hot Deal Ends in:</h2>
          <p className="mt-2 text-body">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {units.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="bg-brand px-4 py-3 text-2xl font-bold text-white">
                {String(value).padStart(2, '0')}
              </div>
              <p className="mt-1 text-xs uppercase text-body">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#shop"
            className="inline-block border-2 border-brand bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
