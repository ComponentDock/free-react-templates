import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    quote:
      'Shanti completely transformed how I move and rest. The teachers meet you exactly where you are, every single class.',
  },
  {
    name: 'David Chen',
    quote:
      'I came for the flexibility and stayed for the calm. My back pain is gone and my mind finally switches off at night.',
  },
  {
    name: 'Amelia Rodriguez',
    quote:
      'The most welcoming studio I have ever practiced in. The community here feels like family from the very first class.',
  },
  {
    name: 'James Thompson',
    quote:
      'Meditation practice here changed my relationship with stress. I am more patient, more focused and much happier.',
  },
  {
    name: 'Emily Watson',
    quote:
      'Prenatal classes were a lifesaver during my pregnancy — safe, gentle and endlessly supportive.',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)

  const goTo = (index: number) => {
    setActive((index + testimonials.length) % testimonials.length)
  }

  const current = testimonials[active]!

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-normal tracking-[0.2em] text-body-500 uppercase">
            Testimony
          </h3>
          <h2 className="mt-3 text-4xl font-extralight text-black sm:text-5xl">
            Successful Stories
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="relative rounded-sm bg-white p-8 pb-10 shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)] sm:p-10">
            <span className="absolute top-6 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-mauve-500">
              <Quote className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <blockquote className="text-base leading-relaxed text-black/80 sm:text-lg">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center">
              <img
                src={`https://picsum.photos/seed/shanti-customer-${active + 1}/220/220`}
                alt={`${current.name} customer`}
                loading="lazy"
                className="h-28 w-28 rounded-full object-cover"
              />
              <div className="ml-6">
                <p className="text-lg font-medium text-black">{current.name}</p>
                <span className="text-sm text-body-500">Customer</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
            className="absolute top-1/2 -left-4 hidden -translate-y-1/2 rounded-full border border-mauve-500 bg-white p-2 text-mauve-500 transition-colors hover:bg-mauve-500 hover:text-white sm:block"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next slide"
            className="absolute top-1/2 -right-4 hidden -translate-y-1/2 rounded-full border border-mauve-500 bg-white p-2 text-mauve-500 transition-colors hover:bg-mauve-500 hover:text-white sm:block"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                index === active ? 'bg-mauve-500' : 'bg-black/20 hover:bg-black/40',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
