import { CalendarClock, PartyPopper, Users, Zap } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

interface Event {
  title: string
  date: string
  time: string
  description: string
  icon: typeof PartyPopper
}

const events: Event[] = [
  {
    title: 'Startup Pitch Night',
    date: 'Thu, Aug 21',
    time: '6:00 PM',
    description:
      'Five founders pitch their ideas to a room of investors and peers. Free pizza included.',
    icon: Zap,
  },
  {
    title: 'Web Dev Meetup',
    date: 'Sat, Aug 30',
    time: '10:00 AM',
    description: 'Hands-on workshops on the latest frontend tooling with the local dev community.',
    icon: Users,
  },
  {
    title: 'Networking Lunch',
    date: 'Fri, Sep 5',
    time: '12:30 PM',
    description: 'A casual catered lunch to meet fellow members and swap war stories.',
    icon: PartyPopper,
  },
]

export function Community() {
  return (
    <section id="community" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Community
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Join a Thriving Community
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Events, workshops, and happy hours that bring members together every single week.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                  <event.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <CalendarClock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-gray-900 dark:text-white">
                {event.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                {event.date} · {event.time}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {event.description}
              </p>
              <ButtonLink href="#contact" variant="outline" className="mt-6 rounded-full">
                RSVP
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
