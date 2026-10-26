import { ArrowRight, Coffee, House, MapPin, Star, Sun, Waves, Wifi } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { Amenity, AmenityIcon, Badge, Stay } from '../data/stays'

/** One glyph per amenity idea; the chip text carries the meaning on its own. */
const AMENITY_ICONS: Record<AmenityIcon, LucideIcon> = {
  waves: Waves,
  wifi: Wifi,
  house: House,
  coffee: Coffee,
  sun: Sun,
}

const BADGE_LABEL: Record<Exclude<Badge, null>, string> = {
  favourite: 'Guest favourite',
  deal: '15% off this week',
}

/** The deal pill is a modifier of the same span, not a second component. */
const BADGE_TONE: Record<Exclude<Badge, null>, string> = {
  favourite: 'bg-white text-ink',
  deal: 'bg-deal text-white',
}

interface AmenityChipProps {
  amenity: Amenity
}

function AmenityChip({ amenity }: AmenityChipProps) {
  const Icon = AMENITY_ICONS[amenity.icon]

  return (
    <li className="inline-flex items-center gap-1.5 rounded-chip bg-chip-bg px-[11px] py-1.5 text-[13.5px] font-medium text-chip-ink">
      <Icon
        width={16}
        height={16}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      />
      {amenity.label}
    </li>
  )
}

interface PriceBlockProps {
  stay: Stay
}

/**
 * Two lines of price copy: the nightly rate inline with the word "night", then
 * the total as a block. The discounted listing puts its struck original inside
 * that same total line — it is one sentence, not a third line — and an
 * `sr-only` "was" gives the `<del>` the label screen readers otherwise lose.
 */
function PriceBlock({ stay }: PriceBlockProps) {
  return (
    <p className="m-0 text-[15px] text-muted">
      <strong className="text-[24px] font-bold tracking-[-0.02em] text-ink">{stay.rate}</strong>{' '}
      night
      <span className="block text-[13.5px]">
        {stay.totalWas ? (
          <>
            <span className="sr-only">was </span>
            <del className="text-muted">{stay.totalWas}</del>{' '}
          </>
        ) : null}
        {stay.total}
      </span>
    </p>
  )
}

interface StayCardProps {
  stay: Stay
}

/**
 * One listing: a 5/7 photo-and-copy split that becomes a stacked photo card at
 * 640, with the body padding driven by a container query on the card itself so
 * it reacts to the card's width rather than the viewport's. The card is a
 * `group` and the title link paints an `::after` overlay across it, so hovering
 * anywhere zooms the photo, changes the border, shifts the pill's gap and tints
 * its fill — while the only focusable element stays the single title anchor.
 */
export function StayCard({ stay }: StayCardProps) {
  return (
    <article
      className={cn(
        'group relative @container grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] overflow-hidden',
        'rounded-card border border-card-line bg-white text-[15px] leading-[1.5] text-ink',
        'transition-[box-shadow,border-color] duration-300 motion-reduce:transition-none',
        'hover:border-card-line-hover hover:shadow-[0_20px_40px_-28px_rgba(16,35,31,0.45)]',
        'focus-within:shadow-[0_0_0_3px_#0f766e]',
        '[@media(width<=640px)]:grid-cols-1',
      )}
    >
      <div className="relative min-h-[220px] bg-media-ground [@media(width<=640px)]:aspect-[16/10] [@media(width<=640px)]:min-h-0">
        <img
          src={stay.image}
          alt={stay.alt}
          width={700}
          height={560}
          loading="lazy"
          decoding="async"
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms]',
            'group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100',
          )}
        />
        {stay.badge === null ? null : (
          <span
            className={cn(
              'absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 text-[13px] font-semibold',
              'shadow-[0_4px_14px_rgba(0,0,0,0.15)]',
              BADGE_TONE[stay.badge],
            )}
          >
            {BADGE_LABEL[stay.badge]}
          </span>
        )}
      </div>

      <div
        className={cn(
          'flex flex-col px-[26px] py-[22px]',
          '[@container(width<=600px)]:px-[18px] [@container(width<=600px)]:pt-[18px] [@container(width<=600px)]:pb-[20px]',
        )}
      >
        <p className="m-0 flex items-center gap-1.5 text-[14px] font-semibold text-accent">
          <MapPin width={16} height={16} fill="none" strokeWidth={2} aria-hidden="true" />
          {stay.place}
        </p>

        <h2 className="mt-1 mb-1.5 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em]">
          <a
            href="#"
            className={cn(
              'text-inherit no-underline after:absolute after:inset-0 after:z-[1]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            )}
          >
            {stay.title}
          </a>
        </h2>

        <p className="m-0 flex items-center gap-[5px] text-[14.5px]">
          <Star
            width={16}
            height={16}
            fill="currentColor"
            strokeWidth={0}
            className="text-ink"
            aria-hidden="true"
          />
          <strong>{stay.rating}</strong>
          <span className="text-muted">{stay.reviews}</span>
        </p>

        <ul aria-label="Amenities" className="mt-4 mb-[18px] flex list-none flex-wrap gap-2 p-0">
          {stay.amenities.map((amenity) => (
            <AmenityChip key={amenity.label} amenity={amenity} />
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3.5 border-t border-card-line pt-4">
          <PriceBlock stay={stay} />
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center gap-2 rounded-cta bg-accent px-[18px] py-[11px]',
              'text-[15px] font-semibold text-white transition-[background-color,gap] duration-200',
              'group-hover:gap-3 group-hover:bg-accent-hover motion-reduce:transition-none',
            )}
          >
            View stay
            <ArrowRight width={18} height={18} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  )
}
