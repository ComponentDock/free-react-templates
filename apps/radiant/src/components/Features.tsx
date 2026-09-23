import { PenTool, Lock } from 'lucide-react'

const featureCards = [
  {
    icon: PenTool,
    title: 'Creativity',
    description: 'Far far away, behind the word mountains, far from the countries.',
  },
  {
    icon: Lock,
    title: 'Solutions',
    description: 'Far far away, behind the word mountains, far from the countries.',
  },
] as const

export function Features() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-md">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
              About us
            </span>
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl">
              Far far away, behind the word mountains, far from the countries.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-xl">
            {featureCards.map((card) => (
              <div key={card.title}>
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900/30 dark:text-primary-300">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-display text-lg font-bold text-ink dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
