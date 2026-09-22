import { Star } from './Star'

const TESTIMONIALS = [
  {
    name: 'Brian Doe',
    image: 'https://picsum.photos/seed/luxstay-user-1/120/120',
    quote:
      'An absolutely stunning experience. The rooms were impeccable, and the staff went above and beyond to make our stay memorable.',
  },
  {
    name: 'Nathalie Miller',
    image: 'https://picsum.photos/seed/luxstay-user-2/120/120',
    quote:
      'The spa was heavenly, and the dining experience was world-class. We will definitely be returning for our anniversary.',
  },
  {
    name: 'Shara Jones',
    image: 'https://picsum.photos/seed/luxstay-user-3/120/120',
    quote:
      'From check-in to checkout, everything was perfection. The view from our suite was breathtaking and the service unmatched.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-light-grey py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-2 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Star key={i} filled />
            ))}
          </div>
          <h2 id="testimonials-heading" className="mb-3 font-heading text-3xl text-black">
            Our Satisfied Guests Say
          </h2>
          <p className="mx-auto max-w-md text-sm text-text-body">
            Hear from our guests about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 shadow-md">
              <img
                src={t.image}
                alt={t.name}
                className="mx-auto mb-4 h-[120px] w-[120px] rounded-full object-cover"
              />
              <h3 className="mb-1 text-center text-lg font-medium text-black">{t.name}</h3>
              <p className="mb-4 text-center text-xs text-text-body">Satisfied Customer</p>
              <blockquote className="text-center text-sm leading-relaxed text-text-body">
                "{t.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
