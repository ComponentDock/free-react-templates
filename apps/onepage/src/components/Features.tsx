import { Gauge, Smartphone, SlidersHorizontal } from 'lucide-react'
import { Card } from '@free-react-templates/ui'

const features = [
  {
    title: 'Lightning Fast',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: Gauge,
  },
  {
    title: 'Fully Responsive',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: Smartphone,
  },
  {
    title: 'Easy to Customize',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: SlidersHorizontal,
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
            Why OnePage
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Everything You Need, One Page
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
