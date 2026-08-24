import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    heading: 'Nice Accommodation',
    text: 'The rooms were beautifully decorated and incredibly comfortable. The staff went above and beyond to make our stay special.',
    author: '— Sarah Johnson',
  },
  {
    heading: 'Wonderful Experience',
    text: 'From the moment we arrived, everything was perfect. The breakfast buffet was amazing and the spa was world-class.',
    author: '— Michael Chen',
  },
  {
    heading: 'Perfect Getaway',
    text: 'We loved every minute of our stay. The location is ideal for exploring the city and the hotel itself is a sanctuary.',
    author: '— Emma Williams',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length)

  const t = TESTIMONIALS[active]!

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        {/* Star rating */}
        <div className="mb-6 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-brand text-brand" aria-hidden="true" />
          ))}
        </div>

        {/* Testimonial card */}
        <div key={active} className="animate-fadeIn">
          <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">{t.heading}</h3>
          <p className="mt-4 text-lg leading-relaxed text-mist italic">&ldquo;{t.text}&rdquo;</p>
          <p className="mt-4 font-medium text-ink">{t.author}</p>
        </div>

        {/* Navigation dots */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="rounded-full border border-ink/20 p-2 text-ink transition-colors hover:border-brand hover:text-brand"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === active ? 'bg-brand' : 'bg-ink/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="rounded-full border border-ink/20 p-2 text-ink transition-colors hover:border-brand hover:text-brand"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
