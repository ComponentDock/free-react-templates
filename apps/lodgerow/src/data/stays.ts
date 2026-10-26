/** Glyph roles the amenity chips may use — one visual idea per chip. */
export type AmenityIcon = 'waves' | 'wifi' | 'house' | 'coffee' | 'sun'

/** Badge state per listing: a favourite pill, a discount pill, or nothing. */
export type Badge = 'favourite' | 'deal' | null

export interface Amenity {
  icon: AmenityIcon
  label: string
}

export interface Stay {
  /** Slug-ish key for React lists and test ids. */
  id: string
  /** Location line, teal, 14 px / 600. */
  place: string
  /** Listing title — the card's only link, and its h2. */
  title: string
  /** Rating as copy: 4.92. */
  rating: string
  /** Review count as copy, brackets included: (128 reviews). */
  reviews: string
  /** Exactly three chips in the reference; the model does not enforce it. */
  amenities: readonly Amenity[]
  /** Nightly rate as copy, currency symbol included: €214. */
  rate: string
  /** Total line as copy — never computed from rate × nights. */
  total: string
  /** Struck original total, present only on the discounted listing. */
  totalWas?: string
  badge: Badge
  image: string
  /** Scene description for alt text — never the listing title. */
  alt: string
}

/**
 * The three listings, verbatim from the reference. The totals are copy: only
 * the third satisfies rate × 5, so nothing here is arithmetic.
 */
export const STAYS: readonly Stay[] = [
  {
    id: 'hvar',
    place: 'Hvar, Croatia',
    title: 'Cedar House with Pool and Sea View',
    rating: '4.92',
    reviews: '(128 reviews)',
    amenities: [
      { icon: 'waves', label: 'Private pool' },
      { icon: 'wifi', label: 'Fast wifi' },
      { icon: 'house', label: '3 bedrooms' },
    ],
    rate: '€214',
    total: '€1,180 total for 5 nights',
    badge: 'favourite',
    image: 'https://picsum.photos/seed/lodgerow-1/700/560',
    alt: 'Timber lodge with a pool and sun loungers at dusk',
  },
  {
    id: 'ubud',
    place: 'Ubud, Bali',
    title: 'Garden Villa near the Rice Terraces',
    rating: '4.81',
    reviews: '(342 reviews)',
    amenities: [
      { icon: 'coffee', label: 'Breakfast' },
      { icon: 'waves', label: 'Shared pool' },
      { icon: 'house', label: '1 bedroom' },
    ],
    rate: '€96',
    total: '€520 total for 5 nights',
    badge: null,
    image: 'https://picsum.photos/seed/lodgerow-2/700/560',
    alt: 'Pool surrounded by palm trees and thatched villas',
  },
  {
    id: 'oia',
    place: 'Oia, Santorini',
    title: 'Cliffside Studio with Caldera Terrace',
    rating: '4.88',
    reviews: '(76 reviews)',
    amenities: [
      { icon: 'sun', label: 'Sunset terrace' },
      { icon: 'wifi', label: 'Fast wifi' },
      { icon: 'house', label: 'Studio' },
    ],
    rate: '€168',
    total: '€840 total for 5 nights',
    totalWas: '€990',
    badge: 'deal',
    image: 'https://picsum.photos/seed/lodgerow-3/700/560',
    alt: 'Whitewashed steps leading down to a deep blue sea',
  },
]
