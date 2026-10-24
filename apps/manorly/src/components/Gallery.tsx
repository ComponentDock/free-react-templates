import { useState } from 'react'
import { Bath, BedDouble, Heart, Maximize } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const apartments = [
  { name: 'Riverside Duplex', seed: 'manorly-gallery-1' },
  { name: 'Old Town Loft', seed: 'manorly-gallery-2' },
  { name: 'Garden Terrace Flat', seed: 'manorly-gallery-3' },
  { name: 'Skyline Penthouse', seed: 'manorly-gallery-4' },
]

const stats = [
  { Icon: BedDouble, value: '04', label: 'beds' },
  { Icon: Bath, value: '03', label: 'baths' },
  { Icon: Maximize, value: '2400', label: 'sqft' },
]

function ApartmentCard({ name, seed }: { name: string; seed: string }) {
  const [liked, setLiked] = useState(false)

  return (
    <li className="group">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${seed}/720/540`}
          alt={`${name} apartment exterior`}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          type="button"
          aria-pressed={liked}
          aria-label={liked ? `Unlike ${name}` : `Like ${name}`}
          onClick={() => setLiked((current) => !current)}
          className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink transition-colors hover:bg-brand hover:text-white"
        >
          <Heart
            className={cn('h-4 w-4', liked ? 'fill-brand text-brand' : 'text-ink')}
            aria-hidden="true"
          />
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
      <div className="bg-panel px-6 py-5">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <p className="mt-1 text-sm text-muted">Home Apartment · Detached House For Sale</p>
        <ul className="mt-4 flex items-center gap-6 text-sm text-muted">
          {stats.map(({ Icon, value, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>
                {value} {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          <span>Luxuries</span>
          <span className="h-px w-12 bg-ink/30" aria-hidden="true" />
          <span>Apartment</span>
        </p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.name} {...apartment} />
          ))}
        </ul>
      </div>
    </section>
  )
}
