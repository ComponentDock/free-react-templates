import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/**
 * Testimonials — centered "Student Says About Us" heading followed by a
 * carousel of testimonial cards (circular avatar, purple quote icon,
 * quote text, dark name, orange position) with navigation dots (active
 * dot orange).
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const quote = TESTIMONIALS[index]!

  return (
    <section id="testimonials-section" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Student Says About Us</h2>
          <p className="mt-4 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <figure className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center shadow-md">
          <img
            src={quote.avatar}
            alt=""
            aria-hidden="true"
            className="mx-auto h-20 w-20 rounded-full"
            loading="lazy"
          />
          <Quote className="mx-auto mt-4 h-8 w-8 fill-purple text-purple" aria-hidden="true" />
          <blockquote className="mt-3 text-gray-600">&ldquo;{quote.quote}&rdquo;</blockquote>
          <figcaption className="mt-4">
            <span className="block font-semibold text-navy">{quote.name}</span>
            <span className="mt-0.5 block text-sm font-medium text-primary">{quote.position}</span>
          </figcaption>
        </figure>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                i === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
