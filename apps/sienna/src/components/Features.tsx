import { Award, Armchair, Scissors, UserCheck } from 'lucide-react'

const features = [
  {
    title: 'Best Place',
    copy: 'Moveth land fish also replenish that gathering dry whose called gathering image.',
    icon: Armchair,
  },
  {
    title: 'Best Equipment',
    copy: 'Moveth land fish also replenish that gathering dry whose called gathering image.',
    icon: Scissors,
  },
  {
    title: 'Modern Style',
    copy: 'Moveth land fish also replenish that gathering dry whose called gathering image.',
    icon: Award,
  },
  {
    title: 'Expert Staff',
    copy: 'Moveth land fish also replenish that gathering dry whose called gathering image.',
    icon: UserCheck,
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Advance Feature
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Strength Is Your Smart Beauty
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase text-ink dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {feature.copy}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
