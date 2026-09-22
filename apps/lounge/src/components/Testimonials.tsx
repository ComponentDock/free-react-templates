import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Dennis Green',
    origin: 'Italy',
    avatar: 'https://picsum.photos/seed/lounge-person-1/100/100',
    rating: 4.5,
    quote:
      'An absolutely wonderful stay! The rooms were beautifully appointed and the staff went above and beyond to make us feel welcome. The ocean views from our suite were breathtaking.',
  },
  {
    name: 'Maria Santos',
    origin: 'Spain',
    avatar: 'https://picsum.photos/seed/lounge-person-2/100/100',
    rating: 4.5,
    quote:
      "Perfect getaway for our anniversary. The spa treatments were heavenly and the restaurant served the best seafood we've ever had. We'll definitely be back next year.",
  },
  {
    name: 'James Wilson',
    origin: 'UK',
    avatar: 'https://picsum.photos/seed/lounge-person-3/100/100',
    rating: 4.5,
    quote:
      'From the moment we arrived, everything was perfect. The family room was spacious and comfortable, and the kids loved the pool. Highly recommend for families.',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating) ? 'fill-brand text-brand' : 'text-lounge-300'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Guests Says
          </p>
          <h2 className="font-heading text-3xl font-bold text-lounge-900 md:text-4xl">
            Our Satisfied Guests says
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
          {testimonials.map((t) => (
            <div key={t.name} className="min-w-[300px] flex-shrink-0 rounded-lg bg-lounge-50 p-6">
              <div className="mb-4 flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-heading text-base font-bold text-lounge-900">{t.name}</h4>
                  <p className="text-xs text-lounge-400">{t.origin}</p>
                </div>
              </div>
              <Stars rating={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-lounge-500">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
