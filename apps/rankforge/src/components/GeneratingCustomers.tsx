import { BarChart3, Megaphone, Volume2, TrendingUp } from 'lucide-react'

const features = [
  {
    title: 'All Sizes Business',
    icon: BarChart3,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    title: 'Awesome Results',
    icon: Megaphone,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    title: 'Keep you in the Loop',
    icon: Volume2,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    title: 'Significant ROI',
    icon: TrendingUp,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
] as const

export function GeneratingCustomers() {
  return (
    <section aria-label="Generating customers" className="bg-lavender py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-700 dark:text-gray-100">
            Generating New Customers Via Online Mode
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-5 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-400/10 text-accent-400">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary-700 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
