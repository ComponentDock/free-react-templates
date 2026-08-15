import { Quote } from 'lucide-react'
import { testimonials, sectionLabels } from '../data'

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://picsum.photos/id/1039/1600/900')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative z-[1] mx-auto max-w-[1250px] px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm font-semibold tracking-[2px] text-brand uppercase">
            Testimonial
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-[2px] text-white uppercase md:text-[34px]">
            {sectionLabels.testimony}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="text-center">
              <div className="relative mx-auto mb-6 h-[130px] w-[130px]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full rounded-full object-cover"
                />
                <span className="absolute -right-2 -bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                  <Quote className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <blockquote className="mb-4 text-base leading-[1.8] text-white/90">
                {testimonial.quote}
              </blockquote>
              <figcaption>
                <span className="block font-heading text-lg font-semibold text-white uppercase">
                  {testimonial.name}
                </span>
                <span className="text-lg text-white/90">{testimonial.position}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
