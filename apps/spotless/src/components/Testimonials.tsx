import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sophia Allison',
    text: 'Spotless transformed our home before a big family visit. Every room smelled fresh and every corner was spotless. Absolutely worth every penny.',
  },
  {
    name: 'James Carter',
    text: 'We hire Spotless for our office every week. Reliable, thorough, and always on time. Our team loves coming into a clean workspace.',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-cover bg-center bg-no-repeat py-20 lg:py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/spotless-testimonial/1920/900')" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-accent">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-medium text-white">What our customers say</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl bg-white p-8 shadow-lg">
              <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 leading-relaxed text-body">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-6 font-accent font-semibold text-heading">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
