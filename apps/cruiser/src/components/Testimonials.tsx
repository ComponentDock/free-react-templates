import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface TestimonialsProps {
  className?: string
}

interface Testimonial {
  quote: string
  photo: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Cruiser transformed my skating completely. The coaching is world-class and the community keeps me motivated every single day.',
    photo: 'https://picsum.photos/seed/cruiser-11/200/200',
    name: 'Tyler Brooks',
    role: 'Street Skater',
  },
  {
    quote:
      'The group sessions are incredible. I have made lifelong friends and improved more in 3 months than I did in 3 years alone.',
    photo: 'https://picsum.photos/seed/cruiser-12/200/200',
    name: 'Emma Walsh',
    role: 'Park Skater',
  },
  {
    quote:
      'The video analysis sessions are a game-changer. Seeing my form broken down helped me nail tricks I had been struggling with for months.',
    photo: 'https://picsum.photos/seed/cruiser-13/200/200',
    name: 'Derek Simmons',
    role: 'Vert Skater',
  },
  {
    quote:
      'Best decision I ever made was signing up for the Premium plan. The personalized coaching and community events are worth every penny.',
    photo: 'https://picsum.photos/seed/cruiser-14/200/200',
    name: 'Lisa Tanaka',
    role: 'Freestyle Skater',
  },
]

export function Testimonials({ className = '' }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const t = testimonials[current]!

  return (
    <section className={`py-20 bg-bg-dark ${className}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 text-brand">
          <Quote size={48} className="mx-auto opacity-30" />
        </div>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic mb-8">
          &ldquo;{t.quote}&rdquo;
        </p>
        <img
          src={t.photo}
          alt={t.name}
          className="mx-auto h-16 w-16 rounded-full object-cover border-2 border-brand mb-3"
        />
        <p className="font-oswald text-lg font-semibold uppercase tracking-wider text-white">
          {t.name}
        </p>
        <p className="text-sm text-muted">{t.role}</p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="bg-surface hover:bg-brand p-3 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="bg-surface hover:bg-brand p-3 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
