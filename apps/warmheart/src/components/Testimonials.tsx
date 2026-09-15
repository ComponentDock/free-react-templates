import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Cordelia Barton',
    role: 'Director at Foundation',
    quote:
      "It won't be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its impact.",
  },
  {
    name: 'Marcus Williams',
    role: 'Community Leader',
    quote:
      'Las Vegas has more than 100,000 hotel rooms to choose from. There is something for every budget, and enough variety to keep anyone entertained for weeks.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Volunteer Coordinator',
    quote:
      "Working with Warmheart has been an incredible experience. The dedication of the team and the impact we've seen in communities is truly inspiring and life-changing.",
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-bg-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-medium text-text-primary md:text-3xl">
            Testimonial from our Donors
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-8 shadow-sm border border-border">
              <Quote className="mb-4 h-8 w-8 text-brand/30" aria-hidden="true" />
              <p className="mb-6 text-sm leading-relaxed text-text-muted">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/warmheart-${t.name.split(' ')[0]!.toLowerCase()}/60/60`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-medium text-text-primary">{t.name}</h4>
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
