import { Star } from 'lucide-react'
import { TESTIMONIALS, TESTIMONIALS_COPY } from '../content'
import { Container, Reveal, SectionPill } from './ui'

/**
 * Three static review cards on a pale ground. The reference's arrows and dot
 * row do nothing, so they are gone rather than shipped dead.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-900">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionPill>{TESTIMONIALS_COPY.pill}</SectionPill>
        </Reveal>
        <Reveal className="mx-auto mt-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            {TESTIMONIALS_COPY.heading}
          </h2>
        </Reveal>
        <Reveal className="mx-auto mt-3 max-w-3xl text-center">
          <p className="text-lg leading-7 text-ink-500 dark:text-gray-300">
            {TESTIMONIALS_COPY.lede}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <figure className="flex h-full min-h-[320px] flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-800">
                <div className="flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary-400 text-primary-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg font-medium leading-6 text-ink-800 dark:text-white">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-base font-bold text-primary-700">
                    {testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-ink-800 dark:text-white">
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-ink-400 dark:text-gray-400">
                      {testimonial.town}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
