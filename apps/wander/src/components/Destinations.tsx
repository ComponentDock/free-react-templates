import { Star } from 'lucide-react'
import { destinations } from '../data'

/* Reference: section.visit-section — centered 32px heading + lead, then
   FOUR visit cards (col-lg-3): shadowed image, 20px title link (teal on
   hover), an 18px teal star row (half star for .5 ratings) and an italic
   #CCC review count. */
function StarRating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fill = Math.min(Math.max(rating - index, 0), 1)
    if (fill === 1) {
      return (
        <Star key={index} size={18} className="text-brand" fill="currentColor" aria-hidden="true" />
      )
    }
    if (fill === 0.5) {
      return (
        <span key={index} className="relative inline-block h-[18px] w-[18px]" aria-hidden="true">
          <Star size={18} className="absolute inset-0 text-brand" fill="none" />
          <span className="absolute inset-0 w-1/2 overflow-hidden">
            <Star size={18} className="text-brand" fill="currentColor" />
          </span>
        </span>
      )
    }
    return <Star key={index} size={18} className="text-brand" fill="none" aria-hidden="true" />
  })

  return (
    <div role="img" aria-label={`Rated ${rating} out of 5`} className="flex items-center gap-1">
      {stars}
    </div>
  )
}

export function Destinations() {
  return (
    <section aria-label="Top destinations" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-[32px] text-ink">{destinations.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center">{destinations.lead}</p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.places.map((place) => (
            <div key={place.title} className="text-center">
              <img
                src={place.photo}
                alt={place.alt}
                loading="lazy"
                className="mb-[15px] w-full shadow-[0_2px_3px_rgba(0,0,0,0.2)]"
              />
              <h3 className="mb-1 text-[20px]">
                <a href="#gallery" className="text-ink transition-colors hover:text-brand">
                  {place.title}
                </a>
              </h3>
              <div className="mt-2 flex items-center justify-center">
                <StarRating rating={place.rating} />
              </div>
              <em className="mt-2 block text-[#ccc]">{place.reviews}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
