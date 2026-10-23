import { Cpu, ShieldCheck, Zap } from 'lucide-react'

const features = [
  {
    title: 'Expert Technicians',
    icon: Cpu,
    blurb: 'Performance, reliability, and attention to detail in every release.',
  },
  {
    title: 'Professional Service',
    icon: ShieldCheck,
    blurb: 'Privacy-first defaults and secure data handling baked into the core.',
  },
  {
    title: 'Great Support',
    icon: Zap,
    blurb: 'Blazing-fast load times and buttery-smooth interactions everywhere.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-night dark:text-white sm:text-4xl">
            Some Features that Made us Unique
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-paper text-primary-600 dark:bg-gray-900">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-night dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted dark:text-gray-400">
                  {feature.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
