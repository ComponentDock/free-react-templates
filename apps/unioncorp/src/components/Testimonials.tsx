import { Star, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface TestimonialsProps {
  className?: string
}

const testimonials = [
  {
    name: 'Michael Torres',
    role: 'CEO, TechVentures Inc.',
    quote:
      'Their financial planning service transformed our approach to growth. We secured funding within weeks.',
    seed: 'uc-testi-1',
  },
  {
    name: 'Sarah Chen',
    role: 'CFO, GreenLeaf Corp.',
    quote:
      'Exceptional investment management. Our portfolio has outperformed benchmarks consistently for two years.',
    seed: 'uc-testi-2',
  },
  {
    name: 'David Park',
    role: 'Founder, NovaTech',
    quote:
      'The tax consulting team saved us over 30% on our annual tax liability. Highly recommend their services.',
    seed: 'uc-testi-3',
  },
]

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section className={cn('py-16 sm:py-20', className)} aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 id="testimonials-heading" className="text-2xl font-bold text-ink sm:text-3xl">
            Happy Customers
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary-200" />
              <p className="text-sm leading-relaxed text-smoke italic">"{t.quote}"</p>
              <div className="flex gap-1 text-accent-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-smoke">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
