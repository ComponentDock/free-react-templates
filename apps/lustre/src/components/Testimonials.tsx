import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    title: 'Great Service',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Jessica Smith, Client',
    photo: 'https://picsum.photos/seed/lustre-t1/106/106',
  },
  {
    title: 'Amazing Stylists',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Jessica Smith, Client',
    photo: 'https://picsum.photos/seed/lustre-t2/106/106',
  },
  {
    title: 'Best Salon in Town',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'Jessica Smith, Client',
    photo: 'https://picsum.photos/seed/lustre-t3/106/106',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]!

  return (
    <section
      aria-label="Testimonials"
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/lustre-testimonials/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Testimonials</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="relative mt-14 bg-white p-10 dark:bg-gray-900">
          <img
            src={testimonial.photo}
            alt=""
            className="absolute -top-7 left-1/2 h-[53px] w-[53px] -translate-x-1/2 rounded-full object-cover ring-4 ring-white dark:ring-gray-900"
          />
          <Quote className="mx-auto h-8 w-8 text-gold-500" aria-hidden="true" />
          <h3 className="mt-4 font-display text-lg font-bold text-gold-500">{testimonial.title}</h3>
          <p className="mt-4 text-ink dark:text-gray-200">&ldquo;{testimonial.quote}&rdquo;</p>
          <p className="mt-6 font-semibold text-gold-500">{testimonial.author}</p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)
            }
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <button
          type="button"
          className="mt-10 bg-gold-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-ink-soft transition-colors hover:bg-gold-400"
        >
          load more
        </button>
      </div>
    </section>
  )
}
