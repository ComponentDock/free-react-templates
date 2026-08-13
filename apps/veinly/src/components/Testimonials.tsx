import { testimonials } from '../data'

/** Testimonials section on the light #f8f9fa background: centered
 *  "Testimonial" heading + four white italic serif quote cards with avatar
 *  photo and name (static 4-up grid, the documented simplification of the
 *  source owl carousel). */
export function Testimonials() {
  return (
    <section id="testimonials-section" data-testid="testimonials" className="bg-light py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="block-heading mb-5 text-center">
          <span className="eyebrow">Testimonial</span>
          <h2>Testimonial</h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <figure key={item.name} data-testid="testimonial-card" className="text-center">
              <blockquote className="testimonial-quote">{item.quote}</blockquote>
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mt-5 h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 font-bold text-black">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
