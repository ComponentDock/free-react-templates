import { Quote } from 'lucide-react'
import { testimonial } from '../data'

/** 50/50 split testimonial band: a light-blue photo side with a centered
 *  white quote, quote icon and founder attribution, beside a full-height
 *  photo side. Both halves are 700px tall and stack on mobile. */
export function Testimonials() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden lg:h-[700px] lg:w-1/2">
        <img
          src={testimonial.background}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f61ef]/60" aria-hidden="true" />
        <div className="relative z-10 flex max-w-xl flex-col items-center px-6 text-center">
          <Quote className="mb-10 h-12 w-12 text-white" aria-hidden="true" />
          <p className="text-xl leading-relaxed text-white">{testimonial.quote}</p>
          <div className="mt-10 flex items-center gap-5">
            <img
              src={testimonial.avatar}
              alt={testimonial.avatarAlt}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="text-left">
              <span className="block text-[20px] font-semibold text-white">
                {testimonial.founder}
              </span>
              <p className="text-[#ddd]">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={testimonial.photo}
        alt={testimonial.photoAlt}
        className="h-[420px] w-full object-cover lg:h-[700px] lg:w-1/2"
      />
    </section>
  )
}
