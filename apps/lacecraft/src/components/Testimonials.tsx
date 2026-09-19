import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Best shoes I've ever owned! The comfort is unreal, and I get compliments everywhere I go. Lacecraft never disappoints.",
    name: 'Sarah Chen',
    role: 'Marathon Runner',
    avatar: 'https://picsum.photos/seed/lacecraft-avatar-1/100/100',
    rating: 4,
  },
  {
    id: 2,
    quote:
      "I've tried dozens of sneaker brands, but Lacecraft is on another level. The quality and style are unmatched at this price point.",
    name: 'Marcus Johnson',
    role: 'Sneaker Enthusiast',
    avatar: 'https://picsum.photos/seed/lacecraft-avatar-2/100/100',
    rating: 4,
  },
  {
    id: 3,
    quote:
      'From the ordering experience to the fit, everything was perfect. My go-to brand for all my footwear needs now.',
    name: 'Emily Rodriguez',
    role: 'Fitness Coach',
    avatar: 'https://picsum.photos/seed/lacecraft-avatar-3/100/100',
    rating: 4,
  },
]

const trustStats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '15K+', label: '5-Star Reviews' },
  { value: '98%', label: 'Would Recommend' },
]

export function Testimonials() {
  return (
    <section className="bg-gray-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="rounded-full bg-primary-900/30 px-3 py-1 text-xs font-bold text-primary-400">
            Customer Love
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-2xl bg-gray-900 p-6">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={cn(
                      'h-4 w-4',
                      s <= t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-700',
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-primary-400">{s.value}</p>
              <p className="mt-1 text-xs text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
