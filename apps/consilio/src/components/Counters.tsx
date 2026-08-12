import { cn } from '@free-react-templates/ui'

interface Counter {
  value: string
  label: string
  highlighted?: boolean
}

const counters: Counter[] = [
  { value: '8705', label: 'Projects Completed' },
  { value: '480', label: 'Active Clients', highlighted: true },
  { value: '626', label: 'Cups of Coffee' },
  { value: '9774', label: 'Happy Clients' },
]

export function Counters() {
  return (
    <section aria-label="Our results" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4">
        {counters.map((counter) => (
          <div
            key={counter.label}
            className={cn(
              'flex flex-col items-center justify-center rounded py-10 text-center shadow-sm',
              counter.highlighted
                ? 'bg-accent text-white'
                : 'bg-gray-50 text-brand-deep dark:bg-gray-900 dark:text-white',
            )}
          >
            <span className="font-display text-4xl font-bold">{counter.value}</span>
            <span
              className={cn(
                'mt-2 text-sm font-medium',
                counter.highlighted ? 'text-white' : 'text-gray-500 dark:text-gray-400',
              )}
            >
              {counter.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
