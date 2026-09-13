import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Remedy has been my go-to pharmacy for years. The quality of their supplements is unmatched, and the delivery is always fast.',
    author: 'Kelly Holmes',
  },
  {
    quote:
      'I love the wide selection of vitamins and wellness products. The customer service team is always helpful and friendly.',
    author: 'Rebecca Morando',
  },
  {
    quote:
      'Great prices and reliable products. I recommend Remedy to anyone looking for quality health supplements.',
    author: 'Lucas Gallone',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-20" data-testid="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink md:text-4xl">
          Happy Customers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-lg bg-white p-8 shadow-sm">
              <Quote className="mb-4 text-brand" size={32} />
              <p className="mb-6 text-sm leading-relaxed text-mist italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm font-bold text-ink">&mdash; {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
