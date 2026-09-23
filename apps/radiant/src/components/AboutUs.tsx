import { Building2, Laptop, Lock } from 'lucide-react'

interface FeatureItem {
  icon: typeof Building2
  title: string
  description: string
  highlight?: string
  highlightLabel?: string
}

const aboutFeatures: readonly FeatureItem[] = [
  {
    icon: Building2,
    title: 'Years of Experience',
    description: 'Far far away, behind the word mountains, far from the countries.',
    highlight: '15',
    highlightLabel: 'years',
  },
  {
    icon: Laptop,
    title: 'Innovative',
    description: 'Far far away, behind the word mountains, far from the countries.',
  },
  {
    icon: Lock,
    title: 'Solutions',
    description: 'Far far away, behind the word mountains, far from the countries.',
  },
]

export function AboutUs() {
  return (
    <section id="about" className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            About us
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl">
            Far far away, behind the word mountains, far from the countries.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {aboutFeatures.map((feature) => (
            <div key={feature.title} className="text-center">
              <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900/30 dark:text-primary-300">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {feature.description}
              </p>
              {feature.highlight && feature.highlightLabel && (
                <p className="font-display text-lg font-bold text-ink dark:text-white">
                  We have been in the industry for{' '}
                  <span className="text-primary-500">{feature.highlight}</span>{' '}
                  {feature.highlightLabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
