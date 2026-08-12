import { useEffect, useState } from 'react'
import { EVENT_DATE, PILL } from '../data'

export interface CountdownParts {
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

/* Pure breakdown of the remaining time until the target date. */
export function getCountdown(target: Date, now: Date = new Date()): CountdownParts {
  const diff = Math.max(0, target.getTime() - now.getTime())
  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / 60000) % 60
  const hours = Math.floor(diff / 3600000) % 24
  const days = Math.floor(diff / 86400000) % 30
  const months = Math.floor(diff / (86400000 * 30))
  return { months, days, hours, minutes, seconds }
}

const LABELS = [
  { key: 'months', label: 'Months' },
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const

/* About + countdown recreated from the source's about-us-countdown area:
   an intro column (pink subtitle, white uppercase heading, paragraph,
   "Interested" pill) beside a five-box countdown ticking down to the event
   date. */

export function AboutCountdown() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const parts = getCountdown(EVENT_DATE, now)

  return (
    <section id="about" className="bg-navy py-[100px]">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <p className="inline-block border-b-2 border-[#4b4d7b] pb-2 text-sm font-medium uppercase tracking-wider text-brand">
            About Conference
          </p>
          <h3 className="mt-5 text-4xl font-bold uppercase tracking-wide text-white">
            Welcome to the Project Management
          </h3>
          <p className="mt-5 leading-relaxed text-white/80">
            Three days of keynotes, workshops and networking for everyone who ships products for a
            living. Meet the people shaping the future of work, learn new skills in hands-on
            sessions, and leave with ideas you can apply on Monday morning.
          </p>
          <a href="#contact" className={`${PILL} mt-8`}>
            Interested
          </a>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-brand">Conference Date</p>
          <h4 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Count Every Second Until the Event
          </h4>
          <div className="mt-10 flex flex-wrap">
            {LABELS.map(({ key, label }) => (
              <div
                key={key}
                className="mx-[7px] w-[calc(20%-14px)] border-2 border-white/15 py-5 text-center sm:mx-[15px] sm:w-[calc(20%-30px)]"
              >
                <span className="block text-5xl font-semibold text-white md:text-6xl">
                  {String(parts[key]).padStart(2, '0')}
                </span>
                <span className="mt-2 block text-lg font-medium text-tab-active">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
