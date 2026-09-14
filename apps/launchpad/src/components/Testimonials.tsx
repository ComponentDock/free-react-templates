import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO at TechFlow',
    quote:
      'Launchpad transformed how we onboard new clients. The intuitive dashboard and real-time analytics give us insights we never had before.',
    avatar: 'https://picsum.photos/seed/launchpad-t1/100/100',
  },
  {
    name: 'James Rivera',
    role: 'Founder at NovaByte',
    quote:
      'We cut our deployment time by 60% after switching to Launchpad. The performance is outstanding and the support team is incredibly responsive.',
    avatar: 'https://picsum.photos/seed/launchpad-t2/100/100',
  },
  {
    name: 'Emily Chen',
    role: 'Product Lead at Cloudrise',
    quote:
      'The best SaaS platform we have used. Clean UI, reliable uptime, and the pricing is fair for what you get. Highly recommended.',
    avatar: 'https://picsum.photos/seed/launchpad-t3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials from our Clients</h2>
          <p className="mt-2 text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-gray-100 bg-surface p-8 text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <p className="mt-6 text-sm leading-relaxed text-gray-500">{t.quote}</p>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="mt-4 text-sm font-bold text-gray-900">{t.name}</h4>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
