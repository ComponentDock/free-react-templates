import { testimonials } from '../data'

/** Left column heading plus two client testimonial cards. */
export function Testimonials() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-3xl font-medium text-ink-900">
            What our Client&rsquo;s Say about us
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-mute-500">
            Thousands of sites run on Uplink every day. Here is what a few of our clients think of
            the service.
          </p>
        </div>
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="rounded-[10px] border border-line-200 p-8">
            <blockquote className="text-sm leading-6 text-mute-500">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <h3 className="text-lg font-medium text-ink-900">{testimonial.author}</h3>
              <p className="mt-1 text-sm font-light text-mute-500">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
