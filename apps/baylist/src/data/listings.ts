export type StatusVariant = 'sale' | 'new' | 'open'

export interface ListingStatus {
  readonly label: string
  readonly variant: StatusVariant
}

export interface ListingSpecs {
  readonly beds: string
  readonly baths: string
  readonly floor: string
}

export interface ListingImage {
  readonly src: string
  readonly alt: string
}

export interface Listing {
  readonly id: string
  readonly price: string
  readonly address: string
  readonly href: string
  readonly area: string
  readonly status: ListingStatus
  readonly photos: number
  readonly specs: ListingSpecs
  readonly image: ListingImage
  readonly initiallySaved: boolean
}

/** The repository's standing attribution line. */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/**
 * The three badge treatments: an ink plate for an ordinary sale, the one warm
 * gold plate for a listing that is new, and a white plate for an open house.
 * The label carries the meaning; the colour only ranks it.
 */
export const STATUS_STYLES: Record<StatusVariant, string> = {
  sale: 'bg-ink text-white',
  new: 'bg-gold-soft text-gold-ink',
  open: 'bg-white text-ink',
}

/**
 * Three listings on one bay. The copy is ordered the way a buyer reads a
 * listing — price, address, area, then the three measurements — and every
 * address points at an in-page target, so no card ships a dead hash.
 */
export const LISTINGS: readonly Listing[] = [
  {
    id: 'listing-14-seaview-terrace',
    price: '$1,290,000',
    address: '14 Seaview Terrace',
    href: '#listing-14-seaview-terrace',
    area: 'Coral Bay North · 5 min to the beach',
    status: { label: 'For sale', variant: 'sale' },
    photos: 24,
    specs: { beds: '4', baths: '3', floor: '2,450' },
    image: {
      src: 'https://picsum.photos/seed/baylist-1/800/540',
      alt: 'White two-storey villa with large windows and a pool',
    },
    initiallySaved: false,
  },
  {
    id: 'listing-7-banyan-lane',
    price: '$865,000',
    address: '7 Banyan Lane',
    href: '#listing-7-banyan-lane',
    area: 'Old Town · quiet cul-de-sac',
    status: { label: 'New listing', variant: 'new' },
    photos: 18,
    specs: { beds: '3', baths: '2', floor: '1,720' },
    image: {
      src: 'https://picsum.photos/seed/baylist-2/800/540',
      alt: 'Timber house at dusk standing under a banyan tree',
    },
    initiallySaved: true,
  },
  {
    id: 'listing-22-lagoon-drive',
    price: '$2,150,000',
    address: '22 Lagoon Drive',
    href: '#listing-22-lagoon-drive',
    area: 'Harbour Point · private jetty',
    status: { label: 'Open house Sat', variant: 'open' },
    photos: 31,
    specs: { beds: '5', baths: '4', floor: '3,380' },
    image: {
      src: 'https://picsum.photos/seed/baylist-3/800/540',
      alt: 'White balcony house overlooking a turquoise pool',
    },
    initiallySaved: false,
  },
]

/** The page opens with one listing already on the saved list. */
export function initialSavedIds(): string[] {
  return LISTINGS.filter((listing) => listing.initiallySaved).map((listing) => listing.id)
}
