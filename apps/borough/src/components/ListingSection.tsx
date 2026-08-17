import type { Listing } from '../data'
import { ListingCard } from './ListingCard'

interface ListingSectionProps {
  subheading: string
  title: string
  listings: Listing[]
}

export function ListingSection({ subheading, title, listings }: ListingSectionProps) {
  return (
    <section aria-label={title} className="bg-mist px-4 py-28 sm:px-6" id="listing">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-[13px] font-bold uppercase text-brand">{subheading}</p>
          <h2 className="mt-1 text-[28px] font-bold leading-tight text-neutral-900 lg:text-[50px]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((listing) => (
            <ListingCard key={listing.title} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}
