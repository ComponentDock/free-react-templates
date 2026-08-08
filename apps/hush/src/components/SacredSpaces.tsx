import { Building2, CircleDot, Flower2, Trees } from 'lucide-react'
import { Reveal } from './Reveal'

const spaces = [
  {
    icon: Building2,
    title: 'The Chapel',
    blurb:
      'A simple stone chapel seating forty, host to the daily offices. Candle lighting offered from 5:30 AM to 10:00 PM.',
  },
  {
    icon: CircleDot,
    title: 'The Labyrinth',
    blurb:
      'An eleven-circuit Chartres-style labyrinth set in the meadow, walked at your own pace in silence.',
  },
  {
    icon: Flower2,
    title: 'Prayer Garden',
    blurb:
      'A walled garden of native plants, fountains, and benches — a place to sit, pray, or simply breathe.',
  },
  {
    icon: Trees,
    title: 'Forest Trails',
    blurb:
      'Eight miles of quiet trails through cedar and fir, with hidden clearings for solitude and rest.',
  },
] as const

export function SacredSpaces() {
  return (
    <section id="spaces" className="bg-white py-20 lg:py-28 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Sacred Spaces
          </p>
          <h2 className="font-heading mt-3 text-3xl font-light text-stone-900 sm:text-4xl lg:text-5xl dark:text-white">
            80 Acres of Sanctuary
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Our grounds are designed to invite encounter — places that hold silence gently.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space, index) => (
            <Reveal
              key={space.title}
              delay={index * 80}
              className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-8 transition-shadow hover:shadow-soft-lg dark:border-stone-800 dark:bg-stone-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <space.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading mt-6 text-xl font-semibold text-stone-900 dark:text-white">
                {space.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
                {space.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
