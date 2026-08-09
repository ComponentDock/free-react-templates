import { useState } from 'react'
import { Users } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

type Category = 'guys' | 'girls' | 'co-ed'

const chips = [
  { label: 'Guys Groups', value: 'guys' },
  { label: 'Girls Groups', value: 'girls' },
  { label: 'Co-ed Groups', value: 'co-ed' },
] as const

interface Group {
  name: string
  category: Category
  blurb: string
  schedule: string
  spots: string
  image: string
}

const groups: Group[] = [
  {
    name: 'The Forge',
    category: 'guys',
    blurb: 'High school guys diving deep into what it means to be a man of God.',
    schedule: 'Tuesdays · 7:00 PM',
    spots: '3 spots',
    image: 'https://picsum.photos/seed/ignite-4/600/400',
  },
  {
    name: 'Bloom',
    category: 'girls',
    blurb: 'High school girls finding their identity and worth in Christ.',
    schedule: 'Thursdays · 6:30 PM',
    spots: '5 spots',
    image: 'https://picsum.photos/seed/ignite-5/600/400',
  },
  {
    name: 'Foundation',
    category: 'co-ed',
    blurb: 'Middle schoolers building a strong faith foundation together.',
    schedule: 'Sundays · 4:00 PM',
    spots: 'Open',
    image: 'https://picsum.photos/seed/ignite-6/600/400',
  },
  {
    name: 'Band of Brothers',
    category: 'guys',
    blurb: 'Accountability, adventure, and authentic faith for junior/senior guys.',
    schedule: 'Mondays · 7:30 PM',
    spots: '2 spots',
    image: 'https://picsum.photos/seed/ignite-7/600/400',
  },
]

export function Groups() {
  const [active, setActive] = useState<Category | null>(null)

  const visible = active ? groups.filter((group) => group.category === active) : groups

  return (
    <section id="groups" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
            Find Your Crew
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-gray-900 dark:text-white md:text-5xl">
            Small Groups
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Life change happens in circles, not rows. Our small groups meet weekly in homes and on
            campus for real conversations, prayer, and community. This is where lasting friendships
            are made.
          </p>
        </div>

        {/* Filter chips */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
          role="group"
          aria-label="Filter groups"
        >
          {chips.map((chip) => {
            const selected = active === chip.value
            return (
              <button
                key={chip.value}
                type="button"
                onClick={() => setActive(selected ? null : chip.value)}
                aria-pressed={selected}
                className={cn(
                  'rounded-full border px-5 py-2 text-sm font-semibold transition-colors',
                  selected
                    ? 'border-primary-500 bg-primary-500 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-primary-400 hover:text-primary-600 dark:border-navy-700 dark:bg-navy-800 dark:text-gray-300 dark:hover:border-primary-500',
                )}
              >
                {chip.label}
              </button>
            )
          })}
        </div>

        {/* Group cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((group) => (
            <article
              key={group.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-navy-700 dark:bg-navy-800"
            >
              <div className="relative">
                <img
                  src={group.image}
                  alt={group.name}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {group.spots}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl tracking-wide text-gray-900 dark:text-white">
                  {group.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {group.blurb}
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  {group.schedule}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#events"
            className="rounded-full bg-accent-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
          >
            Find Your Group
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
