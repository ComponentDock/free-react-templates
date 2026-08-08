import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    day: 'Sunday',
    times: '9:00 AM & 11:00 AM',
    label: 'In-person & Online',
    Icon: Clock,
  },
  {
    day: 'Wednesday',
    times: '7:00 PM',
    label: 'Midweek Service',
    Icon: CalendarDays,
  },
] as const

export function ServiceTimes() {
  return (
    <section id="service-times" className="bg-cream-50 py-20 dark:bg-charcoal-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
          Join Us
        </p>
        <h2 className="mt-3 text-3xl font-bold text-charcoal-900 dark:text-white sm:text-4xl">
          Service Times
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-charcoal-600 dark:text-charcoal-300">
          Whether in person or online, we&apos;d love to worship with you. Join us this weekend!
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.day}
              className="rounded-lg bg-white p-6 shadow-sm dark:bg-charcoal-800"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                <service.Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-charcoal-900 dark:text-white">
                {service.day}
              </h3>
              <p className="mt-1 text-lg font-semibold text-amber-600 dark:text-amber-400">
                {service.times}
              </p>
              <p className="mt-1 text-sm text-charcoal-600 dark:text-charcoal-300">
                {service.label}
              </p>
            </div>
          ))}

          {/* Location card */}
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-charcoal-800">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-charcoal-900 dark:text-white">
              Our Location
            </h3>
            <p className="mt-1 text-sm text-charcoal-600 dark:text-charcoal-300">
              1200 Grace Avenue
              <br />
              Austin, TX 78701
            </p>
            <a
              href="https://maps.google.com/?q=1200+Grace+Avenue+Austin+TX"
              target="_blank"
              rel="noreferrer"
              className={cn(
                'mt-3 inline-flex items-center gap-1 text-sm font-semibold',
                'text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400',
              )}
            >
              Get Directions
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
