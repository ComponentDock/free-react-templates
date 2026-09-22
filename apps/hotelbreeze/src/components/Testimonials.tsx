import { cn } from '@free-react-templates/ui'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Business Traveler',
    text: 'An exceptional stay from start to finish. The rooms are beautifully appointed and the staff went above and beyond to make us feel welcome.',
  },
  {
    name: 'Michael Chen',
    role: 'Vacation Guest',
    text: 'The perfect getaway. Stunning views, delicious food, and a spa that truly refreshed us. We will be coming back next year.',
  },
] as const

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section id="testimonials" className={cn('bg-paper py-20', className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Testimonials
          </h2>
          <span className="mx-auto mb-8 block h-px w-12 bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="rounded-sm bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-mist italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <cite className="not-italic">
                  <span className="block text-sm font-medium text-ink">{t.name}</span>
                  <span className="text-xs text-mist">{t.role}</span>
                </cite>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
