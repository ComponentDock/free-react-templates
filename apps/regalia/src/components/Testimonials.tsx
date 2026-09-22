import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'An absolutely breathtaking experience. The attention to detail and level of service exceeded all our expectations.',
    author: 'Sarah Johnson',
    role: 'Travel Blogger',
  },
  {
    quote:
      'The perfect getaway. From the moment we arrived, every detail was taken care of. We will definitely be back.',
    author: 'Michael Chen',
    role: 'Business Executive',
  },
  {
    quote: 'A truly luxurious stay. The spa treatments were divine and the dining was world-class.',
    author: 'Emma Williams',
    role: 'Food Critic',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-warm py-20" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-text-heading">
            Guest Reviews
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            What our guests say about their experience
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <blockquote className="mb-6 text-sm leading-relaxed text-gray-500 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-heading text-base font-semibold text-text-heading">{t.author}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
