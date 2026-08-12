import { Card } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/* div.site-section.bg-light (#f8f9fa) — centered header: amber
   "Testimonials" eyebrow + serif h2 "What Client Says"; 3 white quote
   cards (The Best Photographer / Easy To Work With / Professional
   Photographer). */
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-light py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-brand uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            What Client Says
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.title} className="border-0 p-6 shadow-none">
              <h3 className="font-display text-xl font-bold text-ink">{testimonial.title}</h3>
              <p className="mt-3 leading-relaxed text-smoke">{testimonial.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
