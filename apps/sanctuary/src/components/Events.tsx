import { ArrowRight } from 'lucide-react'

const events = [
  {
    name: 'Community Service Day',
    date: 'March 15, 2025',
    time: '8:00 AM - 2:00 PM',
    description:
      'Serve our community together! Projects include park cleanup, food bank service, and visiting nursing homes.',
  },
  {
    name: 'Marriage Enrichment Workshop',
    date: 'March 22, 2025',
    time: '9:00 AM - 3:00 PM',
    description:
      'A day for couples to strengthen their relationship through biblical principles, practical tools, and quality time together.',
  },
  {
    name: 'Vacation Bible School',
    date: 'June 16-20, 2025',
    time: '9:00 AM - 12:00 PM',
    description:
      'A week of fun, games, crafts, and Bible stories for kids ages 4-12. Registration opens May 1st.',
  },
] as const

export function Events() {
  return (
    <section id="events" className="py-20 lg:py-28 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Join us for fellowship, growth, and community
          </p>
        </div>

        {/* Featured event */}
        <div className="relative mt-12 overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/sanctuary-2/800/600"
            alt="Easter Sunday Celebration"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70" />
          <div className="relative p-8 sm:p-12">
            <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
              Featured Event
            </span>
            <h3 className="mt-4 max-w-xl font-serif text-2xl font-bold text-white sm:text-3xl">
              Easter Sunday Celebration
            </h3>
            <p className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm text-primary-100">
              <span>April 20, 2025</span>
              <span aria-hidden="true">·</span>
              <span>9:00 AM &amp; 11:00 AM</span>
              <span aria-hidden="true">·</span>
              <span>Main Sanctuary</span>
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-primary-100">
              Join us for a special Easter celebration with worship, a powerful message of hope, and
              activities for the whole family.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1 font-medium text-white transition-colors hover:text-primary-200"
            >
              Learn More
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Event list */}
        <ul className="mt-12 divide-y divide-gray-100 dark:divide-gray-800">
          {events.map((event) => (
            <li key={event.name} className="py-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>
                <div className="shrink-0 text-sm text-gray-500 dark:text-gray-400 md:text-right">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#events"
            className="inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
          >
            View All Events
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
