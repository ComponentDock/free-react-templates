import { Star, StarHalf } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote:
      'An exceptional creative partner who brings vision and precision to every project. Working together was a truly transformative experience.',
    author: 'Fanny Spencer',
    rating: 4.5,
  },
  {
    quote:
      'Incredible attention to detail and a deep understanding of design principles. Delivered beyond expectations on every milestone.',
    author: 'Michael Torres',
    rating: 5,
  },
  {
    quote:
      'A talented designer with a rare combination of technical skill and artistic sensibility. Highly recommended for any creative endeavor.',
    author: 'Sarah Chen',
    rating: 4.5,
  },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  return (
    <div className="flex gap-1 text-brand">
      {Array.from({ length: fullStars }, (_, i) => (
        <Star key={`full-${i}`} size={14} fill="currentColor" />
      ))}
      {hasHalf && <StarHalf size={14} fill="currentColor" />}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-[var(--font-heebo)]">Testimonials</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            What clients say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, author, rating }) => (
            <div key={author} className="p-6 rounded-lg bg-bg-light text-center">
              <p className="text-text-secondary italic mb-4 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <h4 className="font-bold font-[var(--font-heebo)] mb-2">{author}</h4>
              <StarRating rating={rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
