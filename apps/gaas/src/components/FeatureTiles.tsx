import { Palette, Code2, Truck } from 'lucide-react'

const tiles = [
  {
    icon: Palette,
    title: 'Design Trends',
    blurb:
      'There earth face earth behold. She stars made void two given and also our own grass days.',
  },
  {
    icon: Code2,
    title: 'Development',
    blurb:
      'Greater male shall there faced earth behold she star, made for the long run with your team.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    blurb: 'Sea forth fill have divide be dominion from life — we deliver on time, every time.',
  },
] as const

export function FeatureTiles() {
  return (
    <section aria-label="Feature tiles" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
          Stunning Visuals
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-body dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <tile.icon className="mx-auto h-12 w-12 text-primary-600" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-white">
                {tile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
                {tile.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
