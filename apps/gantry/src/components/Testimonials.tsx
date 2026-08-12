import { TESTIMONIALS } from '../data'

/* Testimonials — the white "What People Says" section: centered heading
   + two testimonial blocks (100px circular photo, bold quote, orange
   uppercase client name). */
export function Testimonials() {
  return (
    <section aria-label="Testimonial" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-xl font-light uppercase tracking-[0.2em] text-brand">
            Testimonial
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-black">What People Says</h2>
        </div>
        <div className="grid gap-14 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.client} className="text-center">
              <img
                src={`https://picsum.photos/seed/${testimonial.seed}/200/200`}
                alt={testimonial.client}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <blockquote className="mt-6 text-xl font-bold leading-8 text-black">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-heading text-lg uppercase tracking-wide text-brand">
                {testimonial.client}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
