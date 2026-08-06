import { Palette, Rocket, Sparkles } from 'lucide-react'

const tiles = [
  {
    title: 'Easy to use',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    icon: Rocket,
  },
  {
    title: 'Unlimited Colors',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    icon: Palette,
  },
  {
    title: 'Unique Features',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    icon: Sparkles,
  },
] as const

export function HowItWorks() {
  return (
    <section
      id="about"
      aria-label="How it works"
      className="bg-paper py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
            Stunning Visuals
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            How It work for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                <tile.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-white">
                {tile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {tile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
