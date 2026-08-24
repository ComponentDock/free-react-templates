import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    quote:
      'Spark has completely transformed how our team collaborates. We shipped 40% faster after switching.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    quote:
      'The best investment we made this year. The analytics alone saved us countless hours of manual work.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Designer',
    quote: 'Beautiful, intuitive, and powerful. Spark makes every part of my workflow smoother.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Startup Founder',
    quote:
      'From day one, Spark felt like it was built for us. The customization options are incredible.',
    rating: 4,
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-lavender py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl">
          What Our Customers Have to Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-smoke">"{t.quote}"</p>
              <div>
                <p className="font-bold text-ink">{t.name}</p>
                <p className="text-xs text-smoke">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
