import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"The smallest act of kindness is worth more than the grandest intention. Cuddle has transformed how our community supports those in need."',
    author: 'Sarah Johnson',
    role: 'Community Leader',
    avatar: 'https://picsum.photos/seed/cuddle-test-1/80/80',
  },
  {
    id: 2,
    quote:
      '"Working with this organization has been life-changing. The transparency and impact tracking makes every donation feel meaningful."',
    author: 'Michael Chen',
    role: 'Monthly Donor',
    avatar: 'https://picsum.photos/seed/cuddle-test-2/80/80',
  },
  {
    id: 3,
    quote:
      '"As a volunteer, I\'ve seen firsthand how every dollar makes a difference. The team\'s dedication is truly inspiring."',
    author: 'Emily Rodriguez',
    role: 'Volunteer Coordinator',
    avatar: 'https://picsum.photos/seed/cuddle-test-3/80/80',
  },
] as const

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : testimonials.length - 1))
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i < testimonials.length - 1 ? i + 1 : 0))
  }, [])

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(goNext, 6000)
    return () => clearInterval(interval)
  }, [goNext])

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/cuddle-testimonials/1920/600"
          alt="Testimonial background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-teal/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center text-white">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Testimonial
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            What People Says
          </h2>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg hover:bg-brand hover:text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg hover:bg-brand hover:text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === currentIndex ? 'true' : 'false'}
                className={`h-2 w-8 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-brand' : 'bg-white/30 hover:bg-brand/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="flex w-full flex-col items-center text-center px-4"
      style={{ minWidth: '100%' }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-brand mb-6">
        <Star className="h-6 w-6" aria-hidden="true" />
      </div>
      <blockquote className="max-w-3xl text-lg leading-relaxed text-white/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-8 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.author}`}
          className="h-12 w-12 rounded-full object-cover border-2 border-brand"
        />
        <div className="text-left">
          <cite className="font-display text-lg font-bold text-white block">
            {testimonial.author}
          </cite>
          <span className="text-sm text-white/70">{testimonial.role}</span>
        </div>
      </div>
    </article>
  )
}
