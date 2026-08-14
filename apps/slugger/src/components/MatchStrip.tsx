import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { countdownTarget, league, teams } from '../data'

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

const units: { label: string; key: keyof TimeLeft }[] = [
  { label: 'Days', key: 'days' },
  { label: 'Hours', key: 'hours' },
  { label: 'Minutes', key: 'minutes' },
  { label: 'Seconds', key: 'seconds' },
]

export function MatchStrip() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(countdownTarget))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(countdownTarget)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-label="Upcoming match" className="bg-dark py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-center gap-5">
          <img
            src="https://picsum.photos/seed/slugger-home/96/96"
            alt=""
            className="h-16 w-16 rounded-full border-2 border-white/20 object-cover"
          />
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold uppercase text-white">{teams.home}</h3>
            <span className="my-1 block text-sm font-semibold uppercase text-white/60">vs</span>
            <h3 className="font-display text-2xl font-bold uppercase text-white">{teams.away}</h3>
          </div>
          <img
            src="https://picsum.photos/seed/slugger-away/96/96"
            alt=""
            className="h-16 w-16 rounded-full border-2 border-white/20 object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="font-display text-xl font-semibold uppercase text-white/50">
            {league.name}
          </h3>
          <p className="mt-1 text-sm uppercase tracking-widest text-white/70">{league.round}</p>
          <dl className="mt-4 flex divide-x divide-white/10">
            {units.map((unit) => (
              <div key={unit.key} className="w-20 px-2">
                <dd className="font-display text-3xl font-semibold text-white">
                  {pad(timeLeft[unit.key])}
                </dd>
                <dt className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  {unit.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
        <ButtonLink
          href="#games"
          className="rounded bg-brand px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-black"
        >
          Buy Tickets
        </ButtonLink>
      </div>
    </section>
  )
}
