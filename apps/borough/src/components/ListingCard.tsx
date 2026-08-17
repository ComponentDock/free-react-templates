import { Heart, MapPin, Phone, ZoomIn } from 'lucide-react'
import type { Listing } from '../data'

/* Build the tel: href at runtime so no literal phone URI sits in source. */
function telHref(display: string): string {
  return 'tel:' + display.replace(/[^\d+]/g, '')
}

export function ListingCard({ listing }: { listing: Listing }) {
  const Icon = listing.icon
  return (
    <article className="group mb-8 bg-white shadow-[0_5px_21px_-14px_rgba(0,0,0,0.14)]">
      <a
        href={listing.image}
        aria-label={`View photo of ${listing.title}`}
        className="relative block h-[250px] overflow-hidden bg-neutral-100"
      >
        <img
          src={listing.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <ZoomIn aria-hidden="true" className="h-5 w-5 text-brand" />
          </span>
        </span>
      </a>

      <div className="flex flex-col items-center px-5 pb-5 pt-0 text-center">
        <span className="-mt-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand">
          <Icon aria-hidden="true" className="h-[30px] w-[30px] text-white" strokeWidth={1.5} />
        </span>
        <span className="mt-2 text-[12px] font-semibold uppercase tracking-wide text-brand">
          {listing.category}
        </span>
        <h3 className="mt-1 text-[22px] font-semibold leading-snug text-neutral-900">
          {listing.title}
        </h3>
        <ul className="mt-3 space-y-2 text-[14px] text-neutral-600">
          <li className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
            {listing.address}
          </li>
          <li className="flex items-center gap-2">
            <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
            <a href={telHref(listing.phone)} className="hover:text-brand">
              {listing.phone}
            </a>
          </li>
        </ul>
        <div className="mt-4 flex w-full items-center justify-between border-t border-black/10 pt-[15px]">
          <p className="text-[16px] text-[#999999]">
            Review <strong className="font-semibold">{listing.review}</strong>{' '}
            <small>({listing.reviewCount})</small>
          </p>
          <a
            href="#listing"
            aria-label={`Save ${listing.title} to favorites`}
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:text-brand"
          >
            <Heart aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>
  )
}
