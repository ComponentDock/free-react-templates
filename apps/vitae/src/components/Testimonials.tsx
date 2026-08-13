import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/** Dark #343a40 testimonials band: centered white "testimonials" title with
 *  a white underline, an auto-rotating carousel of three italic quotes with
 *  semi-transparent attributions, and white 7px dots (active = #fff). */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.items.length

  useEffect(() => {
    const id = setInterval(() => setIndex((current) => (current + 1) % count), 6000)
    return () => clearInterval(id)
  }, [count])

  const active = testimonials.items[index]!

  return (
    <section data-testid="testimonials" className="bg-darkband py-[2.5em] md:py-[7em]">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="section-title relative pb-5 text-3xl text-white">{testimonials.heading}</h2>

        <blockquote className="mx-auto mt-10 max-w-[700px]">
          <p className="text-xl italic leading-relaxed text-white">“{active.quote}”</p>
          <cite className="mt-[50px] block text-base not-italic text-white/50">
            — {active.name}
          </cite>
        </blockquote>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-[7px] w-[7px] rounded-full transition-colors',
                i === index ? 'bg-white' : 'bg-white/30',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
