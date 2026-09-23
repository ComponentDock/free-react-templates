import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  title: string
  photo: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Docket handled our case with professionalism and care. They kept us informed every step of the way and achieved an outstanding result.',
    name: 'Sarah Mitchell',
    title: 'Business Owner',
    photo: 'https://picsum.photos/seed/docket-auth1/100/100',
  },
  {
    quote:
      'I was facing a difficult legal situation and the team at Docket provided expert guidance that made all the difference.',
    name: 'David Chen',
    title: 'Restaurant Owner',
    photo: 'https://picsum.photos/seed/docket-auth2/100/100',
  },
  {
    quote:
      'Their dedication to my case was remarkable. They went above and beyond to ensure I received fair treatment and compensation.',
    name: 'Elena Rodriguez',
    title: 'Marketing Director',
    photo: 'https://picsum.photos/seed/docket-auth3/100/100',
  },
  {
    quote:
      'The attorneys at Docket are truly exceptional. They turned what seemed like an impossible situation into a favorable outcome.',
    name: 'Michael Thompson',
    title: 'Software Engineer',
    photo: 'https://picsum.photos/seed/docket-auth4/100/100',
  },
  {
    quote:
      'I highly recommend Docket to anyone in need of legal representation. Their expertise and commitment are second to none.',
    name: 'Jennifer Adams',
    title: 'Healthcare Professional',
    photo: 'https://picsum.photos/seed/docket-auth5/100/100',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const previous = () =>
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((value) => (value + 1) % testimonials.length)

  return (
    <section aria-labelledby="testimonials-heading" className="bg-[#212529] py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 id="testimonials-heading" className="mb-10 text-3xl font-bold text-white">
          Happy Clients
        </h2>
        <Quote className="mx-auto mb-6 h-10 w-10 rotate-180 text-[#007bff]" aria-hidden="true" />
        <blockquote className="mb-8 text-lg leading-relaxed text-[#b2b2b8]">
          {current.quote}
        </blockquote>
        <div className="mb-6 flex items-center justify-center gap-4">
          <img src={current.photo} alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="text-left">
            <p className="font-bold text-white">{current.name}</p>
            <p className="text-sm text-[#b2b2b8]">{current.title}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-[#212529] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="text-sm text-[#b2b2b8]" aria-live="polite">
            {index + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-[#212529] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
