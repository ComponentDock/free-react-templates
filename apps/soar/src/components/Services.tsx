import { Globe, ShieldCheck, Headphones } from 'lucide-react'

const services = [
  {
    title: '100% Uptime Guarantee',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts — an almost unorthographic view of what is possible.',
    icon: Globe,
    iconClass: 'bg-primary-50 text-primary-400',
  },
  {
    title: 'Safe and Secured',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts — an almost unorthographic view of what is possible.',
    icon: ShieldCheck,
    iconClass: 'bg-[#e1faee] text-accent-600',
  },
  {
    title: 'Our Dedicated Support',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts — an almost unorthographic view of what is possible.',
    icon: Headphones,
    iconClass: 'bg-[#e8f8fb] text-skyblue',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Services</p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Why choose us
          </h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <div
                  className={`mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full ${service.iconClass}`}
                >
                  <Icon className="h-9 w-9" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {service.blurb}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
