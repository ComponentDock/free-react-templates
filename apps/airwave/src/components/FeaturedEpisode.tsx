import { Play } from 'lucide-react'

const tags = ['Startup', 'Bootstrapping', 'Growth'] as const

export function FeaturedEpisode() {
  return (
    <section
      aria-label="Latest episode"
      className="border-y border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Latest Episode
        </p>
        <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          EP. 247 · Feb 18, 2026 · 58 min
        </p>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Building a $100M Company with No Funding
            </h2>
            <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
              with Sarah Chen, Founder of TechFlow
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Sarah shares the story of how she bootstrapped TechFlow from a side project into a
              nine-figure business — without a single dollar of venture funding — and the hard-won
              lessons founders can steal along the way.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Play episode"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-500"
          >
            <Play className="ml-0.5 h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
