import type { AnimeShow } from '../data'
import { ShowCard } from './ShowCard'

/* ShowGrid recreated from the source template's content sections:
   heading with red left accent bar, optional "View All" link, and
   a responsive grid of ShowCard items. */

interface ShowGridProps {
  title: string
  shows: readonly AnimeShow[]
  viewAll?: boolean
}

export function ShowGrid({ title, shows, viewAll = false }: ShowGridProps) {
  return (
    <section className="py-8">
      {/* Section heading */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-brand" aria-hidden="true" />
          <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-text-white">
            {title}
          </h2>
        </div>
        {viewAll ? (
          <a
            href="#trending"
            className="text-xs font-medium uppercase tracking-wider text-text-muted transition-colors hover:text-brand"
          >
            View All
          </a>
        ) : null}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shows.map((show) => (
          <ShowCard key={show.title} show={show} />
        ))}
      </div>
    </section>
  )
}
