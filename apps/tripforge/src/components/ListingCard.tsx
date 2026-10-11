import type { LucideIcon } from 'lucide-react'
import { MapPin } from 'lucide-react'
import type { ListingItem } from '../data/content'

interface ListingCardProps {
  item: ListingItem
  image: string
  icon: LucideIcon
}

/* Shared listing card: photo with a circular hover badge, title, star rating,
   optional price / duration chip, blurb, and a location + action footer. */
export function ListingCard({ item, image, icon: Icon }: ListingCardProps) {
  return (
    <article className="listing-card flex flex-col">
      <div className="listing-media">
        <img src={image} alt={item.title} />
        <div className="hover-circle">
          <span className="hover-circle-inner">
            <Icon aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-medium">
            <a href="#listings" className="text-heading hover:text-coral">
              {item.title}
            </a>
          </h3>
          {item.price ? (
            <p className="price">
              {item.price}
              {item.perNight ? <span className="text-xs"> /night</span> : null}
            </p>
          ) : null}
        </div>

        <p className="rating mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className={star <= item.rating ? undefined : 'rating-empty'}
            >
              <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
            </svg>
          ))}
          {item.rating} Rating
        </p>

        <p className="mt-3 text-muted">{item.blurb}</p>

        {item.days ? <p className="days-chip mt-4 self-start">{item.days}</p> : null}

        <hr className="card-divider" />

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="loc">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {item.location}
          </span>
          <a href="#listings" className="text-sm font-medium text-coral hover:underline">
            {item.action}
          </a>
        </div>
      </div>
    </article>
  )
}
