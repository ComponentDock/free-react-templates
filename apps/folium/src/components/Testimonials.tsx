import { testimonials } from '../data'

/** Testimonials section: three 3D flip cards. Front shows the photo with a
 *  bottom gradient and name/role; hovering (or mobile default) reveals the
 *  white back with a quote and an author row with a round avatar. */
export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-light text-black">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="group h-[427px] [perspective:1200px]">
              <div className="relative h-full w-full transition-transform duration-[600ms] [transform-style:preserve-3d] max-lg:[transform:rotateY(180deg)] lg:group-hover:[transform:rotateY(180deg)]">
                <div
                  className="absolute inset-0 flex items-end bg-cover bg-center [backface-visibility:hidden]"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
                    aria-hidden="true"
                  />
                  <div className="relative p-6 text-white">
                    <h3 className="text-xl font-light">{testimonial.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center bg-white p-6 shadow-[0_0_70px_-10px_rgba(0,0,0,0.4)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <blockquote className="text-lg font-light leading-relaxed text-gray-800">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} portrait`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-black">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
