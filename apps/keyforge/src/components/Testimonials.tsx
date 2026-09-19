import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'James Wilson',
    role: 'Business Owner',
    quote:
      'Outstanding service! They installed a new access control system for our office and it works flawlessly. Highly recommended.',
    avatar: 'https://picsum.photos/seed/keyforge-james/100/100',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    quote:
      'Quick response when I was locked out at midnight. The technician was professional and got me back inside in minutes.',
    avatar: 'https://picsum.photos/seed/keyforge-sarah/100/100',
  },
  {
    name: 'Robert Chen',
    role: 'Property Manager',
    quote:
      'We have used KeyForge for all our properties. Their security door installations are top quality and fairly priced.',
    avatar: 'https://picsum.photos/seed/keyforge-robert/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-slate py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white p-6 shadow-sm">
              <Quote size={24} className="mb-3 text-brand" aria-hidden="true" />
              <p className="mb-4 text-sm leading-relaxed text-body">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
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
