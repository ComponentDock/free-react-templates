import { Star } from 'lucide-react'

const testimonials = [
  {
    text: 'Their attention to detail and creative vision transformed our space beyond what we imagined possible. Highly recommended for any design project.',
    name: 'Renee Calhoun',
    role: 'CEO Woolley',
    avatar: 'https://picsum.photos/seed/pediment-av1/80/80',
  },
  {
    text: 'Working with this team was an absolute pleasure. They understood our needs perfectly and delivered exceptional results on time.',
    name: 'Marcus Chen',
    role: 'Director of Operations',
    avatar: 'https://picsum.photos/seed/pediment-av2/80/80',
  },
  {
    text: 'From concept to completion, every phase was handled with professionalism and creativity. The end result exceeded our expectations.',
    name: 'Sarah Mitchell',
    role: 'Project Manager',
    avatar: 'https://picsum.photos/seed/pediment-av3/80/80',
  },
] as const

const logos = ['Arch Studio', 'Design Co', 'Build Right', 'Plan Pro', 'Craft Works'] as const

export function Testimonials() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 font-display text-sm uppercase tracking-wider text-brand">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            What your clients say
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="mb-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-footer-muted italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <h5 className="text-sm font-semibold text-white">{t.name}</h5>
              <span className="text-xs text-brand">{t.role}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-display text-white/30">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
