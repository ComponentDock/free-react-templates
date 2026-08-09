import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import { Badge, ButtonLink } from '@free-react-templates/ui'

interface FeaturedEvent {
  name: string
  badge: string
  badgeClass: string
  schedule: string
  blurb: string
  linkLabel: string
  image: string
  alt: string
}

const featuredEvents: FeaturedEvent[] = [
  {
    name: 'Elevate Night',
    badge: 'Featured',
    badgeClass: 'bg-accent-500 text-white',
    schedule: 'Every Wednesday · 6:30 PM - 8:30 PM',
    blurb:
      'Our weekly gathering! Expect high-energy worship, real talk, and your crew. Doors open at 6:00 PM.',
    linkLabel: 'Learn More',
    image: 'https://picsum.photos/seed/ignite-2/800/500',
    alt: 'Elevate Night worship gathering',
  },
  {
    name: 'Summer Camp 2025',
    badge: 'Featured',
    badgeClass: 'bg-emerald-500 text-white',
    schedule: 'July 14-19, 2025 · All Week',
    blurb:
      "A week you'll never forget. 5 days of adventure, worship, and life-changing moments in the mountains.",
    linkLabel: 'Register Now',
    image: 'https://picsum.photos/seed/ignite-3/800/500',
    alt: 'Summer camp group photo',
  },
]

interface SmallEvent {
  name: string
  date: string
  time: string
  badge: string
  badgeClass: string
}

const moreEvents: SmallEvent[] = [
  {
    name: 'City Serve Day',
    date: 'March 15, 2025',
    time: '8:00 AM - 2:00 PM',
    badge: 'Service',
    badgeClass: 'bg-purple-500 text-white',
  },
  {
    name: 'Spring Retreat',
    date: 'April 4-6, 2025',
    time: 'Friday 5 PM - Sunday 12 PM',
    badge: 'Retreat',
    badgeClass: 'bg-accent-500 text-white',
  },
  {
    name: 'Worship Night',
    date: 'First Friday Monthly',
    time: '7:00 PM - 9:00 PM',
    badge: 'Worship',
    badgeClass: 'bg-emerald-500 text-white',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-gray-50 py-20 dark:bg-navy-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
              What&apos;s Happening
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-gray-900 dark:text-white md:text-5xl">
              Upcoming Events
            </h2>
          </div>
          <a
            href="#events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
          >
            View All Events
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Featured events */}
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredEvents.map((event) => (
            <article
              key={event.name}
              className="group relative overflow-hidden rounded-2xl bg-navy-900"
            >
              <img
                src={event.image}
                alt={event.alt}
                className="h-64 w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 lg:h-72"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"
                aria-hidden="true"
              />
              <Badge className={`absolute left-4 top-4 ${event.badgeClass}`}>{event.badge}</Badge>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="flex items-center gap-2 text-sm font-medium text-primary-300">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {event.schedule}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-wide text-white">
                  {event.name}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{event.blurb}</p>
                <a
                  href="#events"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-300"
                >
                  {event.linkLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* More events */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreEvents.map((event) => (
            <article
              key={event.name}
              className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-primary-200 hover:shadow-lg dark:border-navy-700 dark:bg-navy-800 dark:hover:border-primary-800"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {event.date}
                </p>
                <Badge className={event.badgeClass}>{event.badge}</Badge>
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {event.time}
                </p>
              </div>
              <ButtonLink
                href="#events"
                className="mt-auto w-full rounded-full bg-primary-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Register Now
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
