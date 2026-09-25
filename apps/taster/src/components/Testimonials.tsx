import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Maxim Smith',
    role: 'CEO, Founder',
    image: 'https://picsum.photos/seed/taster-t1/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Geert Green',
    role: 'CEO, Founder',
    image: 'https://picsum.photos/seed/taster-t2/100/100',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text decided to leave for the far World of Grammar.',
    name: 'Dennis Roman',
    role: 'CEO, Founder',
    image: 'https://picsum.photos/seed/taster-t3/100/100',
  },
  {
    quote:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.",
    name: 'Geert Green',
    role: 'CEO, Founder',
    image: 'https://picsum.photos/seed/taster-t4/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const handleDot = (index: number) => {
    setCurrent(index)
  }

  const t = testimonials[current]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-12 font-display text-4xl font-bold text-ink md:text-5xl">
          Customer Reviews
        </h2>

        <div className="relative">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-mist transition-colors hover:text-brand max-sm:hidden"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <blockquote className="px-8">
            <Quote className="mx-auto mb-4 h-8 w-8 text-brand" aria-hidden="true" />
            <p className="mb-6 text-lg leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="mb-3 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="font-display text-xl font-bold text-ink">{t.name}</h4>
              <p className="text-sm text-mist">{t.role}</p>
            </div>
          </blockquote>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-mist transition-colors hover:text-brand max-sm:hidden"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-mist/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
