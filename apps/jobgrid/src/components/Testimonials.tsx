import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'JobGrid made finding my dream job incredibly easy. Within a week, I had multiple interview invitations from top companies.',
    name: 'Sarah Mitchell',
    role: 'Product Designer at Figma',
    avatar: 'https://picsum.photos/seed/avatar-sarah/80/80',
  },
  {
    quote:
      'As a hiring manager, JobGrid has been the best platform for finding qualified candidates quickly and efficiently.',
    name: 'James Rodriguez',
    role: 'HR Director at Stripe',
    avatar: 'https://picsum.photos/seed/avatar-james/80/80',
  },
  {
    quote:
      'I was looking for a remote position and JobGrid had exactly what I needed. The search filters are fantastic.',
    name: 'Emily Chen',
    role: 'Software Engineer at Shopify',
    avatar: 'https://picsum.photos/seed/avatar-emily/80/80',
  },
  {
    quote:
      'The quality of job listings on JobGrid is unmatched. Every posting feels legitimate and well-curated.',
    name: 'Michael Brooks',
    role: 'Marketing Lead at HubSpot',
    avatar: 'https://picsum.photos/seed/avatar-michael/80/80',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            What our users say
          </h2>
          <p className="mt-3 text-text-muted">Trusted by thousands of job seekers and employers.</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative rounded-2xl border border-gray-100 bg-gray-50 p-8 sm:p-12">
            <Quote className="absolute left-6 top-6 h-10 w-10 text-brand/15" />

            <div className="relative z-10">
              <p className="text-lg leading-relaxed text-gray-700 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-brand-dark">{t.name}</div>
                  <div className="text-sm text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot navigation */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  'h-3 w-3 rounded-full transition-all',
                  i === active ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
