import { ArrowLeft, ArrowRight, Droplets, Scissors, SprayCan } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Haircuting', image: 'clipper-svc-1' },
  { icon: SprayCan, title: 'Beard Shaving', image: 'clipper-svc-2' },
  { icon: Droplets, title: 'Cream & Shampoo', image: 'clipper-svc-3' },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">Services</h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            Far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              aria-label="Previous services"
              className="flex h-12 w-12 items-center justify-center rounded bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next services"
              className="flex h-12 w-12 items-center justify-center rounded bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${service.image}/600/400`}
                  alt={service.title}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand shadow">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {service.title}
                </h3>
                <a
                  href="#contact"
                  className="mt-2 inline-block text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
