import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "The best Italian food I've had outside of Italy. The carbonara was absolutely perfection — you can taste the love in every bite.",
    name: 'Sarah M.',
    role: 'Regular Guest',
    image: 'https://picsum.photos/seed/sapor-6/100/100',
  },
  {
    quote:
      'An unforgettable anniversary dinner. The staff treated us like family and the branzino was cooked to perfection.',
    name: 'Michael R.',
    role: 'Anniversary Dinner',
    image: 'https://picsum.photos/seed/sapor-7/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Reviews &amp; Testimonials
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Don't just take our word for it — hear from the guests who have shared our table.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl bg-gray-50 p-8">
              <div className="flex gap-1 text-primary-500" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-gray-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
