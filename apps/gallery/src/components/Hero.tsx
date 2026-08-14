import { cn } from '@free-react-templates/ui'
import { filters, type Filter } from '../data'

interface HeroProps {
  activeFilter: Filter
  onFilterChange: (filter: Filter) => void
}

export function Hero({ activeFilter, onFilterChange }: HeroProps) {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="mx-auto max-w-6xl px-4 pb-10 pt-16 text-center sm:px-6"
    >
      <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl dark:text-white">
        Simple and clean portfolio to showcase your{' '}
        <span className="text-primary-500 dark:text-primary-400">work</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-base italic text-smoke">
        Vivamus fermentum, augue a gravida gravida, odio mi consequat nisl, vitae tempor justo augue
        ac metus. Nullam at lorem eget justo porta vehicula.
      </p>

      <div
        role="group"
        aria-label="Portfolio filters"
        className="mt-9 flex flex-wrap items-center justify-center gap-2"
      >
        {filters.map((filter) => {
          const active = filter === activeFilter
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={active}
              onClick={() => onFilterChange(filter)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                active
                  ? 'bg-primary-500 text-white hover:bg-primary-600 dark:hover:bg-primary-400'
                  : 'border border-line bg-white text-gray-600 hover:border-primary-500 hover:text-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-400 dark:hover:text-primary-400',
              )}
            >
              {filter}
            </button>
          )
        })}
      </div>
    </section>
  )
}
