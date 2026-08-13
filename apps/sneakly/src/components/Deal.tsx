import { useEffect, useMemo, useState } from 'react'
import { deal } from '../data'

const DAY_MS = 24 * 60 * 60 * 1000
const HOUR_MS = 60 * 60 * 1000
const MINUTE_MS = 60 * 1000

export interface TimeLeft {
  days: string
  hours: string
  minutes: string
  seconds: string
}

/** Two-digit padded time remaining until `target` (clamped at zero — the
 *  cells never go negative). Pure so it is directly unit-testable. */
export function getTimeLeft(target: number, now: number = Date.now()): TimeLeft {
  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / DAY_MS)
  const hours = Math.floor((diff % DAY_MS) / HOUR_MS)
  const minutes = Math.floor((diff % HOUR_MS) / MINUTE_MS)
  const seconds = Math.floor((diff % MINUTE_MS) / 1000)
  const pad = (value: number) => String(value).padStart(2, '0')
  return { days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) }
}

/** Gold #dbcc8f "Deal of the month" band: product photo left; white
 *  heading, a four-cell countdown (days/hours/minutes/seconds ticking
 *  every second), product name, strikethrough + sale price and three
 *  circular thumbnails on the right. */
export function Deal() {
  const target = useMemo(() => Date.now() + deal.targetDays * DAY_MS, [])
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target))

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => window.clearInterval(timer)
  }, [target])

  return (
    <section data-testid="deal" className="bg-brand py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:grid-cols-2 md:px-8">
        <img
          src={deal.image}
          alt="Deal of the month sneaker"
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <span className="text-xs uppercase tracking-[4px] text-white/90">{deal.subheading}</span>
          <h2 className="mb-4 mt-1 text-3xl font-bold text-white md:text-4xl">{deal.heading}</h2>

          <div className="mb-4 flex gap-4">
            {(
              [
                ['days', 'Days'],
                ['hours', 'Hours'],
                ['minutes', 'Minutes'],
                ['seconds', 'Seconds'],
              ] as const
            ).map(([key, label]) => (
              <div key={key} className="text-center">
                <div className="text-[38px] font-bold leading-none text-white">{timeLeft[key]}</div>
                <div className="mt-2 text-xs font-normal uppercase tracking-[2px] text-white">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-1 text-2xl font-extrabold text-ink">
            <a href="#products" className="hover:underline">
              {deal.name}
            </a>
          </h3>
          <p className="mb-4 flex gap-2 text-2xl font-extrabold">
            <span className="text-ink line-through">{deal.oldPrice}</span>
            <span className="text-white">{deal.price}</span>
          </p>

          <ul className="flex gap-3">
            {deal.thumbnails.map((thumb) => (
              <li key={thumb}>
                <img
                  src={thumb}
                  alt=""
                  loading="lazy"
                  className="h-[100px] w-[100px] rounded-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
