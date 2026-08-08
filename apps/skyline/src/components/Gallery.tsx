import { Bath, BedDouble, Heart, Ruler } from 'lucide-react'

const listings = [
  {
    title: 'Home Apartment Detached House For Sale',
    beds: '4 Beds',
    baths: '3 Baths',
    sqft: '2400 Sq Ft',
  },
  {
    title: 'Penthouse Residence With Private Terrace',
    beds: '3 Beds',
    baths: '2 Baths',
    sqft: '1850 Sq Ft',
  },
  {
    title: 'Garden Villa In The Quiet Suburbs',
    beds: '5 Beds',
    baths: '4 Baths',
    sqft: '3200 Sq Ft',
  },
  { title: 'Downtown Studio Near The Metro', beds: '2 Beds', baths: '2 Baths', sqft: '1200 Sq Ft' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Featured</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Luxuries Apartment
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((listing, index) => (
            <article key={listing.title} className="group">
              <div className="relative overflow-hidden rounded-[5px]">
                <img
                  src={`https://picsum.photos/seed/skyline-gallery-${index + 1}/700/520`}
                  alt={listing.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold leading-snug text-ink dark:text-white">
                {listing.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wide text-mist dark:text-gray-400">
                <span className="inline-flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4 text-brand" aria-hidden="true" />
                  {listing.beds}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Bath className="h-4 w-4 text-brand" aria-hidden="true" />
                  {listing.baths}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Ruler className="h-4 w-4 text-brand" aria-hidden="true" />
                  {listing.sqft}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
