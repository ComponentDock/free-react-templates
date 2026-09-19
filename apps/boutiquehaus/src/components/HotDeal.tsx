import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getInitialTimeLeft(): TimeLeft {
  return { days: 5, hours: 12, minutes: 30, seconds: 0 }
}

export function HotDeal() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getInitialTimeLeft)

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds -= 1
        if (seconds < 0) {
          seconds = 59
          minutes -= 1
        }
        if (minutes < 0) {
          minutes = 59
          hours -= 1
        }
        if (hours < 0) {
          hours = 23
          days -= 1
        }
        if (days < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ] as const

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Exclusive Hot Deal Ends in:</h2>
          <p className="mt-3 text-mist">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {units.map((u) => (
            <div key={u.label} className="text-center">
              <div className="flex h-20 w-20 items-center justify-center bg-ink text-2xl font-bold text-white sm:h-24 sm:w-24 sm:text-3xl">
                {pad(u.value)}
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-mist">
                {u.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#latest"
            className="inline-block bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
