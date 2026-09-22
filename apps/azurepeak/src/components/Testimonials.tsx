import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    quote:
      'An absolutely breathtaking experience. The rooms are immaculate, the staff is incredibly attentive, and the ocean views are simply unmatched. We will definitely be returning.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    quote:
      'From the moment we arrived, everything was perfect. The spa was heavenly, the dining was exquisite, and the concierge went above and beyond to make our anniversary special.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    quote:
      'AzurePeak is the definition of luxury. The infinity pool at sunset is magical, and the Presidential Villa exceeded all our expectations. Truly a five-star experience.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-blue-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Guest Experiences
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            What Our Guests Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl bg-blue-800/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-blue-900">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="font-semibold text-white">{testimonial.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
