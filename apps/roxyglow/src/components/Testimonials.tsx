import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    stars: 5,
    text: 'An absolutely stunning hotel with impeccable service. The rooms are beautifully designed and the staff went above and beyond to make our anniversary special.',
    avatar: 'roxyglow-test1',
  },
  {
    name: 'David Chen',
    stars: 5,
    text: 'From the moment we arrived, we were treated like royalty. The spa was heavenly and the dining experience was world-class. We will definitely return.',
    avatar: 'roxyglow-test2',
  },
  {
    name: 'Maria Rodriguez',
    stars: 5,
    text: 'The perfect getaway destination. Luxurious rooms, breathtaking views, and a level of hospitality that is hard to find anywhere else. Truly exceptional.',
    avatar: 'roxyglow-test3',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-light-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">Testimony</p>
          <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
            Our Happy Guest Says
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <img
                  src={`https://picsum.photos/seed/${t.avatar}/80/80`}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-body">{t.text}</p>
              <h4 className="font-heading text-lg font-semibold text-ink">{t.name}</h4>
              <p className="text-xs text-body">Guests</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
