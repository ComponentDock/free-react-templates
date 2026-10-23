import {
  Building2,
  Camera,
  Code2,
  Palette,
  Phone,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  copy: string
}

const services: Service[] = [
  {
    icon: Palette,
    title: 'Design & creatives',
    copy: 'Craft pixel-perfect interfaces that turn visitors into loyal customers.',
  },
  {
    icon: Phone,
    title: 'Telecommunication',
    copy: 'Reliable messaging and calling tools that keep your team in sync.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    copy: 'Menus, reservations, and reviews in one delightful experience.',
  },
  {
    icon: Code2,
    title: 'Programing',
    copy: 'Clean, maintainable code that scales with your product roadmap.',
  },
  {
    icon: Building2,
    title: 'Architecture',
    copy: 'Plan, sketch, and share blueprints with your whole studio.',
  },
  {
    icon: Camera,
    title: 'Photography',
    copy: 'Showcase portfolios in a gallery your audience will love.',
  },
] as const

export function Services() {
  return (
    <section id="features" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-snug text-navy dark:text-white sm:text-4xl">
            Finally focus on my marketing strategy and delegate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted dark:text-gray-400">
            In the old days, your website was the same for everyone. Not anymore. Experiences lets
            you adapt your website for every audience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-[0_15px_60px_rgba(54,127,255,0.12)] dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-paper shadow-[0_15px_60px_rgba(54,127,255,0.1)] dark:bg-gray-800">
                  <Icon className="h-9 w-9 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted dark:text-gray-400">{service.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
