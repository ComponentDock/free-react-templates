import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Marcus transformed our entire product experience. His design thinking elevated our brand and our users love the new interface.',
    avatar: 'https://picsum.photos/seed/boldcraft-testi-1/80/80',
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
  },
  {
    quote:
      'Working with BoldCraft was a game-changer. They brought clarity to our vision and delivered designs that exceeded expectations.',
    avatar: 'https://picsum.photos/seed/boldcraft-testi-2/80/80',
    name: 'David Chen',
    role: 'Founder at LaunchPad',
  },
  {
    quote:
      'The attention to detail and user-first approach made all the difference. Our conversion rates improved by 40% after the redesign.',
    avatar: 'https://picsum.photos/seed/boldcraft-testi-3/80/80',
    name: 'Emily Rodriguez',
    role: 'Product Lead at GrowthHub',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-text-primary">
          Client Testimonial
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-[var(--radius-testimonial)] bg-testimonial-bg p-8">
              <Quote className="mb-4 h-8 w-8 text-brand/30" />
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-heading text-sm font-bold text-brand">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
