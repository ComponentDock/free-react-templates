import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
  imageSeed: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Maxim Smith',
    role: 'Happy Customer',
    imageSeed: 'fc-person1',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    name: 'Geert Green',
    role: 'Food Critic',
    imageSeed: 'fc-person2',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Dennis Roman',
    role: 'Regular Patron',
    imageSeed: 'fc-person3',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const testimonial = TESTIMONIALS[current]!

  return (
    <div>
      <p className="mb-2 text-sm uppercase tracking-wider text-orange">Testimonials</p>
      <h2
        className="mb-8 text-3xl font-bold text-white"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Satisfied Customers
      </h2>

      <div className="relative">
        <button
          onClick={prev}
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <blockquote>
          <p className="mb-4 text-lg italic leading-relaxed text-white/90">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${testimonial.imageSeed}/200/200)`,
              }}
            />
            <div>
              <h4 className="font-bold text-white">{testimonial.name}</h4>
              <p className="text-sm text-white/70">{testimonial.role}</p>
            </div>
          </div>
        </blockquote>

        <button
          onClick={next}
          className="absolute -right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
