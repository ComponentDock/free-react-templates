import { cn } from '@free-react-templates/ui'
import { STATUS_STYLES, type Listing } from '../data/listings'
import { PhotoCount } from './PhotoCount'
import { SaveButton } from './SaveButton'
import { SpecRow } from './SpecRow'

interface ListingCardProps {
  listing: Listing
  saved: boolean
  /** The first two cards in the grid load eagerly; the rest defer. */
  eager: boolean
  onToggle: () => void
}

/**
 * One listing. The photograph owns the top 59 % of the card and the only
 * radius in the card is the card's own 20 px with `overflow: hidden` — the
 * media block stays square so the photo is clipped to the card, never rounded
 * on its own.
 *
 * Everything under the photo is ordered the way a buyer reads a listing:
 * price, address, area, then the three measurements. The address is the card's
 * only link and paints an `inset-0` overlay at `z-1`, which makes the whole
 * card one hit area; the heart sits above it at `z-2`.
 */
export function ListingCard({ listing, saved, eager, onToggle }: ListingCardProps) {
  return (
    <article
      id={listing.id}
      className="relative overflow-hidden rounded-[20px] bg-white text-[15px] leading-[1.45] text-ink shadow-[0_1px_2px_rgba(15,28,46,.06),0_20px_40px_-30px_rgba(15,28,46,.45)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,28,46,.06),0_30px_50px_-30px_rgba(15,28,46,.55)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[3/2] bg-media-ground">
        <img
          src={listing.image.src}
          alt={listing.image.alt}
          width={800}
          height={540}
          fetchPriority={eager ? 'high' : undefined}
          loading={eager ? undefined : 'lazy'}
          decoding={eager ? 'sync' : 'async'}
          className="block h-full w-full object-cover"
        />
        <span
          className={cn(
            'absolute top-3.5 left-3.5 rounded-lg px-3 py-1.5 text-[13px] leading-[1.2] font-bold',
            STATUS_STYLES[listing.status.variant],
          )}
        >
          {listing.status.label}
        </span>
        <SaveButton address={listing.address} saved={saved} onToggle={onToggle} />
        <PhotoCount photos={listing.photos} />
      </div>

      <div className="px-5 pt-[18px] pb-5">
        <p className="m-0 text-[26px] leading-[1.1] font-extrabold tracking-[-.02em]">
          {listing.price}
        </p>
        <h2 className="mt-1.5 mb-0.5 text-[17px] font-bold">
          <a
            href={listing.href}
            className="baylist-card-link text-inherit no-underline after:absolute after:inset-0 after:z-[1] after:rounded-[20px]"
          >
            {listing.address}
          </a>
        </h2>
        <p className="m-0 text-[14.5px] text-muted">{listing.area}</p>
        <SpecRow specs={listing.specs} />
      </div>
    </article>
  )
}
