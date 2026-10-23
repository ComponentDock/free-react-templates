import { Home, Stethoscope, Syringe, type LucideIcon } from 'lucide-react'

const services: { title: string; copy: string; Icon: LucideIcon; tint: string }[] = [
  {
    title: 'Pet Boarding',
    copy: 'A safe, cozy home away from home with round-the-clock supervision and daily playtime.',
    Icon: Home,
    tint: 'bg-[#4cd3e3]/15 text-[#38a4ff]',
  },
  {
    title: 'Pet Treatment',
    copy: 'Gentle, experienced veterinary care to keep your pets healthy, happy, and pain-free.',
    Icon: Stethoscope,
    tint: 'bg-[#f4e700]/20 text-[#f44a40]',
  },
  {
    title: 'Vaccinations',
    copy: 'Complete vaccination schedules that protect your pets from preventable diseases.',
    Icon: Syringe,
    tint: 'bg-[#38a4ff]/15 text-[#4cd3e3]',
  },
]

export function Services() {
  return (
    <section id="services" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-navy dark:text-white">
          Best Pet Care Services
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-muted dark:text-gray-400">
          Everything your pet needs, under one caring roof.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, copy, Icon, tint }) => (
            <article
              key={title}
              className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
            >
              <span
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${tint}`}
              >
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
                {copy}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-red-600"
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
