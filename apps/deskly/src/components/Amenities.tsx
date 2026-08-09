import { Bike, Clock, Coffee, Phone, Printer, ShowerHead, Wifi, CalendarDays } from 'lucide-react'

interface Amenity {
  name: string
  description: string
  icon: typeof Wifi
}

const amenities: Amenity[] = [
  {
    name: 'High-Speed WiFi',
    description: 'Symmetrical gigabit fiber with enterprise-grade security across every floor.',
    icon: Wifi,
  },
  {
    name: 'Free Coffee & Snacks',
    description: 'Barista-grade espresso, craft tea, and healthy snacks stocked all day.',
    icon: Coffee,
  },
  {
    name: '24/7 Access',
    description: 'Your badge works around the clock — come and go whenever you need.',
    icon: Clock,
  },
  {
    name: 'Phone Booths',
    description: 'Soundproof booths for calls, video meetings, and deep-focus sessions.',
    icon: Phone,
  },
  {
    name: 'Event Space',
    description: 'Host workshops, demos, and happy hours in our flexible common area.',
    icon: CalendarDays,
  },
  {
    name: 'Bike Storage',
    description: 'Secure indoor racks plus showers so you can ride to work comfortably.',
    icon: Bike,
  },
  {
    name: 'Showers',
    description: 'Clean, private shower suites with towels and premium toiletries.',
    icon: ShowerHead,
  },
  {
    name: 'Printing',
    description: 'Print, scan, and bind from your laptop or phone with our print stations.',
    icon: Printer,
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Amenities
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Every Deskly location comes fully equipped so you can focus on the work, not the
            details.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <article
              key={amenity.name}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                <amenity.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-gray-900 dark:text-white">
                {amenity.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {amenity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
