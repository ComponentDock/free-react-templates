import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Exceptional work on our office renovation. The team was professional, punctual, and delivered beyond our expectations.',
    author: 'Jane Doe',
    company: 'XYZ Inc.',
  },
  {
    quote:
      'From planning to execution, every phase was handled with utmost care and expertise. Highly recommended for any construction project.',
    author: 'John Doe',
    company: 'ABC Corp.',
  },
  {
    quote:
      'Outstanding quality and attention to detail. Our new facility was completed ahead of schedule and under budget.',
    author: 'Sarah Johnson',
    company: 'BuildCo',
  },
]

export interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section data-testid="testimonials" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold uppercase text-ink md:text-4xl">
          Happy Customer Says
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded bg-paper p-8 text-center">
              <Quote className="mx-auto mb-4 h-8 w-8 rotate-180 text-brand/30" />
              <p className="mb-6 text-sm leading-relaxed text-mist italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-display text-sm font-semibold text-ink">{t.author}</p>
              <p className="text-xs text-mist">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
