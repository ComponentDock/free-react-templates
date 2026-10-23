import { Headset, Lightbulb, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Unique Design',
    blurb:
      'There earth face earth behold. She stars made void two given and also our own grass days.',
  },
  {
    icon: Briefcase,
    title: 'Business Solution',
    blurb:
      'Greater male shall there faced earth behold she star, made for the long run with your team.',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    blurb: 'Sea forth fill have divide be dominion from life — we are here whenever you need us.',
  },
] as const

export function Services() {
  return (
    <section aria-label="Services" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-gray-100 bg-paper p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <service.icon className="mx-auto h-12 w-12 text-primary-600" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
              {service.blurb}
            </p>
            <a
              href="#features"
              className="mt-6 inline-block font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
