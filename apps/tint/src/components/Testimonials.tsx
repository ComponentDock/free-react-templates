import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Working with this team transformed our office into a space that truly reflects our brand. The attention to detail was remarkable.',
    name: 'Sarah Mitchell',
    role: 'CEO & Founder',
    avatar: 'https://picsum.photos/seed/tint-testi1/80/80',
  },
  {
    quote:
      'They understood our vision from day one and delivered beyond our expectations. Our showroom has never looked better.',
    name: 'James Cooper',
    role: 'Creative Director',
    avatar: 'https://picsum.photos/seed/tint-testi2/80/80',
  },
  {
    quote:
      'Professional, creative, and deadline-driven. The renovation project was completed on time and under budget.',
    name: 'Emma Rodriguez',
    role: 'Project Manager',
    avatar: 'https://picsum.photos/seed/tint-testi3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold-500">
            About Our Company
          </span>
          <h2 className="text-3xl font-bold text-navy-800 font-[family-name:var(--font-condensed)] md:text-4xl">
            Some statistics that we want
            <br />
            to show our viewers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-sm bg-white p-8 shadow-sm">
              <Quote size={32} className="mb-4 text-gold-400" aria-hidden="true" />
              <p className="mb-6 italic leading-relaxed text-gray-500">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-navy-800">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
