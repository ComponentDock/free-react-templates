import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  name: string
  position: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Dennis Green',
    position: 'Guests from Italy',
    text: 'Absolutely wonderful dining experience! The food was outstanding and the service was impeccable. We felt truly welcomed and will definitely come back again.',
    rating: 4.5,
  },
  {
    name: 'Emily Carter',
    position: 'Food Blogger',
    text: 'Bistrox has set a new standard for fine dining in the city. Every dish was a masterpiece, beautifully presented and bursting with flavor.',
    rating: 4.5,
  },
  {
    name: 'Michael Brown',
    position: 'Local Business Owner',
    text: 'I host all my business dinners at Bistrox. The atmosphere, food quality, and professional service make it the perfect choice for any occasion.',
    rating: 4.0,
  },
]

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={18}
        className={
          i <= Math.floor(rating)
            ? 'text-brand fill-brand'
            : i - 0.5 <= rating
              ? 'text-brand fill-brand/50'
              : 'text-gray-300'
        }
      />,
    )
  }
  return <div className="flex gap-1">{stars}</div>
}

export function TestimonialSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]!

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-6">
          <StarRating rating={t.rating} />
        </div>
        <p className="text-text-muted text-lg italic mb-6 leading-relaxed">
          &ldquo;{t.text}&rdquo;
        </p>
        <h3 className="text-xl font-bold text-text-dark font-heading">{t.name}</h3>
        <p className="text-text-muted text-sm">{t.position}</p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full bg-white hover:bg-gray-200 transition-colors shadow"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-full bg-white hover:bg-gray-200 transition-colors shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
