import { BAND, TESTIMONIALS } from '../content'
import { TestimonialCard } from './TestimonialCard'

/**
 * The whole page: a centred head over a three-card grid, and nothing else. No
 * nav, no hero, no stats row, no logo strip, no call to action, no form.
 */
export function TestimonialBand() {
  return (
    <main className="band">
      <header className="band-head">
        <h1 className="band-title">{BAND.title}</h1>
        <p className="band-sub">{BAND.sub}</p>
      </header>
      <div className="testimonial-grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </main>
  )
}
