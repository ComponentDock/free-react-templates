import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { reviews } from '../data'

/** Photo-background testimonial carousel: avatar, star rating, italic
 *  quote and name, with circular dots and client-side cycling. */
export function Reviews() {
  const [index, setIndex] = useState(0)
  const current = reviews[index]!

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % reviews.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-[120px]"
      style={{ backgroundImage: `url(https://picsum.photos/id/1080/1600/900)` }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <img
          src={current.avatar}
          alt=""
          loading="lazy"
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />
        <div className="mt-4 flex justify-center gap-1" aria-label={`${5} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, starIndex) => (
            <Star key={starIndex} className="h-4 w-4 fill-star text-star" aria-hidden="true" />
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-[555px] font-light text-white/95 italic">
          {current.quote}
        </p>
        <h4 className="mt-6 text-lg font-semibold">{current.name}</h4>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((review, reviewIndex) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setIndex(reviewIndex)}
              aria-label={`Show review from ${review.name}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                reviewIndex === index ? 'bg-brand' : 'bg-[rgba(244,47,44,0.2)]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
