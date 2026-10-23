import { HeartHandshake, PawPrint, Stethoscope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
  title: string
  copy: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Pet Surgeries',
    copy: 'Safe, gentle surgical care performed by certified veterinarians, from routine procedures to complex operations.',
    icon: Stethoscope,
  },
  {
    title: 'Pet Adoption',
    copy: 'Find your new best friend — we match every pet with a caring home and support you through the whole journey.',
    icon: PawPrint,
  },
  {
    title: 'Pet Care',
    copy: 'Everyday wellness, grooming, and boarding so your companion stays happy, healthy, and loved at all times.',
    icon: HeartHandshake,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#f2f8f8] py-16 dark:bg-gray-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-heading sm:text-4xl dark:text-white">
          We Provide Best Services
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-gray-500 dark:text-gray-400">
          Working with humanitarian aid agencies, we support programmes that ease suffering through
          animal welfare.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-heading dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                {service.copy}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-strong"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
