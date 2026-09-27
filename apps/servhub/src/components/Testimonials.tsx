import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Jean Smith',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'Carl Spencer',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    author: 'Ryan Peters',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]!

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-lime-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">What Clients Are Saying</h2>
        <div className="relative mx-auto max-w-3xl text-center">
          <Quote size={48} className="mx-auto mb-4 text-white/30" />
          <blockquote className="mb-6 text-lg text-white">{t.quote}</blockquote>
          <cite className="text-sm font-semibold text-white/80 not-italic">&mdash; {t.author}</cite>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full bg-white/20 p-2 transition hover:bg-white/40"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full bg-white/20 p-2 transition hover:bg-white/40"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
