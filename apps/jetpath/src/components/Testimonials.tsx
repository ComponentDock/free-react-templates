import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Adventure Traveler',
    avatar: 'https://picsum.photos/seed/jetpath-sarah/100/100',
    rating: 5,
    text: 'Jetpath made our Bali trip absolutely magical! Everything was perfectly organized from start to finish.',
  },
  {
    name: 'James Rodriguez',
    role: 'Family Vacationer',
    avatar: 'https://picsum.photos/seed/jetpath-james/100/100',
    rating: 5,
    text: 'The Greece package exceeded all expectations. Our kids loved every moment. Highly recommended!',
  },
  {
    name: 'Emily Chen',
    role: 'Solo Traveler',
    avatar: 'https://picsum.photos/seed/jetpath-emily/100/100',
    rating: 5,
    text: 'As a solo traveler, I felt safe and supported throughout my Japan tour. The guides were exceptional.',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-jet-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-jet-teal font-semibold text-sm uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-jet-navy">
            What Our Travelers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
              <Quote className="w-8 h-8 text-jet-teal/20 mb-3" />
              <p className="text-jet-muted text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-jet-navy">{t.name}</p>
                  <p className="text-xs text-jet-muted">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
