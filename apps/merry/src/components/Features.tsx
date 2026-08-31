import { Layers, Zap, Shield, Heart } from 'lucide-react'

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Multi-Item Display',
    description:
      'Showcase multiple carousel items simultaneously with responsive grid layouts that adapt to any screen size.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Smooth Transitions',
    description:
      'Buttery-smooth CSS transitions and animations make every slide change feel polished and professional.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Accessible by Default',
    description:
      'Full keyboard navigation, ARIA labels, and screen reader support built into every interactive element.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Community Driven',
    description:
      'Open-source templates crafted by the community, free to use for personal and commercial projects.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Built for Performance & Style
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Everything you need to create stunning carousel experiences that captivate your
            audience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 transition-all hover:shadow-lg hover:border-brand/30"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-brand/10 p-3 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
