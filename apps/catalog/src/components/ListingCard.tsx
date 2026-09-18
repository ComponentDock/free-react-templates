import { Heart, Star } from 'lucide-react'

export interface ListingCardProps {
  image: string
  category: string
  title: string
  address: string
  rating: number
  reviews: number
}

export function ListingCard({
  image,
  category,
  title,
  address,
  rating,
  reviews,
}: ListingCardProps) {
  return (
    <article className="mb-6 flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg md:flex-row">
      {/* Image */}
      <div
        className="h-48 w-full bg-cover bg-center md:h-auto md:w-[230px] md:shrink-0"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={title}
      />

      {/* Content */}
      <div className="relative flex-1 p-5">
        <span className="mb-3 inline-block rounded-full bg-card-bg px-4 py-1 text-xs font-bold text-ink">
          {category}
        </span>

        <button
          aria-label={`Bookmark ${title}`}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 transition hover:bg-red-500 hover:text-white"
        >
          <Heart size={14} />
        </button>

        <h3 className="mb-1 text-base font-bold text-ink">
          <a href="#" className="hover:text-primary-500">
            {title}
          </a>
        </h3>
        <address className="mb-2 text-xs not-italic text-muted">{address}</address>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? 'fill-star text-star' : 'text-gray-300'}
            />
          ))}
          <span className="ml-1 text-xs text-muted">({reviews} Reviews)</span>
        </div>
      </div>
    </article>
  )
}
