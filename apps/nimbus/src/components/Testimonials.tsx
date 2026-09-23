import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    quote:
      'Nimbus transformed our workflow completely. The analytics dashboard alone saved us hours of manual reporting each week.',
    avatar: 'https://picsum.photos/seed/nimbus-avatar1/80/80',
    rating: 5,
  },
  {
    name: 'James Cooper',
    quote:
      'Best SaaS tool we have used. The interface is intuitive, the support team is responsive, and the pricing is fair.',
    avatar: 'https://picsum.photos/seed/nimbus-avatar2/80/80',
    rating: 4,
  },
  {
    name: 'Emily Chen',
    quote:
      'Our team adopted Nimbus within a day. The onboarding experience is seamless and the features are exactly what we needed.',
    avatar: 'https://picsum.photos/seed/nimbus-avatar3/80/80',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Testimonial from our Clients</h2>
          <p className="text-smoke">See what our customers have to say about their experience.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="mb-3 text-sm leading-relaxed text-smoke">"{t.quote}"</p>
                <h4 className="mb-1 text-sm font-semibold text-ink">{t.name}</h4>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < t.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
