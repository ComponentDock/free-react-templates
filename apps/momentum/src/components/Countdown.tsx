import { useEffect, useState } from 'react'
import { countdown } from '../data'

interface Remaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  ended: boolean
}

function getRemaining(target: string): Remaining {
  const diff = Date.parse(target) - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }
  }
  const total = Math.floor(diff / 1000)
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    ended: false,
  }
}

const units = [
  { key: 'days', label: countdown.labels[0] },
  { key: 'hours', label: countdown.labels[1] },
  { key: 'minutes', label: countdown.labels[2] },
  { key: 'seconds', label: countdown.labels[3] },
] as const

function format(value: number) {
  return String(value).padStart(2, '0')
}

export function Countdown() {
  const [remaining, setRemaining] = useState(() => getRemaining(countdown.target))

  useEffect(() => {
    const id = window.setInterval(() => {
      const next = getRemaining(countdown.target)
      setRemaining(next)
      if (next.ended) {
        window.clearInterval(id)
      }
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="countdown" className="bg-dark py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-[11px] font-bold tracking-[.1rem] text-white/70 uppercase">
          {countdown.kicker}
        </span>
        <h2 className="mt-2 text-5xl leading-none font-bold text-white md:text-[80px]">
          {countdown.title}
        </h2>

        {remaining.ended ? (
          <p role="alert" className="mt-16 text-2xl text-white/70">
            {countdown.endedMessage}
          </p>
        ) : (
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-10 md:grid-cols-4">
            {units.map((unit) => (
              <div key={unit.key} className="text-center">
                <span
                  data-unit={unit.key}
                  className="block text-[40px] leading-none font-bold text-white md:text-[90px]"
                >
                  {format(remaining[unit.key])}
                </span>
                <span className="mt-4 block text-xs font-bold tracking-[.2rem] text-white/30 uppercase">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <a
          href="#services"
          className="mt-16 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-pink px-8 py-4 text-xs font-bold tracking-[.2rem] text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {countdown.ctaLabel}
        </a>
      </div>
    </section>
  )
}
