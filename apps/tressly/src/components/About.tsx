import { Clock } from 'lucide-react'

const hours = [
  { days: 'Monday – Friday', time: '9:00 am – 6:00 pm' },
  { days: 'Saturday', time: '9:00 am – 2:00 pm' },
  { days: 'Sunday', time: 'Closed' },
] as const

export function About() {
  return (
    <section id="about" className="bg-mist-100 py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Welcome to Hair Salon
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300">
            Our expert stylists blend classic technique with modern trends to give every client a
            look that fits their personality.
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            From precision cuts to nourishing treatments, Tressly is your neighbourhood salon for
            the whole family.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
          <h3 className="flex items-center gap-2 text-lg font-semibold uppercase tracking-wide text-leaf-600 dark:text-leaf-400">
            <Clock className="h-5 w-5" aria-hidden="true" /> Opening Hours
          </h3>
          <dl className="mt-6 space-y-4">
            {hours.map((row) => (
              <div
                key={row.days}
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 dark:border-gray-700"
              >
                <dt className="text-sm font-medium text-gray-900 dark:text-white">{row.days}</dt>
                <dd className="text-sm text-gray-500 dark:text-gray-400">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
