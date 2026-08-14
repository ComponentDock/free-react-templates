import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials — dark section, five centered quote cards (quote icon,
   round avatar, quote text, name + position). */
export function TestimonialsSection() {
  return (
    <section aria-label="Testimonials" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            Testimonial
          </span>
          <h2 className="mt-2 text-4xl font-bold text-white">What Client Says</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col items-center rounded-lg bg-white/5 px-5 py-8 text-center"
            >
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <img
                src={item.photo}
                alt=""
                className="mt-4 h-[130px] w-[130px] rounded-full object-cover"
              />
              <blockquote className="mt-4 text-sm leading-relaxed text-white/70">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <span className="block text-sm font-bold text-white">{item.name}</span>
                <span className="mt-1 block text-xs uppercase tracking-wide text-white/50">
                  {item.position}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
