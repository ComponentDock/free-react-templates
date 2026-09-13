import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    text: 'Our stay at Seaview was absolutely magical. The ocean views from our suite were breathtaking, and the staff went above and beyond to make our anniversary special.',
    name: 'Sarah Johnson',
    image: 'seaview-author-1',
  },
  {
    text: "From the moment we checked in, we felt at home. The spa treatments were divine and the beach was just steps away. We can't wait to return.",
    name: 'Michael Chen',
    image: 'seaview-author-2',
  },
  {
    text: 'A perfect family vacation. The kids loved the pool and we loved the sunset cocktails. Seaview Hotel truly knows how to create lasting memories.',
    name: 'Emily Rodriguez',
    image: 'seaview-author-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">Clients</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
            Testimonials
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={cn(
                'rounded-lg bg-mist p-8 shadow-sm',
                'flex flex-col items-center text-center',
              )}
            >
              <Quote size={48} className="mb-6 text-primary-400/20" strokeWidth={1} />
              <p className="mb-8 flex-1 leading-relaxed text-ink">{t.text}</p>
              <img
                src={`https://picsum.photos/seed/${t.image}/80/80`}
                alt={t.name}
                className="mb-3 h-20 w-20 rounded-full object-cover"
              />
              <p className="font-semibold text-navy">{t.name}</p>
              <p className="text-sm text-smoke">Client</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
