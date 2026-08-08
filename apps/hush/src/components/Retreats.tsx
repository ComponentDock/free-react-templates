import { Calendar, User } from 'lucide-react'
import { Reveal } from './Reveal'

interface Retreat {
  title: string
  featured: boolean
  badge?: string
  dates: string
  duration: string
  blurb: string
  leader: string
  price: number
}

const retreats: Retreat[] = [
  {
    title: 'Spring Silence Retreat',
    featured: true,
    badge: '4 spots left',
    dates: 'April 14–19, 2025',
    duration: '5 nights',
    blurb:
      'Five days of guided silence — morning teaching, afternoon solitude, and the daily offices together.',
    leader: 'Sr. Margaret Anne, OSB',
    price: 795,
  },
  {
    title: 'Introduction to Contemplative Prayer',
    featured: false,
    dates: 'March 7–9, 2025',
    duration: '2 nights',
    blurb: 'A weekend immersion in the basics of contemplative prayer for newcomers to silence.',
    leader: 'Fr. David Brennan',
    price: 495,
  },
  {
    title: 'Day of Rest',
    featured: false,
    dates: 'Saturdays',
    duration: 'one day',
    blurb:
      'A single day of quiet: gentle prayer, the labyrinth, a simple lunch, and time to wander the trails.',
    leader: 'Community',
    price: 95,
  },
] as const

export function Retreats() {
  return (
    <section id="retreats" className="bg-white py-20 lg:py-28 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Upcoming Retreats
          </p>
          <h2 className="font-heading mt-3 text-3xl font-light text-stone-900 sm:text-4xl lg:text-5xl dark:text-white">
            Step Away. Go Deeper.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            From single-day refreshers to week-long immersions, there is a place for you in the
            quiet.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {retreats.map((retreat, index) => (
            <Reveal
              key={retreat.title}
              delay={index * 80}
              className={
                retreat.featured
                  ? 'relative flex flex-col rounded-3xl bg-primary-900 p-8 text-white shadow-soft-lg'
                  : 'relative flex flex-col rounded-3xl border border-stone-200 bg-stone-50 p-8 dark:border-stone-800 dark:bg-stone-900'
              }
            >
              {retreat.featured ? (
                <span className="absolute top-6 right-6 rounded-full bg-primary-400 px-3 py-1 text-xs font-semibold text-primary-950">
                  Featured
                </span>
              ) : null}
              {retreat.badge ? (
                <span className="absolute top-6 right-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                  {retreat.badge}
                </span>
              ) : null}
              <h3 className="font-heading text-2xl font-semibold">{retreat.title}</h3>
              <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
                <span
                  className={
                    retreat.featured
                      ? 'inline-flex items-center gap-1.5 text-primary-200'
                      : 'inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-300'
                  }
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {retreat.dates}
                </span>
                <span
                  className={
                    retreat.featured ? 'text-stone-300' : 'text-stone-500 dark:text-stone-400'
                  }
                >
                  · {retreat.duration}
                </span>
              </p>
              <p
                className={
                  retreat.featured
                    ? 'mt-4 flex-1 leading-relaxed text-stone-200'
                    : 'mt-4 flex-1 leading-relaxed text-stone-600 dark:text-stone-300'
                }
              >
                {retreat.blurb}
              </p>
              <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-stone-500 dark:text-stone-400">
                <User className="h-4 w-4" aria-hidden="true" />
                {retreat.leader}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                <p className="font-heading text-2xl font-semibold">
                  ${retreat.price}
                  <span
                    className={
                      retreat.featured
                        ? 'ml-1 text-sm font-normal text-stone-300'
                        : 'ml-1 text-sm font-normal text-stone-500 dark:text-stone-400'
                    }
                  >
                    / person
                  </span>
                </p>
                <a
                  href="#connect"
                  className={
                    retreat.featured
                      ? 'rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-400 hover:text-primary-950'
                      : 'rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700'
                  }
                >
                  Book This Retreat
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
