import { testimonials } from '../data'

export function Testimonials() {
  return (
    <section id="testimonials-section" aria-label="Testimonials" className="py-24">
      <div className="mx-auto max-w-[1170px] px-4 text-center">
        <h2 className="font-heading text-3xl font-light uppercase text-black md:text-4xl">
          Testimonials
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="text-left">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  loading="lazy"
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading text-lg font-light uppercase text-black">
                    {testimonial.name}
                  </h3>
                  <span className="text-sm text-muted-2">{testimonial.role}</span>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted">{testimonial.quote}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
