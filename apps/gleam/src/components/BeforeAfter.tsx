import { useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { Reveal } from './Reveal'

const comparisons = [
  {
    title: 'Kitchen Deep Clean',
    before: 'https://picsum.photos/seed/gleam-1/800/500',
    after: 'https://picsum.photos/seed/gleam-2/800/500',
    alt: 'Kitchen after a deep clean',
  },
  {
    title: 'Bathroom Restoration',
    before: 'https://picsum.photos/seed/gleam-3/800/500',
    after: 'https://picsum.photos/seed/gleam-4/800/500',
    alt: 'Bathroom after restoration',
  },
] as const

function ComparisonCard({ comparison }: { comparison: (typeof comparisons)[number] }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="relative aspect-[8/5] select-none overflow-hidden">
        <img
          src={comparison.after}
          alt={comparison.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img
            src={comparison.before}
            alt={`${comparison.alt} (before)`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-gray-950/70 px-3 py-1 text-xs font-bold text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-primary-600/90 px-3 py-1 text-xs font-bold text-white">
          After
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`${comparison.title} comparison slider`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-md" />
          <span className="absolute top-1/2 -ml-4 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white shadow-md">
            <MoveHorizontal className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">{comparison.title}</h3>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
          Drag to compare
        </span>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600">
            Results
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            See the Difference
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Real results from our cleaning professionals that showcase the quality of our work.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {comparisons.map((comparison, index) => (
            <Reveal key={comparison.title} delay={index * 100}>
              <ComparisonCard comparison={comparison} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
