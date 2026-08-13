import { useEffect, useState } from 'react'
import { testimonials } from '../data'

/** Testimonial carousel: one quote at a time, client-side auto-cycle with
 *  brand-red dots; clicking a dot jumps to that slide. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.items.length

  useEffect(() => {
    const id = setInterval(() => setIndex((current) => (current + 1) % count), 6000)
    return () => clearInterval(id)
  }, [count])

  const active = testimonials.items[index]!

  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-normal leading-tight">{testimonials.heading}</h2>
        <p className="mt-4 text-body">{testimonials.subtitle}</p>

        <blockquote className="mt-12">
          <p className="text-lg leading-relaxed text-body">“{active.quote}”</p>
          <div className="mt-6">
            <p className="text-lg font-semibold text-ink">{active.name}</p>
            <p className="mt-1 text-sm text-body">{active.role}</p>
          </div>
        </blockquote>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={
                i === index ? 'h-3 w-3 rounded-full bg-brand' : 'h-3 w-3 rounded-full bg-gray-300'
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
