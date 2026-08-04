import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '10K+', label: 'Happy Pets' },
  { value: '8+', label: 'Years Experience' },
  { value: '4.9', label: 'Rating' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Welcome to Pawpal
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Where Every Pet Gets the Royal Treatment
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Professional grooming, loving daycare, and comfortable boarding for your furry family
            members. Because they deserve the very best.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#book" className="rounded-full px-8 py-4">
              Book an Appointment
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="outline"
              className="rounded-full border-primary-300 px-8 py-4 text-primary-700 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-gray-800"
            >
              View Services
            </ButtonLink>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="order-2 text-sm text-gray-500 dark:text-gray-400">{stat.label}</dt>
                <dd className="order-1 font-serif text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/pawpal-hero/1200/900"
            alt="Happy dog receiving care at Pawpal"
            className="h-full w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
