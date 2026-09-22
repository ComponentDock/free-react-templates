import { TESTIMONIALS } from '../data'

/** Testimonials — 3 testimonials with avatar, name, and quote. */
export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-heading text-4xl font-bold text-ink">Testimonials</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="rounded-lg bg-offwhite p-8 text-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
              />
              <p className="italic leading-relaxed text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 font-heading text-lg font-bold text-ink">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
