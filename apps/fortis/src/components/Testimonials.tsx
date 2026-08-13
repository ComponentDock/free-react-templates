import { testimonials } from '../data'

/** Testimonials on the light background: three static columns (the source
 *  renders three static columns on index — no carousel), each with a 70px
 *  circular headshot, an italic quote and an attribution. */
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-light py-10 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="section-heading text-black">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="text-center">
              <img
                src={testimonial.image}
                alt={`Portrait of ${testimonial.author}`}
                className="mx-auto mb-4 h-[70px] w-[70px] rounded-full object-cover"
              />
              <blockquote className="mb-4 text-lg italic text-body">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="font-bold text-black">— {testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
