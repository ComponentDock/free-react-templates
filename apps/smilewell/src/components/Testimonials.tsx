import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Smilewell completely transformed my smile. The team was professional and made me feel comfortable throughout the entire process.',
    name: 'Ricky Fisher',
    img: 'https://picsum.photos/seed/smilewell-test1/100/100',
  },
  {
    quote:
      'I was nervous about dental work, but the doctors at Smilewell were incredibly patient and skilled. Highly recommend!',
    name: 'Ken Davis',
    img: 'https://picsum.photos/seed/smilewell-test2/100/100',
  },
  {
    quote:
      'My children actually look forward to their dental visits now. The pediatric team is amazing with kids.',
    name: 'Mellisa Griffin',
    img: 'https://picsum.photos/seed/smilewell-test3/100/100',
  },
  {
    quote:
      'From the initial consultation to the final result, everything was seamless. Best dental experience I have ever had.',
    name: 'Robert Steward',
    img: 'https://picsum.photos/seed/smilewell-test4/100/100',
  },
] as const

export function Testimonials() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((c) => (c + 1) % testimonials.length)

  const t = testimonials[idx]

  return (
    <section id="testimonials" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-smoke">
            Happy Client Says
          </p>
          <h2 className="text-3xl font-bold text-ink">Testimonial</h2>
        </div>
        <div className="relative rounded-lg bg-white p-8 shadow-sm md:p-12">
          <Quote className="absolute left-4 top-4 h-8 w-8 text-brand/20" />
          <p className="mb-6 text-center text-base leading-relaxed text-smoke md:text-lg">
            &ldquo;{t?.quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={t?.img}
              alt={t?.name}
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <span className="font-bold text-ink">{t?.name}</span>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-smoke transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-smoke transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
