import { CalendarDays, MapPin, Ticket } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Countdown } from './Countdown'

const stats = [
  { value: '5,000+', label: 'Attendees' },
  { value: '80+', label: 'Speakers' },
  { value: '3', label: 'Days' },
  { value: '30+', label: 'Workshops' },
]

export function Hero() {
  return (
    <section id="home" className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-4 py-1.5 text-sm text-gray-300">
            <CalendarDays className="h-4 w-4 text-primary-400" aria-hidden="true" />
            September 18–20, 2026 · San Francisco, CA
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Future of AI is Here
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Join 5,000+ researchers, engineers, and builders for three days of cutting-edge talks,
            hands-on workshops, and the largest gathering of LLM practitioners.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="#tickets"
              className="w-full rounded-full px-7 py-3 text-base sm:w-auto"
            >
              <Ticket className="h-4 w-4" aria-hidden="true" />
              Get Your Ticket
            </ButtonLink>
            <ButtonLink
              href="#schedule"
              variant="outline"
              className="w-full rounded-full border-gray-700 bg-transparent px-7 py-3 text-base text-white hover:border-gray-500 hover:bg-gray-900 sm:w-auto"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              View Schedule
            </ButtonLink>
          </div>

          <p className="mt-14 text-sm uppercase tracking-widest text-gray-500">Event starts in</p>
          <div className="mt-4">
            <Countdown />
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-3xl font-bold text-primary-400">{stat.value}</dt>
                <dd className="mt-1 text-sm text-gray-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
