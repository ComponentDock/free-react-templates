import { useEffect, useState } from 'react'
import { btnBrand } from '../brand'
import { countdownTarget } from '../data'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: string): TimeLeft {
  const total = Math.max(0, new Date(target).getTime() - Date.now())
  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1_000) % 60),
  }
}

const pad = (value: number) => String(value).padStart(2, '0')

const blocks: { label: string; key: keyof TimeLeft }[] = [
  { label: 'Day', key: 'days' },
  { label: 'Hour', key: 'hours' },
  { label: 'Minute', key: 'minutes' },
  { label: 'Second', key: 'seconds' },
]

export function UpcomingFighter() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(countdownTarget))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(countdownTarget)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="upcoming" className="relative overflow-hidden bg-navy-950 py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-magenta-500/15 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-ember-500">
          Get ready
        </p>
        <h2 className="font-display text-4xl text-white uppercase">Upcoming Fighter</h2>
        <h3 className="mt-8 font-display text-6xl text-white uppercase sm:text-7xl">Dark Dragon</h3>

        <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {blocks.map((block) => (
            <div
              key={block.key}
              className="rounded-lg border border-white/10 bg-navy-900/80 px-4 py-6"
            >
              <dd className="font-display text-5xl text-white">{pad(timeLeft[block.key])}</dd>
              <dt className="mt-2 text-xs font-medium uppercase tracking-widest text-white/60">
                {block.label}
              </dt>
            </div>
          ))}
        </dl>

        <a href="#pricing" className={`${btnBrand} mt-12`}>
          Open
        </a>
      </div>
    </section>
  )
}
