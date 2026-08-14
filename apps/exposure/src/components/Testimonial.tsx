import { Quote } from 'lucide-react'
import { testimonial } from '../data'

/** Testimonial slider (source: div.testimonial-area, bg #121212, no title):
 *  a centered slide with a quote mark, a 20px muted paragraph, a round
 *  founder photo, the coral founder name and the role beneath. The source
 *  slick slider shows two identical slides — a single slide is a faithful
 *  simplification. */
export function Testimonial() {
  return (
    <section id="testimonial" className="bg-ink py-[60px] text-center lg:py-[190px]">
      <div className="mx-auto max-w-4xl px-[15px] lg:px-[30px]">
        <Quote className="mx-auto mb-[50px] h-12 w-12 text-brand" aria-hidden="true" />
        <p className="mb-[50px] text-xl font-light leading-[1.5] text-muted lg:pr-[100px]">
          {testimonial.quote}
        </p>
        <div className="flex items-center justify-center">
          <img
            src={testimonial.image}
            alt=""
            className="h-[90px] w-[90px] rounded-full object-cover"
            loading="lazy"
          />
          <div className="ml-5 text-left">
            <span className="block font-heading text-[26px] font-semibold text-brand lg:text-[30px]">
              {testimonial.name}
            </span>
            <p className="font-medium text-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
