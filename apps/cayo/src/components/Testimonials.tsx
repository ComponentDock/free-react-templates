import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'John Smith',
    position: 'Business Traveler',
    quote:
      'Absolutely stunning hotel with exceptional service. The rooms are beautifully appointed and the staff goes above and beyond.',
    image: 'https://picsum.photos/seed/cayo-john/100/100',
    stars: 5,
  },
  {
    name: 'Sarah Williams',
    position: 'Holiday Maker',
    quote:
      'Our family had the most wonderful holiday here. The pool area is magnificent and the restaurant serves incredible food.',
    image: 'https://picsum.photos/seed/cayo-sarah/100/100',
    stars: 5,
  },
  {
    name: 'Michael Brown',
    position: 'Wedding Guest',
    quote:
      'I attended a wedding at Cayo and the venue, service, and attention to detail were simply world-class.',
    image: 'https://picsum.photos/seed/cayo-michael/100/100',
    stars: 4,
  },
  {
    name: 'Emily Davis',
    position: 'Travel Blogger',
    quote:
      'As a travel blogger, I have stayed at many hotels. Cayo stands out with its unique charm and outstanding hospitality.',
    image: 'https://picsum.photos/seed/cayo-emily/100/100',
    stars: 5,
  },
]

export function Testimonials({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className={cn('py-24', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Testimonials
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          What Our Guests Say
        </h2>

        <div className="relative mx-auto max-w-2xl">
          {/* Arrow buttons */}
          <button
            className="absolute -left-12 top-1/2 hidden -translate-y-1/2 text-mist transition hover:text-brand lg:block"
            aria-label="Previous testimonial"
            onClick={prev}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="absolute -right-12 top-1/2 hidden -translate-y-1/2 text-mist transition hover:text-brand lg:block"
            aria-label="Next testimonial"
            onClick={next}
          >
            <ChevronRight size={32} />
          </button>

          {/* Card */}
          <div className="text-center">
            <img
              src={t.image}
              alt={t.name}
              className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <Quote size={40} className="mx-auto mb-4 text-brand/30" />
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={16} className="fill-brand text-brand" />
              ))}
            </div>
            <p className="mb-6 italic leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
            <p className="font-heading text-lg font-bold text-ink">{t.name}</p>
            <p className="text-sm text-mist">{t.position}</p>
          </div>

          {/* Mobile arrows */}
          <div className="mt-6 flex justify-center gap-4 lg:hidden">
            <button
              className="text-mist transition hover:text-brand"
              aria-label="Previous testimonial"
              onClick={prev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="text-mist transition hover:text-brand"
              aria-label="Next testimonial"
              onClick={next}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-2 w-2 rounded-full transition',
                  i === current ? 'bg-brand' : 'bg-mist/30',
                )}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
