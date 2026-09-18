import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    text: 'BlankSlate helped us transform our business strategy completely. Their team delivered exceptional results that exceeded our expectations in every way.',
  },
  {
    name: 'Michael Chen',
    role: 'Director, GrowthCo',
    text: 'Working with BlankSlate was a game-changer for our marketing efforts. The ROI we achieved was beyond anything we imagined possible.',
  },
  {
    name: 'Emily Davis',
    role: 'Founder, DesignHub',
    text: 'The level of professionalism and creativity at BlankSlate is unmatched. They truly understand how to build products that people love.',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-dark md:text-4xl">
          My satisfied customer says
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-mist">{t.text}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.name.replace(/\s/g, '')}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
