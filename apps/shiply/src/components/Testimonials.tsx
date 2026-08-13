import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

/** Testimonial carousel: four centered slides with a circular avatar, name,
 *  and italic quote, navigated by 50px circular controls at the edges. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="border-b border-border-light py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="text-4xl font-bold uppercase text-brand">Testimonials</h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-20 bg-brand" />
        </div>
        <div className="relative mx-auto max-w-[800px] text-center">
          <div className="flex flex-col items-center">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.name}
                aria-hidden={i !== index}
                className={i === index ? 'flex flex-col items-center' : 'hidden'}
              >
                <img
                  src={testimonial.image}
                  alt=""
                  className="mx-auto mb-4 h-24 w-24 max-w-[100px] rounded-full object-cover"
                />
                <h3 className="mb-1 text-xl font-medium text-ink">{testimonial.name}</h3>
                <p className="text-base italic text-body-grey">{testimonial.quote}</p>
              </blockquote>
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous testimonial"
            disabled={index === 0}
            onClick={() => goTo(index - 1)}
            className="absolute left-0 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black disabled:opacity-40"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            disabled={index === testimonials.length - 1}
            onClick={() => goTo(index + 1)}
            className="absolute right-0 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black disabled:opacity-40"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
