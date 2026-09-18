import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Mike Fisher',
    image: 'https://picsum.photos/seed/test-mike/200/200',
    quote:
      "Working with this charity has been transformative. Their dedication to children's welfare is unmatched, and I'm proud to support their mission every step of the way.",
  },
  {
    name: 'Jorge Smith',
    image: 'https://picsum.photos/seed/test-jorge/200/200',
    quote:
      'The impact this organization has made in our community is remarkable. From education to healthcare, they truly cover all aspects of child welfare.',
  },
  {
    name: 'Brandon White',
    image: 'https://picsum.photos/seed/test-brandon/200/200',
    quote:
      "I've seen firsthand how donations are put to work. The transparency and efficiency of this charity make it easy to give with confidence.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="py-24 bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">What People Say</h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Hear from the people who have experienced the difference our work makes in communities
            around the world.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center bg-white rounded-2xl p-12 shadow-md">
            <Quote className="mx-auto h-10 w-10 text-primary/30 mb-6" />
            <figure className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full">
              <img
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <blockquote className="text-lg text-gray-600 italic mb-6 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <cite className="not-italic">
              <span className="font-bold text-ink">{t.name}</span>
            </cite>
          </div>

          {/* Navigation */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full bg-white p-3 shadow-md hover:bg-gray-50 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-ink" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full bg-white p-3 shadow-md hover:bg-gray-50 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-ink" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === current ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
