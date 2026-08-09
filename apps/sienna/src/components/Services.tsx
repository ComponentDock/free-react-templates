import { Palette, Scissors, Sparkles } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    title: 'Stylish Hair Cut',
    copy: 'Show wherein form yielding whala gathered wherein moved. Precision scissors work for a clean, sharp outline.',
    icon: Scissors,
  },
  {
    title: 'Cut & Hair Style',
    copy: 'Show wherein form yielding whala gathered wherein moved. Styled to suit your face and your daily routine.',
    icon: Sparkles,
  },
  {
    title: 'Color & Hair Wash',
    copy: 'Show wherein form yielding whala gathered wherein moved. Even color, gentle wash, healthy scalp.',
    icon: Palette,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {service.copy}
                </p>
                <ButtonLink
                  href="#pricing"
                  className="mt-6 inline-flex rounded-lg border border-brand px-6 uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Book Now
                </ButtonLink>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
