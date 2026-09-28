import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Blogger',
    quote:
      'Crustly has completely changed my expectations for artisan bakeries. The Honey Chocolate Pie is unlike anything I have ever tasted — a true masterpiece.',
    avatar: 'https://picsum.photos/seed/crustly-test-1/100/100',
  },
  {
    name: 'James Rodriguez',
    role: 'Restaurant Critic',
    quote:
      'From the warm ambiance to the perfectly crafted dishes, Crustly delivers an unforgettable dining experience every single time.',
    avatar: 'https://picsum.photos/seed/crustly-test-2/100/100',
  },
  {
    name: 'Emily Chen',
    role: 'Loyal Customer',
    quote:
      'I visit Crustly at least twice a week. The fresh bread, the pasta carbonara — everything is consistently outstanding. This is my go-to place.',
    avatar: 'https://picsum.photos/seed/crustly-test-3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const testimonial = testimonials[current]!

  return (
    <section className="relative py-20">
      {/* Background image with overlay */}
      <img
        src="https://picsum.photos/seed/crustly-test-bg/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        {/* Header */}
        <h2 className="mb-12 font-display text-3xl font-bold text-white md:text-4xl">
          What Our Customers Say
        </h2>

        {/* Testimonial card */}
        <div className="flex flex-col items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="mb-6 h-20 w-20 rounded-full border-4 border-brand object-cover"
          />
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-300 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <h3 className="font-display text-xl font-bold text-white">{testimonial.name}</h3>
          <p className="text-sm font-medium text-brand">{testimonial.role}</p>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
