import type { Listing } from '../data/listings'
import { ListingCard } from './ListingCard'

interface ListingGridProps {
  listings: readonly Listing[]
  savedIds: readonly string[]
  onToggle: (listing: Listing) => void
}

/**
 * Three tracks of at least 290 px, gap 24, no column breakpoint: the grid
 * decides how many cards fit and the page never scrolls sideways because the
 * floor is wrapped in `min(100%, …)`. Rows stretch, so all cards in a row
 * share one height without any of them declaring one.
 */
export function ListingGrid({ listings, savedIds, onToggle }: ListingGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-6">
      {listings.map((listing, index) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          saved={savedIds.includes(listing.id)}
          eager={index < 2}
          onToggle={() => onToggle(listing)}
        />
      ))}
    </div>
  )
}
