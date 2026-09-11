import { Quote } from 'lucide-react'

interface TestimonialItem {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      'Stratagem transformed our business operations completely. Their strategic insights and hands-on approach delivered results far beyond our expectations.',
    name: 'Robert Thomson',
    role: 'Business Owner',
    avatar: 'https://picsum.photos/seed/stratagem-test1/80/80',
  },
  {
    quote:
      'Working with the Stratagem team was a game-changer for our startup. They provided the roadmap we needed to scale from seed to Series A.',
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart',
    avatar: 'https://picsum.photos/seed/stratagem-test2/80/80',
  },
  {
    quote:
      'Their finance consulting helped us optimize costs and increase profitability by 40% in just six months. Highly recommended for any growing business.',
    name: 'James Anderson',
    role: 'CFO, GrowthCorp',
    avatar: 'https://picsum.photos/seed/stratagem-test3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-light text-white md:text-4xl">Testimonials</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          What our clients say about working with us
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <Quote className="mx-auto h-8 w-8 text-brand/60" aria-hidden="true" />
              <p className="mt-6 text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex flex-col items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-16 w-16 rounded-full border-2 border-brand/40 object-cover"
                  loading="lazy"
                />
                <h3 className="mt-3 text-sm font-medium text-white">{t.name}</h3>
                <p className="text-xs text-white/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
