import { useState } from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '../data'

/** Cream testimonial carousel: one centered quote at a time, advanced with
 *  dot navigation. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]!

  return (
    <section className="bg-cream py-[100px]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="text-center">
          <Quote className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
          <blockquote className="mt-8 text-2xl font-light leading-relaxed text-olive">
            &ldquo;{active?.quote}&rdquo;
          </blockquote>
          <p className="mt-8 font-serif text-lg font-bold text-brand">- {active?.name}</p>
        </div>
        <div
          className="mt-10 flex justify-center gap-3"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.quote}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? 'bg-brand' : 'bg-ink/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
