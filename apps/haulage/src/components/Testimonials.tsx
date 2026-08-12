import { TESTIMONIALS } from '../data'
import { SectionHeading } from './SectionHeading'

/* Happy Clients — light-grey testimonials band: centered cards with an
   italic Georgia quote and the client name (the source's owl carousel
   shows all four as a static row here). */
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          center
          title="Happy Clients"
          blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="text-center">
              <blockquote className="font-serif italic leading-relaxed text-smoke">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-display text-lg font-medium uppercase text-ink">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
