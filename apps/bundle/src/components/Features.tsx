import { Headphones, ShieldCheck, Wrench, Zap } from 'lucide-react'

const tiles = [
  {
    icon: Wrench,
    blurb:
      'Keep every part of the product running smoothly with proactive upkeep, updates, and care built in.',
  },
  {
    icon: ShieldCheck,
    blurb:
      'Your data stays protected with secure transfers, encrypted storage, and dependable backups around the clock.',
  },
  {
    icon: Zap,
    blurb:
      'Lightning-fast loading and instant responses, so the app keeps up with the pace of your day.',
  },
  {
    icon: Headphones,
    blurb:
      'Friendly human support whenever you need it, with reliable customer service that never keeps you waiting.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-gray-900 dark:text-white">
          Unique Features
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => {
            const Icon = tile.icon
            return (
              <div
                key={tile.blurb}
                className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-start to-brand-end text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-gray-900 dark:text-white">
                  Maintenance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{tile.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
