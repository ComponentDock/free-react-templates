import { Quote } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Listhub made it incredibly easy to find the best local businesses. The reviews and ratings are trustworthy and the interface is beautiful.',
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/listhub-av1/80/80',
  },
  {
    id: 2,
    quote:
      'As a business owner, listing on Listhub brought us many new customers. The platform is well-designed and easy to navigate.',
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    avatar: 'https://picsum.photos/seed/listhub-av2/80/80',
  },
  {
    id: 3,
    quote:
      'I love how I can discover new places in my city. The search and filter options make it simple to find exactly what I need.',
    name: 'Emily Rodriguez',
    role: 'Frequent Traveler',
    avatar: 'https://picsum.photos/seed/listhub-av3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            What People Say
          </h2>
          <p className="mt-2 text-text-muted">Testimonials</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.id} className="rounded-lg bg-white p-6 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-brand/30" aria-hidden="true" />
              <p className="mb-6 text-sm leading-relaxed text-text-muted">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <span className="block text-sm font-semibold text-heading">{t.name}</span>
                  <span className="text-xs text-text-muted">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
