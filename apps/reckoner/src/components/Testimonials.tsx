import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Reckoner has transformed our financial management. Their expertise in bookkeeping and tax planning has saved us both time and money.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    quote:
      'The team at Reckoner provides exceptional service. They helped us streamline our payroll process and improve our financial reporting.',
    author: 'Michael Chen',
    role: 'CFO, GrowthVentures',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    quote:
      'Professional, reliable, and thorough. Reckoner has been our trusted bookkeeping partner for over five years.',
    author: 'Emily Rodriguez',
    role: 'Owner, Rodriguez Retail',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-smoke">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-lg bg-mist p-6 shadow-sm">
              <div className="flex gap-1 text-primary-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-smoke">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-semibold text-ink">{testimonial.author}</p>
                  <p className="text-sm text-smoke">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
