import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

/** Testimonial carousel (reference `.block-11`): one white quote card at a
 *  time with prev/next arrows centered below. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((current) => (current + 1) % testimonials.length)
  const prev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)

  const active = testimonials[index]!

  return (
    <section className="bg-surface py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-black text-black md:text-4xl">
          Testimonial
        </h2>

        <div className="mx-auto mt-16 max-w-[700px]">
          <figure className="bg-white p-10 text-center">
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://picsum.photos/seed/metalwork-avatar/80/80"
                alt=""
                aria-hidden="true"
                className="h-[60px] w-[60px] rounded-full object-cover"
              />
              <figcaption className="text-left">
                <p className="text-lg font-light text-black">{active.name}</p>
                <p className="text-sm text-[#a6a6a6]">{active.role}</p>
              </figcaption>
            </div>
            <blockquote className="mt-6 text-base leading-relaxed text-gray-600">
              “{active.quote}”
            </blockquote>
          </figure>

          <div className="-mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 transition-colors hover:bg-primary-600 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 transition-colors hover:bg-primary-600 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
