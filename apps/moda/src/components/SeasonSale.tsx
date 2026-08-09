import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

const DAY_MS = 86_400_000
const HOUR_MS = 3_600_000
const MINUTE_MS = 60_000
const SECOND_MS = 1_000

/* Rolling sale deadline: always ~2 days, 14 hours, 36 minutes, 48 seconds
   away (matching the reference demo's initial countdown of 02:14:36:48) so
   the countdown is always live on the deployed demo. */
const SALE_DEADLINE = Date.now() + 2 * DAY_MS + 14 * HOUR_MS + 36 * MINUTE_MS + 48 * SECOND_MS

interface CountdownProps {
  deadline?: number
}

export function Countdown({ deadline = SALE_DEADLINE }: CountdownProps) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const diff = Math.max(0, deadline - now)
  const days = Math.floor(diff / DAY_MS)
  const hours = Math.floor((diff % DAY_MS) / HOUR_MS)
  const minutes = Math.floor((diff % HOUR_MS) / MINUTE_MS)
  const seconds = Math.floor((diff % MINUTE_MS) / SECOND_MS)

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]

  return (
    <div id="sale-countdown" className="mt-10 flex items-center justify-center gap-3 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm"
        >
          <span className="font-display text-2xl font-bold tabular-nums text-white">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-xs font-medium text-white/80">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

const saleItems = [
  {
    name: 'Minimal Leather Jacket',
    price: 299,
    oldPrice: 399,
    badge: '-25%',
    seed: 'moda-2',
  },
  {
    name: 'Leather Crossbody Bag',
    price: 225,
    oldPrice: 275,
    badge: '-18%',
    seed: 'moda-12',
  },
  {
    name: 'Relaxed Linen Blazer',
    price: 245,
    oldPrice: 295,
    badge: '-17%',
    seed: 'moda-13',
  },
  {
    name: 'Italian Wool Overcoat',
    price: 425,
    oldPrice: 525,
    badge: '-19%',
    seed: 'moda-8',
  },
] as const

export function SeasonSale() {
  return (
    <section
      id="sale"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-200">
            Limited Time Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Season Sale
          </h2>
          <p className="mt-3 text-lg text-primary-100">Up to 50% off on selected items</p>
          <Countdown />
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-primary-700 transition-colors hover:bg-primary-50"
          >
            Shop All Sale
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {saleItems.map((item) => (
              <article
                key={item.name}
                className="group rounded-2xl bg-white/10 p-4 text-left backdrop-blur-sm"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white/10">
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/800/1000`}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {item.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-white">${item.price}</span>
                  <span className="text-sm text-primary-200 line-through">${item.oldPrice}</span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
