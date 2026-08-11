import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  filterBarLabel,
  gallerySectionLabel,
  galleryTiles,
  photoFilters,
  tileLinkLabel,
} from '../data'

const picsum = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

const filterUnderline =
  "after:absolute after:-bottom-1 after:left-0 after:h-1.5 after:w-full after:bg-brand after:content-[''] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleTiles = galleryTiles.filter(
    (tile) => activeFilter === 'all' || tile.tag === activeFilter,
  )

  return (
    <section id="gallery" aria-label={gallerySectionLabel} className="px-1 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          role="group"
          aria-label={filterBarLabel}
          className="mb-10 flex flex-wrap items-center justify-center gap-y-3 text-center"
        >
          {photoFilters.map((filter, index) => (
            <span key={filter.tag} className="inline-flex items-center">
              <button
                type="button"
                aria-pressed={activeFilter === filter.tag}
                onClick={() => setActiveFilter(filter.tag)}
                className={cn(
                  'relative font-display text-sm uppercase transition-colors',
                  activeFilter === filter.tag ? 'text-ink' : 'text-muted hover:text-ink',
                  filterUnderline,
                  activeFilter === filter.tag && 'after:scale-x-100',
                )}
              >
                {filter.label}
              </button>
              {index < photoFilters.length - 1 && (
                <span aria-hidden="true" className="mx-3 text-muted">
                  •
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {visibleTiles.map((tile) => (
            <a
              key={tile.seed}
              href="#"
              aria-label={tileLinkLabel(tile.title)}
              className="group relative mb-3 block overflow-hidden break-inside-avoid"
            >
              <img
                src={picsum(tile.seed, 600, tile.height)}
                alt={tile.title}
                loading="lazy"
                className="w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm uppercase tracking-wide text-white">
                  {tile.category} / {tile.descriptor}
                </span>
                <h3 className="mt-1 font-display text-xl uppercase text-white">{tile.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
