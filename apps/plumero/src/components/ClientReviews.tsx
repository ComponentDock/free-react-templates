import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    avatar: 'https://picsum.photos/seed/plumavatar1/80/80',
    quote: 'These pillows changed the way I sleep. Absolutely love the quality!',
    name: 'Sarah Johnson',
  },
  {
    avatar: 'https://picsum.photos/seed/plumavatar2/80/80',
    quote: "Best purchase I've made this year. So comfortable and well-made.",
    name: 'Michael Chen',
  },
  {
    avatar: 'https://picsum.photos/seed/plumavatar3/80/80',
    quote: 'I bought these for the whole family. Everyone loves them!',
    name: 'Emily Davis',
  },
] as const

export function ClientReviews() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1))

  const review = reviews[current]!

  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-white sm:px-6">
        <h2 className="mb-10 font-heading text-3xl font-bold sm:text-4xl">Client Reviews</h2>
        <div className="relative">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={review.avatar}
              alt={review.name}
              className="h-20 w-20 rounded-full border-4 border-white object-cover"
            />
            <blockquote className="max-w-2xl text-lg italic leading-relaxed">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <p className="font-heading text-xl font-semibold">{review.name}</p>
          </div>
          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous review"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === current ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
