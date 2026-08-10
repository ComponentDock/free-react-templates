import { Chip } from './Chip'
import { featuredEntries, imgUrl } from '../data'

export function FeaturedStrip() {
  return (
    <section aria-label="Featured posts" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded border border-soft p-4">
        <div className="grid gap-6 md:grid-cols-3">
          {featuredEntries.map((entry) => (
            <a key={entry.seed} href="#home" className="group flex items-center gap-4">
              <img
                src={imgUrl(entry.seed, 220, 150)}
                alt=""
                className="h-[110px] w-[110px] shrink-0 rounded object-cover transition-opacity group-hover:opacity-50"
              />
              <span>
                <Chip label={entry.chipLabel} category={entry.category} />
                <span className="mt-2 block font-serif text-base font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                  {entry.title}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
