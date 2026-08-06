import { Users, Rocket } from 'lucide-react'

const tiles = [
  {
    icon: Users,
    title: 'Engage Teammates',
    blurb:
      'There earth face earth behold. She stars made void two given and also our own grass days.',
  },
  {
    icon: Rocket,
    title: 'Level Up Productivity',
    blurb:
      'Greater male shall there faced earth behold she star. Sea forth fill have divide be dominion from life.',
  },
] as const

export function Features() {
  return (
    <section aria-label="New features" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400">
          New Features
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-navy sm:text-4xl dark:text-white">
          Grow your business fast.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <tile.icon className="h-10 w-10 shrink-0 text-primary-500" aria-hidden="true" />
              <div>
                <h3 className="font-display text-xl font-semibold text-navy dark:text-white">
                  {tile.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
                  {tile.blurb}
                </p>
                <a
                  href="#about"
                  className="mt-4 inline-block font-semibold text-primary-500 transition-colors hover:text-primary-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
