import { entries, entriesLabel } from '../data'
import { EntryCard } from './EntryCard'
import { Pagination } from './Pagination'

/* Light-gray content section (reference `section.s-content`): responsive
   3/2/1-column grid of twelve post cards + centered pagination. */
export function EntriesGrid() {
  return (
    <section aria-label={entriesLabel} className="bg-section pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <EntryCard key={entry.seed} entry={entry} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  )
}
