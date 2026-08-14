import { useEffect, useState } from 'react'
import { testimonials } from '../data'

const SLIDE_MS = 5000

export function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-5 max-w-xl text-center">
          <h2 className="relative inline-block pb-5 text-[20px] uppercase tracking-[0.2em] text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[70px] after:-translate-x-1/2 after:bg-brand">
            Love By Our Listeners
          </h2>
          <p className="mt-4 text-body">
            Real words from the people who keep us on air — our listeners, members, and everyday
            fans of the station.
          </p>
        </div>

        <div className="mt-10">
          {testimonials.map((slide, index) => (
            <figure
              key={slide.name}
              aria-hidden={index !== active}
              className={index === active ? 'block bg-white p-3 text-center sm:p-5' : 'hidden'}
            >
              <img
                src={slide.avatar}
                alt={`${slide.name} avatar`}
                className="mx-auto w-24 rounded-full sm:w-40"
              />
              <div className="mt-4">
                <h3 className="text-xl font-light text-black">{slide.name}</h3>
                <p className="mt-3 font-normal italic text-body">{slide.quote}</p>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((slide, index) => (
            <button
              key={slide.name}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
              className={`h-1 w-7 ${index === active ? 'bg-brand' : 'bg-bullet'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
