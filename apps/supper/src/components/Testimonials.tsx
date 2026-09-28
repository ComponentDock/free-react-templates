import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Review {
  quote: string
  name: string
  role: string
  imageSeed: string
}

const REVIEWS: Review[] = [
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    name: 'Maxim Smith',
    role: 'CEO, Founder',
    imageSeed: 'supper-person1',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Geert Green',
    role: 'CEO, Founder',
    imageSeed: 'supper-person2',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    name: 'Dennis Roman',
    role: 'CEO, Founder',
    imageSeed: 'supper-person3',
  },
  {
    quote:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.',
    name: 'Geert Green',
    role: 'CEO, Founder',
    imageSeed: 'supper-person4',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1))

  const review = REVIEWS[current]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mb-12">
          <h2
            className="mb-3 text-3xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Customer Reviews
          </h2>
        </div>
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          <blockquote className="mx-10">
            <p className="mb-6 text-lg italic leading-relaxed text-body-text">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center">
              <div
                className="mb-3 h-16 w-16 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://picsum.photos/seed/${review.imageSeed}/200/200)`,
                }}
              />
              <h4 className="font-bold text-charcoal">{review.name}</h4>
              <p className="text-sm text-muted">{review.role}</p>
            </div>
          </blockquote>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
