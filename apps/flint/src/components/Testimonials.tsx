import { testimonials } from '../data'
import { Testimonial } from './Testimonial'

/* Three ink-coloured testimonials in a row (the reference's dark variant). */
export function Testimonials() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Testimonial
              key={item.seed}
              quote={item.quote}
              author={item.author}
              location={item.location}
              seed={item.seed}
              tone="dark"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
