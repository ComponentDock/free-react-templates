import { testimonials, testimonialsIntro } from '../data'

/** Testimonials on the #f9f9ff band: centered title plus white quote cards
 *  with a round avatar, name and role. All cards render in a responsive
 *  grid (the original's carousel becomes a static two-up on desktop). */
export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-band py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold uppercase text-ink lg:text-4xl">
            {testimonialsIntro.heading}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted">
            {testimonialsIntro.lead}
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="bg-white px-8 py-8 shadow-sm">
              <p className="text-base font-light leading-relaxed text-muted">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium text-ink">{testimonial.name}</h3>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
