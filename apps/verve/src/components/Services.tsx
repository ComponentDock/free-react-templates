import { Infinity as InfinityIcon, Layers, BarChart3, Users } from 'lucide-react'

const services = [
  {
    title: 'Unlimited Features',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts — an almost unorthographic view of what is possible.',
    icon: InfinityIcon,
    iconClass: 'bg-primary-50 text-primary-300',
  },
  {
    title: 'Multiple Functions',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts — an almost unorthographic view of what is possible.',
    icon: Layers,
    iconClass: 'bg-[#ebfdf4] text-mint',
  },
  {
    title: 'Advanced Visualizations',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts — an almost unorthographic view of what is possible.',
    icon: BarChart3,
    iconClass: 'bg-[#fce7f1] text-accent-500',
  },
  {
    title: 'Community & Supports',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts — an almost unorthographic view of what is possible.',
    icon: Users,
    iconClass: 'bg-[#fdf2ea] text-peach',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Verve provides a fully featured text services platform!
          </h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
