import { useEffect, useState } from 'react'
import { DISCOUNT_HEADLINE, DISCOUNT_LABEL, DISCOUNT_TARGET } from '../data'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: number): TimeLeft {
  const remainingSeconds = Math.max(0, Math.floor((target - Date.now()) / 1000))
  return {
    days: Math.floor(remainingSeconds / 86400),
    hours: Math.floor((remainingSeconds % 86400) / 3600),
    minutes: Math.floor((remainingSeconds % 3600) / 60),
    seconds: remainingSeconds % 60,
  }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Mins' },
  { key: 'seconds', label: 'Secs' },
]

/* discount — split band (photo left, light-grey panel right) with a script
   "Summer 2030" headline, "SALE 50%" label, a live countdown timer and a
   SHOP NOW text link with the signature red underline. */
export function Discount() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(DISCOUNT_TARGET))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(DISCOUNT_TARGET)), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-2xl lg:flex-row">
        <img
          src="https://picsum.photos/seed/atelier-discount/900/600"
          alt="Summer collection"
          loading="lazy"
          className="h-72 w-full object-cover lg:h-auto lg:w-1/2"
        />
        <div className="flex flex-col items-center justify-center bg-tint px-8 py-16 text-center lg:w-1/2">
          <h2 className="font-script text-5xl text-brand md:text-6xl">{DISCOUNT_HEADLINE}</h2>
          <p className="mt-3 text-lg font-semibold tracking-widest text-ink uppercase">
            {DISCOUNT_LABEL}
          </p>
          <div className="mt-8 flex gap-4">
            {UNITS.map((unit) => (
              <div key={unit.key} className="flex flex-col items-center">
                <span
                  data-testid={`countdown-${unit.key}`}
                  className="text-3xl font-bold text-ink dark:text-white"
                >
                  {timeLeft[unit.key]}
                </span>
                <span className="mt-1 text-xs tracking-wide text-muted uppercase">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#new-products"
            className="mt-8 border-b-2 border-brand pb-1 text-sm font-bold tracking-wide text-ink uppercase transition-colors hover:text-brand dark:text-white"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
