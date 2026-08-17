import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/* Testimonials — light section with a state-based carousel of three 50/50
   split slides: photo half + white text half with a serif italic quote. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonial = TESTIMONIALS[index]!

  return (
    <section id="testimonials-section" aria-label="Testimonials" className="bg-surface px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <h2 className="font-display text-3xl font-bold uppercase text-brand">Testimonials</h2>
          <p className="leading-relaxed text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
        </div>

        <article className="mt-12 grid overflow-hidden bg-white md:grid-cols-2">
          <img
            src={testimonial.image}
            alt={`Portrait of ${testimonial.author}`}
            className="h-full w-full object-cover"
          />
          <div className="p-10 md:p-14">
            <blockquote className="font-serif text-lg italic leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <div className="mt-8">
              <strong className="block text-black">{testimonial.author}</strong>
              <span className="text-sm text-muted">{testimonial.role}</span>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-center gap-3">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.image}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-muted/40 hover:bg-muted/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
