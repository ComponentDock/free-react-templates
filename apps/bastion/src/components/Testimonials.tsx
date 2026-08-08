import { Quote } from 'lucide-react'
import { Card } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Bastion delivered our headquarters on time and under budget. The attention to detail is remarkable.',
    author: 'Dennis Green',
    role: 'Architect',
  },
  {
    quote:
      'From the first concept sketch to the final walkthrough, every step felt considered and collaborative.',
    author: 'Sarah Mitchell',
    role: 'Interior Designer',
  },
  {
    quote: 'Our new storefront doubled foot traffic — customers constantly comment on the space.',
    author: 'James Carter',
    role: 'Retail Owner',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Clients Says
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-white/10 bg-white/5 dark:bg-white/5">
              <Card.Content className="p-6">
                <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
                <p className="mt-4 leading-relaxed text-gray-200">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/20 font-display text-sm font-bold text-brand">
                    {testimonial.author.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
