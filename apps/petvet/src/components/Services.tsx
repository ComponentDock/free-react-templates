import { CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Qualified Groomer' },
  { value: '20+', label: 'Years of Experienced' },
  { value: '850+', label: 'Animal Lover' },
  { value: '1200+', label: 'Best Pet Care' },
] as const

const offeredServices = ['Pet Adoption', 'Pet Grooming', 'Vaccination'] as const

export function Services() {
  return (
    <section id="services" className="py-16 dark:bg-gray-950 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-brand">
          Welcome to Petvet
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
          We Are Best Agency For Your Pets
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-gray-500 dark:text-gray-400">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia — a paradisematic country where roasted parts of sentences fly into your mouth.
        </p>

        <dl className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-paper p-6 text-center dark:bg-gray-900">
              <dt className="text-3xl font-black text-brand">{stat.value}</dt>
              <dd className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16">
          <a
            href="#contact"
            className="rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-strong"
          >
            Make An Appointment
          </a>
          <div>
            <h3 className="text-center text-base font-bold text-gray-900 lg:text-left dark:text-white">
              Select Your Services
            </h3>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
              {offeredServices.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
