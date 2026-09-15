import { useEffect, useState } from 'react'
import { EVENT_DATE } from '../data'

export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function getCountdown(target: Date, now: Date = new Date()): CountdownParts {
  const diff = Math.max(0, target.getTime() - now.getTime())
  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / 60000) % 60
  const hours = Math.floor(diff / 3600000) % 24
  const days = Math.floor(diff / 86400000)
  return { days, hours, minutes, seconds }
}

const LABELS = [
  { key: 'days' as const, label: 'Days' },
  { key: 'hours' as const, label: 'Hours' },
  { key: 'minutes' as const, label: 'Mins' },
] as const

/* Innovation/Countdown section: bg-gray #f7f7f7 with heading + description
   on the left, countdown boxes + date + Get Ticket link on the right. */

export function InnovationCountdown() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const parts = getCountdown(EVENT_DATE, now)

  return (
    <section id="about" className="bg-[#f7f7f7] py-[100px]">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <h2
            className="text-3xl font-bold uppercase tracking-wide text-[#242424] md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Innovative With Experience UX Design 2025
          </h2>
          <p className="mt-4 text-base font-medium uppercase tracking-wider text-[#ea0763]">
            Our Conference
          </p>
          <p className="mt-4 leading-relaxed text-[#797979]">
            Join us for three days of inspiring talks, hands-on workshops, and networking
            opportunities with the brightest minds in UX design. Discover the latest trends, learn
            new techniques, and connect with fellow professionals who share your passion for
            creating exceptional user experiences.
          </p>
        </div>

        <div>
          <h3
            className="text-2xl font-bold uppercase tracking-wide text-[#242424]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Conference Starts In
          </h3>
          <div className="mt-8 flex flex-wrap gap-4">
            {LABELS.map(({ key, label }) => (
              <div
                key={key}
                className="flex w-[calc(33.333%-12px)] flex-col items-center border-2 border-[#ddd] bg-white py-6"
              >
                <span
                  className="text-4xl font-bold text-[#3b1d82] md:text-5xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {String(parts[key]).padStart(2, '0')}
                </span>
                <span className="mt-2 text-sm font-medium uppercase tracking-wider text-[#797979]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#797979]">20-22 January, 2025, Buffalo City</p>
          <a
            href="#pricing"
            className="mt-4 inline-flex items-center text-sm font-medium uppercase tracking-wider text-[#3b1d82] transition-colors hover:text-[#ea0763]"
          >
            Get Ticket →
          </a>
        </div>
      </div>
    </section>
  )
}
