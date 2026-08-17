import { useState } from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = testimonials[activeIndex]!

  return (
    <section aria-label="Testimonials" className="bg-mist px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-bold uppercase text-brand">Testimonial</p>
        <h2 className="mt-1 text-[28px] font-bold text-neutral-900 lg:text-[50px]">Happy People</h2>

        <div className="relative mt-14 pb-8">
          <figure className="relative rounded-[4px] bg-white px-[30px] pb-[30px] pt-[52px] shadow-[0_5px_12px_-9px_rgba(0,0,0,0.3)]">
            <span className="absolute -top-5 left-1/2 flex h-[45px] w-[45px] -translate-x-1/2 items-center justify-center rounded-full bg-brand">
              <Quote aria-hidden="true" className="h-5 w-5 text-white" />
            </span>
            <blockquote>
              <p className="text-[16px] leading-relaxed text-neutral-600">{slide.quote}</p>
            </blockquote>
            <figcaption className="mt-6 flex flex-col items-center">
              <img
                src={slide.avatar}
                alt=""
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover"
              />
              <p className="mt-4 text-[22px] font-semibold text-black">{slide.name}</p>
              <span className="mt-1 text-[13px] font-semibold uppercase text-brand">
                {slide.role}
              </span>
            </figcaption>
          </figure>
        </div>

        <div
          role="group"
          aria-label="Choose testimonial"
          className="flex items-center justify-center gap-3"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.quote.slice(0, 16)}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-brand' : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
