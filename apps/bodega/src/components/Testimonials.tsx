import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    quote:
      'Exceptional quality and fast delivery. The products exceeded my expectations in every way.',
    avatar: 'https://picsum.photos/seed/bodega-avatar1/100/100',
  },
  {
    name: 'Jane Smith',
    role: 'Designer, StudioX',
    quote:
      'Beautiful collection, amazing craftsmanship. Will definitely order again from this store.',
    avatar: 'https://picsum.photos/seed/bodega-avatar2/100/100',
  },
  {
    name: 'Mike Johnson',
    role: 'Entrepreneur',
    quote:
      'Great customer service and premium products. Highly recommended for fashion enthusiasts.',
    avatar: 'https://picsum.photos/seed/bodega-avatar3/100/100',
  },
]

function Stars() {
  return (
    <div className="flex justify-center gap-1 mb-3" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-brand text-brand" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 bg-light-grey" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-heading text-center mb-12">
          Our Satisfied Customer says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              />
              <Stars />
              <p className="text-body italic mb-4">"{t.quote}"</p>
              <p className="font-bold text-heading">{t.name}</p>
              <p className="text-sm text-muted">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
