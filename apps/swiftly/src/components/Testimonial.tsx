import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.',
    name: 'Kaila Woodland',
    role: 'Owner, Greenland, Inc.',
    avatar: 'https://picsum.photos/seed/swiftly-person1/80/80',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.',
    name: 'James Carter',
    role: 'CEO, TechFlow',
    avatar: 'https://picsum.photos/seed/swiftly-person2/80/80',
  },
  {
    quote:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.',
    name: 'Sarah Mitchell',
    role: 'Director, CloudBase',
    avatar: 'https://picsum.photos/seed/swiftly-person3/80/80',
  },
]

export function Testimonial() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-paper py-20" id="testimonial">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-brand">
            Join Now
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight">
            Join More Than <span className="text-brand">90,000+</span> Amazing People Who Love Our
            Product
          </h2>
          <p className="mb-6 text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Product Tour
          </a>
        </div>

        <div>
          <div className="rounded-2xl bg-surface p-8">
            <div className="mb-4 flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <cite className="block font-bold not-italic">{t.name}</cite>
                <span className="text-sm text-mist">{t.role}</span>
              </div>
            </div>
            <Quote className="mb-2 text-brand" size={24} />
            <blockquote className="text-mist">{t.quote}</blockquote>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
