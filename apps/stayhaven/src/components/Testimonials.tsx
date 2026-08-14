import { TESTIMONIALS } from '../data'

/* Testimonials (source: section.section.testimonial-section — centered
   "People Says" heading and a slider of guest quotes with author
   attributions). */
export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-bold text-ink">People Says</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-lg bg-mist p-8">
              <p className="leading-relaxed text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
              <cite className="mt-5 block font-display text-lg font-bold not-italic text-brand">
                &mdash; {testimonial.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
